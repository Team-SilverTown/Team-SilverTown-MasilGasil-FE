// Source: https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/overlays/src/usePreventScroll.ts
import { chain, getScrollParent, isIOS, useLayoutEffect } from "@react-aria/utils";

interface PreventScrollOptions {
  isDisabled?: boolean;
}

// @ts-ignore
const visualViewport = typeof window !== "undefined" && window.visualViewport;

const nonTextInputTypes = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);

let preventScrollCount = 0;
let restore: any;

export function usePreventScroll(options: PreventScrollOptions = {}) {
  let { isDisabled } = options;

  useLayoutEffect(() => {
    if (isDisabled) {
      return;
    }

    preventScrollCount++;
    if (preventScrollCount === 1) {
      if (isIOS()) {
        restore = preventScrollMobileSafari();
      } else {
        restore = preventScrollStandard();
      }
    }

    return () => {
      preventScrollCount--;
      if (preventScrollCount === 0) {
        restore();
      }
    };
  }, [isDisabled]);
}

function preventScrollStandard() {
  return chain(
    setStyle(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`,
    ),
    setStyle(document.documentElement, "overflow", "hidden"),
  );
}

function preventScrollMobileSafari() {
  let scrollable: Element;
  let lastY = 0;
  let onTouchStart = (e: TouchEvent) => {
    scrollable = getScrollParent(e.target as Element);
    if (scrollable === document.documentElement && scrollable === document.body) {
      return;
    }

    lastY = e.changedTouches[0].pageY;
  };

  let onTouchMove = (e: TouchEvent) => {
    if (scrollable === document.documentElement || scrollable === document.body) {
      e.preventDefault();
      return;
    }

    let y = e.changedTouches[0].pageY;
    let scrollTop = scrollable.scrollTop;
    let bottom = scrollable.scrollHeight - scrollable.clientHeight;

    if (bottom === 0) {
      return;
    }

    if ((scrollTop <= 0 && y > lastY) || (scrollTop >= bottom && y < lastY)) {
      e.preventDefault();
    }

    lastY = y;
  };

  let onTouchEnd = (e: TouchEvent) => {
    let target = e.target as HTMLElement;

    if (willOpenKeyboard(target) && target !== document.activeElement) {
      e.preventDefault();

      // Apply a transform to trick Safari into thinking the input is at the top of the page
      // so it doesn't try to scroll it into view. When tapping on an input, this needs to
      // be done before the "focus" event, so we have to focus the element ourselves.
      target.style.transform = "translateY(-2000px)";
      target.focus();
      requestAnimationFrame(() => {
        target.style.transform = "";
      });
    }
  };

  let onFocus = (e: FocusEvent) => {
    let target = e.target as HTMLElement;
    if (willOpenKeyboard(target)) {
      // Transform also needs to be applied in the focus event in cases where focus moves
      // other than tapping on an input directly, e.g. the next/previous buttons in the
      // software keyboard. In these cases, it seems applying the transform in the focus event
      // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
      target.style.transform = "translateY(-2000px)";
      requestAnimationFrame(() => {
        target.style.transform = "";

        // This will have prevented the browser from scrolling the focused element into view,
        // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
        if (visualViewport) {
          if (visualViewport.height < window.innerHeight) {
            // If the keyboard is already visible, do this after one additional frame
            // to wait for the transform to be removed.
            requestAnimationFrame(() => {
              scrollIntoView(target);
            });
          } else {
            // Otherwise, wait for the visual viewport to resize before scrolling so we can
            // measure the correct position to scroll to.
            visualViewport.addEventListener("resize", () => scrollIntoView(target), { once: true });
          }
        }
      });
    }
  };

  let onWindowScroll = () => {
    // Last resort. If the window scrolled, scroll it back to the top.
    // It should always be at the top because the body will have a negative margin (see below).
    window.scrollTo(0, 0);
  };

  // Record the original scroll position so we can restore it.
  // Then apply a negative margin to the body to offset it by the scroll position. This will
  // enable us to scroll the window to the top, which is required for the rest of this to work.
  let scrollX = window.pageXOffset;
  let scrollY = window.pageYOffset;

  let restoreStyles = chain(
    setStyle(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`,
    ),
    setStyle(document.documentElement, "overflow", "hidden"),
    setStyle(document.body, "marginTop", `-${scrollY}px`),
  );

  // Scroll to the top. The negative margin on the body will make this appear the same.
  window.scrollTo(0, 0);

  let removeEvents = chain(
    addEvent(document, "touchstart", onTouchStart, {
      passive: false,
      capture: true,
    }),
    addEvent(document, "touchmove", onTouchMove, {
      passive: false,
      capture: true,
    }),
    addEvent(document, "touchend", onTouchEnd, {
      passive: false,
      capture: true,
    }),
    addEvent(document, "focus", onFocus, true),
    addEvent(window, "scroll", onWindowScroll),
  );

  return () => {
    // Restore styles and scroll the page back to where it was.
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}

// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function setStyle(element: any, style: string, value: string) {
  let cur = element.style[style];
  element.style[style] = value;

  return () => {
    element.style[style] = cur;
  };
}

// Adds an event listener to an element, and returns a function to remove it.
function addEvent<K extends keyof GlobalEventHandlersEventMap>(
  target: EventTarget,
  event: K,
  handler: (this: Document, ev: GlobalEventHandlersEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  target.addEventListener(event, handler as any, options);
  return () => {
    target.removeEventListener(event, handler as any, options);
  };
}

function scrollIntoView(target: Element) {
  let root = document.scrollingElement || document.documentElement;
  while (target && target !== root) {
    // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
    let scrollable = getScrollParent(target);
    if (
      scrollable !== document.documentElement &&
      scrollable !== document.body &&
      scrollable !== target
    ) {
      let scrollableTop = scrollable.getBoundingClientRect().top;
      let targetTop = target.getBoundingClientRect().top;
      if (targetTop > scrollableTop + target.clientHeight) {
        scrollable.scrollTop += targetTop - scrollableTop;
      }
    }

    target = scrollable.parentElement as any;
  }
}

function willOpenKeyboard(target: Element) {
  return (
    (target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type)) ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}

import * as React from 'react';

import { useSheetScrollerContext } from './context';
import { SheetScrollerProps } from './types';
import { isTouchDevice } from './utils';
import styles from './styles';

const SheetScroller = React.forwardRef<any, SheetScrollerProps>(
  ({ draggableAt = 'top', children, style, className = '', ...rest }, ref) => {
    const sheetScrollerContext = useSheetScrollerContext();

    function determineDragState(element: HTMLDivElement) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const isScrollable = scrollHeight > clientHeight;

      if (!isScrollable) return;

      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollHeight - scrollTop === clientHeight;

      const shouldEnable =
        (draggableAt === 'top' && isAtTop) ||
        (draggableAt === 'bottom' && isAtBottom) ||
        (draggableAt === 'both' && (isAtTop || isAtBottom));

      if (shouldEnable) {
        sheetScrollerContext.setDragEnabled();
      } else {
        sheetScrollerContext.setDragDisabled();
      }
    }

    function onScroll(e: React.UIEvent<HTMLDivElement>) {
      determineDragState(e.currentTarget);
    }

    function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
      determineDragState(e.currentTarget);
    }

    const scrollProps = isTouchDevice()
      ? { onScroll, onTouchStart }
      : undefined;

    return (
      <div
        {...rest}
        ref={ref}
        className={`react-modal-sheet-scroller ${className}`}
        style={{ ...styles.scroller, ...style }}
        {...scrollProps}
      >
        {children}
      </div>
    );
  }
);

export default SheetScroller;

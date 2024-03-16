"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface WindowProps {
  windowStyle?: string;
  children?: any;
  url?: string;
  onClose: () => void;
}
const Window = ({
  windowStyle = "width=600,height=400,left=200,top=200",
  children,
  url,
  onClose,
}: WindowProps) => {
  const [container, setContainer] = useState<HTMLDivElement>();
  const newWindow = useRef<any>(null);

  useEffect(() => {
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(url ? url : "", "", windowStyle);

      newWindow.current.document.body.appendChild(container);

      newWindow.current.addEventListener("beforeunload", function (event: Event) {
        onClose();
      });

      const curWindow = newWindow.current;

      return () => {
        curWindow.close();
        onClose();
      };
    }
  }, [container]);

  return container && createPortal(children, container);
};

export default Window;

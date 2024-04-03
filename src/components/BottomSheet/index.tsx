"use client";

import SheetBackdrop from "./SheetBackdrop";
import SheetContainer from "./SheetContainer";
import SheetContent from "./SheetContent";
import SheetHeader from "./SheetHeader";
import SheetScroller from "./SheetScroller";
import Sheet from "./sheet";
import { SheetCompound } from "./types";

import { MotionValue } from "framer-motion";

export type SheetRef = {
  y: MotionValue<number>;
  snapTo: (index: number) => void;
};

// HACK: this is needed to get the typing to work properly...
const _SheetCompound: any = Sheet;
_SheetCompound.Container = SheetContainer;
_SheetCompound.Header = SheetHeader;
_SheetCompound.Content = SheetContent;
_SheetCompound.Backdrop = SheetBackdrop;
_SheetCompound.Scroller = SheetScroller;

export default _SheetCompound as SheetCompound;

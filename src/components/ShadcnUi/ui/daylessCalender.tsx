"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/utils/ShadcnUi";
import { buttonVariants } from "@/components/ShadcnUi/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function DaylessCalendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn("p-5 pb-0", className)}
      classNames={{
        months: "flex flex-col space-y-4 ",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center py-10",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "hidden",
        head_row: "hidden",
        head_cell: "hidden",
        row: "hidden",
        cell: "hidden",
        day: "hidden",
        day_range_end: "hidden",
        day_selected: "hidden",
        day_outside: "hidden",
        day_disabled: "hidden",
        day_range_middle: "hidden",
        day_hidden: "hidden",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-6 w-6" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-6 w-6" />,
      }}
      {...props}
    />
  );
}

DaylessCalendar.displayName = "Calendar";

export { DaylessCalendar };

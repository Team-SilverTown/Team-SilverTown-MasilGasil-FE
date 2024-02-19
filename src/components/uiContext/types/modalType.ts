export type MODAL_VIEWS = "INIT_VIEW" | "LOG_INIT_CONFIRM" | "LOG_COMPLETE_RECORD" | "PIN_EDIT";

export type MODAL_ACTION =
  | {
      type: "OPEN_MODAL";
      props?: any;
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    };

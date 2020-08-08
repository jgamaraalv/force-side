export type ModalState =
  | {
      open: true;
      component: JSX.Element;
    }
  | {
      open: false;
      component: null;
    };

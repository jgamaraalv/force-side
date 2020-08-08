import { ModalState } from "./modal/types";
import { ModulesState } from "./modules";

export default interface ApplicationState {
  modal: ModalState;
  modules: ModulesState;
}

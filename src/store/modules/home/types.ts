import AsyncState from "../../../types/AsyncState";
import People from "../../../types/People";

type HomeModuleState = {
  people: AsyncState<People>;
};

export default HomeModuleState;

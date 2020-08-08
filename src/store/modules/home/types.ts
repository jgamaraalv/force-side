import AsyncState from "../../../types/AsyncState";
import People from "../../../types/People";

type HomeModuleState = {
  people: AsyncState<{
    data: People;
  }>;
};

export default HomeModuleState;

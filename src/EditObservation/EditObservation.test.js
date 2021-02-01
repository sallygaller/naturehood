import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzyme from "enzyme";
import EditObservation from "./EditObservation";
import { observation } from "../Utils/TestFiles";
import { createMemoryHistory } from "history";

enzyme.configure({ adapter: new Adapter() });

describe("MyNaturehood", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory("/");
    const wrapper = shallow(
      <EditObservation
        observation={observation}
        required={true}
        history={history}
        match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
      />
    );
    expect(
      wrapper.containsMatchingElement(<h2>Edit Observation</h2>)
    ).toBeTruthy();
  });
});

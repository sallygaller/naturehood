import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddObservation from "./AddObservation";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzyme from "enzyme";

enzyme.configure({ adapter: new Adapter() });

// flaky test due to maxboxgl

describe("AddObservation", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<AddObservation />);

    expect(wrapper).toEqual({});
  });
});

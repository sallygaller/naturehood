import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzyme from "enzyme";
import MyNaturehood from "./MyNaturehood";

enzyme.configure({ adapter: new Adapter() });

describe("MyNaturehood", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MyNaturehood />);

    expect(wrapper).toEqual({});
  });
});

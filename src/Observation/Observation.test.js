import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Observation from "./Observation";
import { observation } from "../Utils/TestFiles";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Observation observation={observation} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Observation name="Observation" observation={observation} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the UI as expected with no observation", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Observation name="Observation" observation={{}} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

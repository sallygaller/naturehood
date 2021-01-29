import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ObservationList from "./ObservationList";
import { observations } from "../Utils/TestFiles";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ObservationList observations={observations} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ObservationList name="ObservationList" observations={observations} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the UI as expected with no observations", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ObservationList name="ObservationList" observations={[]} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

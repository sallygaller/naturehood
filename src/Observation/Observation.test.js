import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
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

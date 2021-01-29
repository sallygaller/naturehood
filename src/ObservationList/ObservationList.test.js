import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
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

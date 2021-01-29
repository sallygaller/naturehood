import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Analysis from "./Analysis";
import { observations } from "../Utils/TestFiles";

it.skip("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Analysis observation={observations} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

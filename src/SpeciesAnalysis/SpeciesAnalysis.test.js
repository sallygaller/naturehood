import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SpeciesAnalysis from "./SpeciesAnalysis";
import { observations } from "../Utils/TestFiles";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SpeciesAnalysis observations={observations} speciesType={"Mammal"} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

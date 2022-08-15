import NavBarComponent from "../navComponent/navBarComponent";
import { useSelector } from "react-redux";
import WordsListComponent from "../wordsListComponent/wordsListComponent";
import "./view.style.css";
import SearchListComponent from "../searchListComponent/searchListComponent";
import ViewEachComponent from "../viewEachContentComponent/viewEachComponent";
const ViewComponent = () => {
  const myState = useSelector((state) => state.activityStatus);
  
  return (
    <div className="📦viewBox">
      <NavBarComponent />
      <div className="container">
        {myState === "MAIN" ? <WordsListComponent /> : <SearchListComponent />}
      </div>
      <ViewEachComponent/>
    </div>
  );
};

export default ViewComponent;

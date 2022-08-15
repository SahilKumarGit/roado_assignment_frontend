import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { setEachWordInfo } from "../../redux/actions";
import "./viewComponent.style.css";
import LexicalEntriesViewEachComponent from "./lexicalEntriesViewComponent";
const ViewEachComponent = () => {
  const eachDate = useSelector((state) => state.getEachWord.eachWordInfo);
  const dispatch = useDispatch();

  // console.log(eachDate);
  let esponseElement = "";
  if (eachDate.view) {
    esponseElement = (
      <div className="📦EachBox">
        <div className="navBar">
          <div></div>
          <div
            className="iconBox"
            onClick={() => {
              dispatch(setEachWordInfo());
            }}
          >
            <CloseIcon sx={{ fontSize: 25, color: "#000000" }} />
          </div>
        </div>

        <div className="eachContainer">
          <div className="title">{eachDate.data.word}</div>
          {eachDate.data.lexicalEntries.map((e, i) => {
            return <LexicalEntriesViewEachComponent key={i} data={e} />;
          })}
        </div>
      </div>
    );
  }

  return <>{esponseElement ? esponseElement : ""}</>;
};

export default ViewEachComponent;

// onScroll={(e) => {
//             console.log(e.target.scrollTop);
//           }}

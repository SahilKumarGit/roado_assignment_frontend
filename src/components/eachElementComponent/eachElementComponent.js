import "./eachElement.style.css";
import ButtonBase from "@mui/material/ButtonBase";
import { useDispatch } from "react-redux";
import { setEachWordInfo } from "../../redux/actions";

const EachElementComponent = (props) => {
  // console.log(props);
  const data = props.data;

  const dispatch = useDispatch();


  const lexicalEntries_definitions = data.lexicalEntries.map((each, i) => {
    return (
      <div key={i} className="textElement">
        ({each.lexicalCategory.id}){" "}
        {each.entries[0]?.senses[0]?.definitions || ""}
      </div>
    );
  });

  return (
    <ButtonBase sx={{ width: "100%" }} onClick={() => { dispatch(setEachWordInfo(data)) }}>
      <div className="eachComponent">
        <div className="titelElement">{data.word}</div>
        {lexicalEntries_definitions}
      </div>
    </ButtonBase>
  );
};

export default EachElementComponent;

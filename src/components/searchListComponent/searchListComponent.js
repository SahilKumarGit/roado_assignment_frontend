import EachElementComponent from "../eachElementComponent/eachElementComponent";
import { useSelector } from "react-redux";
import "./searchList.style.css"

const SearchListComponent = () => {
  const wordList = useSelector((state) => state.getSearchList.searchList);

  console.log(wordList)

  const searchListElement = wordList.map((e, i) => {
    return <EachElementComponent key={i} data={e} />;
  })

  const emptySearchElement = <div className="EMPTYBOX">
    No search result avalable!
  </div>


  return <div className="🔍SearchContainer">
    {searchListElement.length > 0 ? searchListElement : emptySearchElement}
  </div>;
};

export default SearchListComponent;

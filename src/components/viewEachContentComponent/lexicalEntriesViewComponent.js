import EntriesViewEachComponent from "./entriesViewComponent";
import "./viewComponent.style.css";
const LexicalEntriesViewEachComponent = ({ data }) => {
    // console.log(data)
    return <div className="eachBox">
        <div className="subText"> {data.lexicalCategory.id} </div>
        {data.entries.map((e, i) => {
            return <EntriesViewEachComponent key={i} data={e} />
        })}
    </div>
};

export default LexicalEntriesViewEachComponent;
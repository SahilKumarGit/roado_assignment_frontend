import SensesViewEachComponent from "./sensesViewComponent";
import "./viewComponent.style.css";
const EntriesViewEachComponent = ({ data }) => {
    // console.log(data)
    return <div>
        {data.etymologies.map((e, i) => { return <div className="subText" key={i}> {e} </div> })}

        <div className="break"></div>
        {data.senses.map((e, i) => {
            return <SensesViewEachComponent key={i} data={e} />
        })}
    </div>
};

export default EntriesViewEachComponent;
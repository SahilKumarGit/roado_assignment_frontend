import "./viewComponent.style.css";
const SensesViewEachComponent = ({ data }) => {
    // console.log(data)
    return <div>
        {data.definitions.map((e, i) => {
            return <div className="subTextStrong" key={i}> {e} </div>
        })}
        <ul className="list">
            {data.examples.map((e, i) => {
                return <li key={i}> {e.text}</li>
            })}
        </ul>
    </div>
};

export default SensesViewEachComponent;
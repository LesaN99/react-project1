import React, {useState} from "react";
import data from "./data";
import "./style.css";


export default function Accordion() {
const [selected, setSelected] = useState(null);

function handleSingleSelection(getCurrentId) {
setSelected(getCurrentId === selected ? null : getCurrentId);
}


return (
<div className="body">
    <div className="accordion">
        {
            data && data.length > 0 ?
            data.map(dataItem=> <div className="item">
                <div
                 onClick={() => handleSingleSelection(dataItem.id)}
                  className="title"
                  >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                </div>
                {selected === dataItem.id ? (
                <div className="info">{dataItem.answer}</div>
                 ) : null}
            </div>
            ) :  (
            <div>No data found !</div>
            )}
    </div>
    </div>
)
}
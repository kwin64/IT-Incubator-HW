import React from "react";
import Affair from "./Affair";
import {DefaultAffairsType, FilterType} from "./HW2";

type AffairsPropsType = {
    data:  DefaultAffairsType,
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>,
    deleteAffairCallback: (id: number) => void,
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map ( a => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ В 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        {props.setFilter("all")}
    };
    const setHigh = () => {
        {props.setFilter("high")}
    };
    const setMiddle = () => {
        {props.setFilter("middle")}
    };
    const setLow = () => {
        {props.setFilter("low")}
    };

    return (
        <div>
            <h2>Tasks</h2>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;

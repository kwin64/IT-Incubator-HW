import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType,
    deleteAffairCallback: (id: number) => void,
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        {props.deleteAffairCallback(_id)}
    }


    return (
        <div>
            <span>{props.affair.name} : {props.affair.priority} :
            <button onClick={() => {deleteCallback(props.affair._id)}}>X</button>
            </span>
        </div>
    );
}

export default Affair;

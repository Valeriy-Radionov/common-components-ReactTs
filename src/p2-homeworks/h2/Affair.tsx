import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (idAffair: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affairWrapper}>
            <div className={s.affairItems}>
                <div>{props.affair.name}</div>
                <div>{props.affair.priority}</div>
            </div>
            <button onClick={deleteCallback} className={s.deleteButton}>X</button>
        </div>
    )
}

export default Affair

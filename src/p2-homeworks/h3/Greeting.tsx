import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = name === "" ? s.errorInput : s.someClass// need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} placeholder={"Enter value"}
                            onKeyDown={onEnter} onBlur={setNameCallback}/>
            <SuperButton onClick={addUser} className={s.someClass}>add</SuperButton>
            <span>{totalUsers}</span>
            <div>
                {error && <span className={s.errorMessage}>{error}</span>}
            </div>
        </div>
    )
}

export default Greeting

import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {themeAC} from "../h10/bll/themeReducer";

export type ThemeType = {
    type: string[]
}
const themes = ['dark', 'red', 'some', "red-black"];

function HW12() {
    const themeState = useSelector<AppStoreType, ThemeType>(state => state.theme)

    const dispatch = useDispatch()
    const onChangeCallback = (themeType: string) => {
        dispatch(themeAC(themeType))
    }

    return (
        <>
            {themeState.type.map(theme => {
                return <div className={s[theme]}>
                    <hr/>
                    <span className={s[theme + '-text']}>
                homeworks 12
            </span>

                    <SuperSelect value={theme} options={themes} onChangeOption={onChangeCallback}/>
                    {/*should work (должно работать)*/}
                    {/*SuperSelect or SuperRadio*/}
                    <hr/>
                </div>
            })}
        </>);
}


export default HW12;

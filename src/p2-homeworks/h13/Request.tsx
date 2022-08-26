import React, {useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {apiManage} from "./apiManager";

type RequestPropsType = {}
export const Request = (props: RequestPropsType) => {

    let [checked, setChecked] = useState<boolean>(false)

    const onChangeChecked = (checked: boolean) => {
        
        setChecked(checked)
        apiManage.addSuccess(checked)
            .then((response) => {
                console.log()
                alert(`${response.data.errorText} body: ${response.data.yourBody.success}`)
            })
            .catch((error) => {
                console.log({...error});
                alert(error.response ? error.response.data.errorText : error.message)
            })
    }

    const onClickHandler = () => {
        apiManage.getData()
            .then((response) => {
                console.log(response)
                alert(response)
            })
            .catch((error) => {
                console.log(error.response.data.error)
                alert(error.response.data.error)
            })
    }
    return (
        <>
            <SuperCheckbox checked={checked} onChangeChecked={onChangeChecked}/>
            <SuperButton onClick={onClickHandler}>Request</SuperButton>
        </>
    )
}
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import React, {ChangeEvent, useState} from "react";
import {API} from "./api/api";
import commonstyle from "../h10/HW10.module.css";

export const Request = () => {
    const [state, setState] = useState<any>(null)
    const [checkStatus, setCheckStatus] = useState(false)

    const checkboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckStatus(e.currentTarget.checked)
    }
    const buttonOnclickHandler = () => {

        API.postInformation(checkStatus)
            .then(() => {
                return API.getInformation()
            })
            .then(res => setState(res.data))
            .catch(error => {
                setState('Error!')
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div className={commonstyle.wrapper}>
            <input type="checkbox" onChange={checkboxHandler}/>
            <SuperButton onClick={buttonOnclickHandler}>send request</SuperButton>
            <br/>
            <br/>
            <div>{JSON.stringify(state)}</div>
        </div>
    )

}
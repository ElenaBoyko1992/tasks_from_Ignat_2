import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import store, {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import s from "../h10/HW10.module.css";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, StateType>(state => state.loading).loading
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={s.wrapper}>
                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div>крутилка...</div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

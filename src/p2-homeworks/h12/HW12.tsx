import React from "react";
import s from "./HW12.module.css";
import commonstyle from "../h10/HW10.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, StateType} from "./bll/themeReducer";

const themes = ['some', 'dark', 'red', 'yellow'];

function HW12() {
    //const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback

    const onChangeCallback = (themeColor: string) => {
        dispatch(changeThemeC(themeColor))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={commonstyle.wrapper}>
                <span className={`${s.text} ${s[theme + '-text']}`}>
                homeworks 12
                </span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <SuperSelect options={themes} onChangeOption={onChangeCallback} className={s.select}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;

import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    enterKeyHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, enterKeyHandler} // деструктуризация пропсов
) => {

    return (
        <div className={s.form}>
            <SuperInputText value={name}
                            onChangeText={setNameCallback}
                            className={s.superInputClass}
                            error={error ? error : ''}
                            onKeyPress={enterKeyHandler}
            />

            <div className={s.buttonSpanBlock}>
                <SuperButton onClick={addUser}
                             className={s.button}
                             red={Boolean(error)}>
                    add
                </SuperButton>
                <span className={s.totalUsers}>{totalUsers}</span>
            </div>

        </div>
    )
}

export default Greeting

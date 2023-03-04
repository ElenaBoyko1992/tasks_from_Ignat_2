import React, {useEffect, useState} from 'react'
import s from './HW14.module.css'
import s2 from '../../p1-main/m1-ui/u1-app/App.module.css'
import axios from 'axios'
import {useSearchParams} from 'react-router-dom'
import SuperDebouncedInput from "./common/c8-SuperDebouncedInput/SuperDebouncedInput";
import commonstyle from "../h10/HW10.module.css";

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14 - done
* 3 - дописать функцию onChangeText в HW14 - done
* 4 - сделать стили в соответствии с дизайном - done
* 5 - добавить HW14 в HW5/pages/JuniorPlus - done
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test2',
            {params: {find}}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                //делает студент
                // сохранить пришедшие данные
                if (res?.data.techs) {
                    setTechs(res.data.techs)
                }
                setLoading(false)
            })
    }

    const onChangeText = (value: string) => {
        setFind(value)
        // делает студент

        // добавить/заменить значение в квери урла
        // setSearchParams(

        //причем здесь URL?
        console.log(value, "-value")
        setSearchParams({find: value})

    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams) //зачем это здесь?
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'} >
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw + ' ' + commonstyle.wrapper}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br/>}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14

import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h10/HW10.module.css";
import style from "../h11/HW11.module.css";


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeCallBack = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleRangeCallBack = (value: [number, number]) => {
        if (value[0] < value[1]) { //чтобы меньший бегунок не заходил за больший
            setValue1(value[0])
        }
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.wrapper}>
                {/*should work (должно работать)*/}
                <div className={style.range}>
                    <span className={style.minValue}>{value1}</span>
                    <SuperRange
                        // сделать так чтоб value1 изменялось
                        onChangeRange={onChangeRangeCallBack}
                        value={value1}
                    />
                </div>

                <div className={style.range}>
                    <span className={style.minValue}>{value1}</span>
                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
                        value={[value1, value2]}
                        onChangeRange={onChangeDoubleRangeCallBack}

                    />
                    <span className={style.maxValue}>{value2}</span>
                </div>

            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

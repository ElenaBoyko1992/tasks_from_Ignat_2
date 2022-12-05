import React, {ChangeEvent} from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (event: Event, value: number | number[], activeThumb: number) => {
        // @ts-ignore
        onChangeRange && onChangeRange([value[0], value[1]])
    }

    return (
        <>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="off"
                style={{maxWidth: "128px"}}
                size={'medium'}

            />
        </>
    )
}

export default SuperDoubleRange

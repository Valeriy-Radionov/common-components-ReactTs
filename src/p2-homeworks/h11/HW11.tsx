import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeValue = (value: number) => {
        setValue1(value)
    }
    const onChangeRange = (newValue: number | number[]) => {
        let newVal = newValue as number[]
        setValue2(newVal[1])
        setValue1(newVal[0])
    }
    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeValue} value={value1}/>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange max={100} min={0} onChangeRange={onChangeRange} value={[value1, value2]}/>
                <span>{value2}</span>
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

import { Input } from 'antd'
import React from 'react'

interface P {
    name:string,
    label:string,
    formikBag:any,
    [x:string]:any
}

export default function TextLabelField(props: P) {
    const {name, label, formikBag, ...rest} = props;
    const {values, handleChange} = formikBag;
    return (
        <div>
            <div className="label">{label}</div>
            <Input
                {...rest}
                name={name}
                value={values[name]}
                onChange={handleChange}
                />
        </div>
    )
}

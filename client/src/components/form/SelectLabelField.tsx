import { Input, Select } from 'antd'
import React from 'react'

interface P {
    name:string,
    label:string,
    formikBag:any,
    [x:string]:any
}

// const data = ["BMW", "Mazda", "Audi", "Volkswagen", "Toyota", "Honda", "Tesla", "Mini Cooper", "Ford", "Mercedes"]
const data = [
    {value: 0, label: "BMW"},
    {value: 1, label: "Mazda"},
    {value: 2, label: "Audi"},
    {value: 3, label: "Volkswagen"},
    {value: 4, label: "Toyota"},
    {value: 5, label: "Honda"},
    {value: 6, label: "Tesla"},
    {value: 7, label: "Mini Cooper"},
    {value: 8, label: "Ford"},
    {value: 9, label: "Mercedes"},
]

export default function SelectLabelField(props: P) {
    const {name, label, formikBag, ...rest} = props;
    const {values, setFieldValue} = formikBag;

    const handleChange = (value: any) => {
        setFieldValue(name, value);
    }

    return (
        <div>
            <div className="label">{label}</div>
            <Select
            
                {...rest}
                options={data}
                onChange={handleChange}
                optionFilterProp="label"
                />
        </div>
    )
}

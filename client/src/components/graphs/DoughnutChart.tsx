import React from 'react'
import ChartProps from './ChartProps'


export default function DoughnutChart(props: ChartProps) {
    return (
        <DoughnutChart
            data={props.data}
            options={props.options}/>
    )
}

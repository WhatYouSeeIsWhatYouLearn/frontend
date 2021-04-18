import React from 'react'
import { Scatter } from 'react-chartjs-2'
import ChartProps from './ChartProps';

export default function ScatterPlot(props: ChartProps) {
    const {data, options} = props;

    for (let dataset of data.datasets){
        
    }

    return (
        <Scatter
            data={data}
            options={options}/>
    )
}

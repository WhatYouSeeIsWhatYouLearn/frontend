import React from 'react'
import { Bar } from 'react-chartjs-2'
import { getRandomScheme, schemes } from '../../constants/datasets';
import ChartProps from './ChartProps'

export default function BarChart(props: ChartProps) {
    const {data} = props;

    let colorSchemes = Object.values(schemes);
    for (let dataset of data.datasets){

        let randomScheme = getRandomScheme(colorSchemes)
        dataset.backgroundColor = randomScheme["translucent"]
        dataset.borderColor = randomScheme["solid"]
        dataset.borderWidth= 1;
    }
    return (
        <Bar
            data={props.data}
            options={props.options}/>
    )
}

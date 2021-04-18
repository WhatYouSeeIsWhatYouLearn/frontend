import React from 'react'
import { Line } from 'react-chartjs-2';
import { getRandomScheme, schemes } from '../../constants/datasets';
import ChartProps from './ChartProps';


export default function LineChart(props: ChartProps) {
    const {data, options} = props;

    // updating the data to use line chart-specific config
    let colorSchemes = Object.values(schemes);
    console.log(data)
    for (let dataset of data.datasets){
        let randomScheme = getRandomScheme(colorSchemes)
        dataset.fill = false;
        dataset.backgroundColor = randomScheme["solid"]
        dataset.borderColor = randomScheme["translucent"]
    }

    return (
        <Line
            data={data}
            options={options}/>
    )
}

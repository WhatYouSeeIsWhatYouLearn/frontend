import React from 'react'
import ChartProps from './ChartProps';

interface P extends ChartProps{
    isDoughnut?: boolean
}

export default function PieChart(props: P) {
    const {data, options, isDoughnut} = props;
    return (
        <div>
            
        </div>
    )
}

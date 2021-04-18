import React from 'react'
import { Scatter } from 'react-chartjs-2'
import { schemes } from '../../../constants/datasets'


const data = {
    datasets:[
        {
            label: "Red",
            backgroundColor: schemes.redScheme.solid,
            borderColor: schemes.redScheme.solid,
            data: [
                {x: -1.3, y: -2.3},
                {x: -4.7, y: 0.3},
                {x: -5.1, y: 1.35},
                {x: -2.0, y: -0.5},
                {x: -3.4, y: -1.4},
                {x: 1.3, y: 3.2},
                {x: 4.7, y: -4.3},
                {x: 5.1, y: -5.35},
                {x: 2.0, y: 5.5},
                {x: 3.4, y: 4.4},
            ]
        },
        {
            label: "Blue",
            backgroundColor: schemes.blueScheme.solid,
            borderColor: schemes.blueScheme.solid,
            data: [
                {x: 1.3, y: 2.3},
                {x: 4.7, y: -0.3},
                {x: 5.1, y: -1.35},
                {x: 2.0, y: 0.5},
                {x: 3.4, y: 1.4},
                {x: -1.3, y: -3.2},
                {x: -4.7, y: 4.3},
                {x: -5.1, y: 5.35},
                {x: -2.0, y: -5.5},
                {x: -3.4, y: -4.4},
            ]
        }
    ]
}

const options = {
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "PCA1"
            },
            ticks: {
                min: -10,
                max: 10,
                stepSize: 5
            }
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: "PCA2"
            },
            ticks: {
                min: -10,
                max: 10,
                stepSize: 5
            }
        }]
    }
}
export default function PCAScatterPlot() {
    return (
        <div>
            <Scatter
                data={data}
                options={options}/>
        </div>
    )
}

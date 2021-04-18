import React from 'react'
import { Line } from 'react-chartjs-2'
import {schemes} from '../../../constants/datasets';

export default function ValidationCurve() {

    const data = {
        labels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        datasets: [
            {
                label: "Training Score",
                fill: false,
                backgroundColor: schemes.orangeScheme.solid,
                borderColor: schemes.orangeScheme.translucent,
                data: [0.2, 0.40, 0.60, 0.7, 0.75, 0.8, 0.825, 0.85, 0.875, 0.9, 0.91, 0.92]
            },
            {
                label: "Cross-validation Score",
                fill: false,
                backgroundColor: schemes.purpleScheme.solid,
                borderColor:schemes.purpleScheme.translucent,
                data: [0.2, 0.40, 0.60, 0.65, 0.675, 0.7, 0.725, 0.6, 0.4, 0.2]
            }
        ],
    }

    const options = {

        title: {
            display: true,
            text: "Validation Curve with SVM",
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Y"
                }
                
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Score"
                },
                ticks: {
                    min: 0,
                    max: 1,
                    stepSize: 0.1
                }
            }]
        }
    }

    return (
        <div>
            <Line
                data={data}
                options={options}/>
        </div>
    )
}

import React from 'react'
import {Bar} from 'react-chartjs-2'
import { schemes } from '../../../constants/datasets'

// {x:0, y: 35},
// {x:0.5, y: 11},
// {x:1,y: 0}, 
// {x:1.5, y:2},
// {x:2, y:8},
// {x:2.5, y:26},
// {x:3, y:29},
// {x:3.5, y:18},
// {x:4, y:11},
// {x:4.5, y:5}

// ticks: {
//     min: 0,
//     max: 8,
//     stepSize: 0.5
// },
interface P {
    title?: string,
    label: string,
    labels: any,
    scheme: any,
    data: any,
    xLabel?: string,
    yLabel?: string
}

export default function PetalHistogram(props: P) {
    const {title, label, labels, scheme, data: inputData, xLabel, yLabel} = props;

    const data = {
        labels: labels,
        datasets: [
            {
                label: label,
                backgroundColor: scheme["translucent"],
                borderColor: scheme["solid"],
                borderWidth: 1,
                data: inputData,
                barPercentage: 1.0,
            },
        ]
    }
    const options = {
        title: {
            display: title && true,
            text: title
        },
        scales: {
            xAxes: [{
                display: true,
                labelString: xLabel,
            }],
            yAxes: [{
                display: true,
                labelString: yLabel,
                ticks: {
                    min: 0,
                    max: 40,
                    stepSize: 10
                }
            }],
        }
    }

    return (
        <div>
            <Bar
                data={data}
                options={options}/>
        </div>
    )

}

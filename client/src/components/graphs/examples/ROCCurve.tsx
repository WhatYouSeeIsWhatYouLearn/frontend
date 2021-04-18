import React from 'react'
import { Line, Scatter } from 'react-chartjs-2'
import { minMaxStep, schemes } from '../../../constants/datasets'

export default function ROCCurve() {


    return (
        <div>
            <Scatter
                data={data}
                options={options}/>
        </div>
    )
}


function mapArrToScatter(arr: any){
    const scatter = []
    let counter = 0;
    for(let val of arr){
        
        scatter.push({
            y: val,
            x: counter
        })
        counter += 0.1;
    }
    return scatter
}

const data = {
    // labels: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    datasets: [
        {
            label: "XGB",
            fill: false,
            showLine: true,
            steppedLine: true,
            backgroundColor: schemes.purpleScheme.solid,
            borderColor: schemes.purpleScheme.translucent,
            data: mapArrToScatter([0, 0.5, 0.78, 0.86,0.88,0.89,0.9,0.91,0.915,0.918, 0.92])
        },
        {
            label: "ANN",
            fill: false,
            showLine: true,
            steppedLine: true,
            backgroundColor: schemes.orangeScheme.solid,
            borderColor: schemes.orangeScheme.translucent,
            data: mapArrToScatter([0, 0.2, 0.33, 0.48, 0.53,0.67,0.77,0.80,0.85,0.88, 0.9])
        },
        {
            label: "LR",
            fill: false,
            showLine: true,
            steppedLine: true,
            backgroundColor: schemes.redScheme.solid,
            borderColor: schemes.redScheme.translucent,
            data: mapArrToScatter([0, 0.5, 0.60, 0.70,0.75,0.78,0.80,0.81,0.82,0.82, 0.83])
        },
        {
            label: "RF",
            fill: false,
            showLine: true,
            steppedLine: true,
            backgroundColor: schemes.greenScheme.solid,
            borderColor: schemes.greenScheme.translucent,
            data: mapArrToScatter([0, 0.5, 0.60, 0.70, 0.75, 0.8, 0.86,0.88,0.9,0.91, 0.915])
        }
        
    ]
}

const options = {
    title: {
        display: true,
        text: "ROC curve of 30-days mortality model"
    },
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: "False Negative Rate"
            },
            ticks: {
                min: 0,
                max: 1,
                stepSize: 0.2
            }

        }],
        yAxes: [{
            scaleLabel:{
                display: true,
                labelString: "True Positive Rate"
            },
            ticks: {
                min: 0,
                max: 1,
                stepSize: 0.1
            }
        }]
    }
}
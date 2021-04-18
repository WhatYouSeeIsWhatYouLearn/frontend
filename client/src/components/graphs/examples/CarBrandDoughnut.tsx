import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { doughnutData, schemes } from '../../../constants/datasets'

export default function CarBrandDoughnut() {
    
    return (
        <div>
            <Doughnut
                data={doughnutData(schemes.orangeScheme)}
                options={options}/>
        </div>
    )
}

const options = {
    title: {
        display: true,
        text: "Car Brands Proportion"
    },
    legend: {
        display: false,
        position: "right",
        
        labels: {
            boxWidth: 20,
        }
    }
}
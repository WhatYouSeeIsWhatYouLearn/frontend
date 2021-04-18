import React from 'react'
import CanvasJSReact from '../../assets/lib/canvasjs.react';
import ChartProps from './ChartProps';

export default function BoxPlot(props: ChartProps) {

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        theme: "light2",
        animationEnabled: true,
        title:{
            text: "Energy in Baked Foods",
            fontSize: 16
        },
        axisY: {
            title: "Energy Per 100 g (kcal/100g)",
            titleFontSize: 14,
            labelFontSize: 12
        },
        axisX: {
            title: "Type of Food",
            titleFontSize: 14,
            labelFontsize: 12
        },
        dataPointMaxWidth: 10,
        data: [{
            type: "boxAndWhisker",
            yValueFormatString: "#,##0.# \"kcal/100g\"",
            
            dataPoints: [
                { label: "Bread",  y: [179, 256, 300, 418, 274] },
                { label: "Cake",  y: [252, 346, 409, 437, 374.5] },
                { label: "Biscuit",  y: [236, 281.5, 336.5, 428, 313] },
                { label: "Doughnut",  y: [340, 382, 430, 452, 417] },
                { label: "Pancakes",  y: [194, 224.5, 342, 384, 251] },
                { label: "Bagels",  y: [241, 255, 276.5, 294, 274.5] }
            ]
        }]
    }
		console.log(props.data)
   return (
      <div>
        <CanvasJSChart options={props.data}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  
}

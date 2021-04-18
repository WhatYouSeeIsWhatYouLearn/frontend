import React from 'react'
import CanvasJSReact from '../../../assets/lib/canvasjs.react';

function randomValues(count: number, min: number, max: number) {
    const delta = max - min;
    return Array.from({length: count}).map(() => Math.random() * delta + min);
  }

  
const data = {

  // define label tree
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Dataset 1',
    backgroundColor: 'rgba(255,0,0,0.5)',
    borderColor: 'red',
    borderWidth: 1,
    outlierColor: '#999999',
    padding: 10,
    itemRadius: 0,
    data: [
      randomValues(100, 0, 100),
      randomValues(100, 0, 20),
      randomValues(100, 20, 70),
      randomValues(100, 60, 100),
      randomValues(40, 50, 100),
      randomValues(100, 60, 120),
      randomValues(100, 80, 100)
    ]
  }, {
    label: 'Dataset 2',
    backgroundColor:  'rgba(0,0,255,0.5)',
    borderColor: 'blue',
    borderWidth: 1,
    outlierColor: '#999999',
    padding: 10,
    itemRadius: 0,
    data: [
      randomValues(100, 60, 100),
      randomValues(100, 0, 100),
      randomValues(100, 0, 20),
      randomValues(100, 20, 70),
      randomValues(40, 60, 120),
      randomValues(100, 20, 100),
      randomValues(100, 80, 100)
    ]
  }]
}
export default function BoxPlot() {

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
		
   return (
      <div>
        <CanvasJSChart options={options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  
}

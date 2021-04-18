import React from 'react'
import ChartProps from './ChartProps'
import BoxPlot from './BoxPlot';
import LineChart from './LineChart';
import { BAR_CHART, BOX_PLOT, LINE_CHART, SCATTER_PLOT } from '../../constants/charts';
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';

interface P {
    formattedData: any
}
export default function DynamicChart(props: P) {
    const {formattedData} = props;
    const {type, data, options} = formattedData;
    console.log(formattedData)
    switch(type){
        case LINE_CHART:
            return <LineChart
                data={data}
                options={options}/>
        case BAR_CHART:
            return <BarChart
                data={data}
                options={options}/>
        case SCATTER_PLOT:
            return <ScatterPlot
                data={data}
                options={options}/>
        case BOX_PLOT:
            return <BoxPlot
                data={data.datasets[0]}/>
        default:
            return (
                <div>
                    No valid type
                </div>
            )
    }
    // for(let type of types){
    //     switch(type){
    //         case LINE_CHART:
    //             return <LineChart
    //                 data={data}
    //                 options={options}/>
    //         case BAR_CHART:
    //             return <BarChart
    //                 data={data}
    //                 options={options}/>
    //         case SCATTER_PLOT:
    //             return <ScatterPlot
    //                 data={data}
    //                 options={options}/>
    //         case BOX_PLOT:
    //             return <BoxPlot
    //                 data={data.datasets[0]}/>
    //         default:
    //             return (
    //                 <div>
    //                     No valid type
    //                 </div>
    //             )
    //     }
    // }
    
    // return (
    //     <div>
    //         Invalid data
    //     </div>
    // )
}

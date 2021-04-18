import { BOX_PLOT } from "../constants/charts";

export function formatTemplates(template: any) {
    const datasets = []
    for (let dataset of template.content.ml_project){
        const formattedData = formatTemplateData(dataset);
        datasets.push(formattedData)
    }
    console.log(datasets)
    return datasets;
}

function formatTemplateData(graph: any, isBoxPlot?: boolean) {

    let type;

    const options = {
        title: {
            display: true,
            text: ""
        }
    }

    const data: any = {
        labels: [],
        datasets: []
    }

    // USUALLY LOOPS THROUGH DIFFERENT GRAPHS
        const {graph_title, graph_type, x_data, y_data} = graph;
        for (const [key, value] of Object.entries(x_data)){
            const dataset = {
                label: key,
                data: value
            }
            data.datasets.push(dataset)
        }
        type = graph_type;
        data.labels = y_data[0];
        options.title.text = graph_title
    return {
        type,
        data,
        options
    }
}

export function formatLineChartTemplate(){
    const data = formatTemplates(lineChartData);
    console.log(data);
    return data
}

export function formatBoxPlotTemplate(){
    const data = formatTemplateData(templateData);
    return data;
}

const lineChartData = {
    "id":3,
    "meta":{
       "type":"home.HomePage",
       "detail_url":"http://localhost/api/v2/pages/3/",
       "html_url":"http://localhost/",
       "slug":"home",
       "show_in_menus":false,
       "seo_title":"",
       "search_description":"",
       "first_published_at":"2021-03-28T06:43:07.611796Z",
       "parent":"None"
    },
    "title":"Home",
    "content":{
       "ml_project":[
        {   
        "graph_type":"bar_chart_block",
        "graph_title":"My Petal histogram plot",
        "x_data":{
           "0":[
              5.1,
              4.9,
              4.7,
              4.6,
              5.0,
              5.4,
              4.6,
              5.0,
              4.4
           ],
           "1":[
              3.5,
              3.0,
              3.2,
              3.1,
              3.6,
              3.9,
              3.4,
              3.4,
              2.9
           ],
           "2":[
              1.4,
              1.4,
              1.3,
              1.5,
              1.4,
              1.7,
              1.4,
              1.5,
              1.4
           ],
           "3":[
              0.2,
              0.2,
              0.2,
              0.2,
              0.2,
              0.4,
              0.3,
              0.2,
              0.2
           ]
        },
        "y_data":{
           "0":[
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
           ]
        },
    },
        
        {
        "graph_type":"line_chart_block",
        "graph_title":"My validation curve chart block",
        "x_data":{
           "0":[
              5.1,
              4.9,
              4.7,
              4.6,
              5.0,
              5.4,
              4.6,
              5.0,
              4.4
           ],
           "1":[
              3.5,
              3.0,
              3.2,
              3.1,
              3.6,
              3.9,
              3.4,
              3.4,
              2.9
           ],
           "2":[
              1.4,
              1.4,
              1.3,
              1.5,
              1.4,
              1.7,
              1.4,
              1.5,
              1.4
           ],
           "3":[
              0.2,
              0.2,
              0.2,
              0.2,
              0.2,
              0.4,
              0.3,
              0.2,
              0.2
           ]
        },
        "y_data":{
           "0":[
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
           ]
        }
    }
    
]
    
     }
       
    
}


const templateData = {
    "id":3,
    "meta":{
       "type":"home.HomePage",
       "detail_url":"http://localhost/api/v2/pages/3/",
       "html_url":"http://localhost/",
       "slug":"home",
       "show_in_menus":false,
       "seo_title":"",
       "search_description":"",
       "first_published_at":"2021-03-28T06:43:07.611796Z",
       "parent":"None"
    },
    "title":"Home",
    "content":{
       "ml_project":[
          
         {
            "graph_type":"box_plot_chart_block",
            "graph_title":"My Box Plot",
            "x_data":{
               "0":[
                  5.1,
                  4.9,
                  4.7,
                  4.6,
                  5.0,
                  5.4,
                  4.6,
                  5.0,
                  4.4
               ],
               "1":[
                  3.5,
                  3.0,
                  3.2,
                  3.1,
                  3.6,
                  3.9,
                  3.4,
                  3.4,
                  2.9
               ],
               "2":[
                  1.4,
                  1.4,
                  1.3,
                  1.5,
                  1.4,
                  1.7,
                  1.4,
                  1.5,
                  1.4
               ],
               "3":[
                  0.2,
                  0.2,
                  0.2,
                  0.2,
                  0.2,
                  0.4,
                  0.3,
                  0.2,
                  0.2
               ]
            },
            "y_data":{
               "0":[
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
               ]
            }
         },
       ]
    }
 }

// export default function ValidationCurve() {

    // const data = {
    //     labels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    //     datasets: [
    //         {
    //             label: "Training Score",
    //             fill: false,
    //             backgroundColor: schemes.orangeScheme.solid,
    //             borderColor: schemes.orangeScheme.translucent,
    //             data: [0.2, 0.40, 0.60, 0.7, 0.75, 0.8, 0.825, 0.85, 0.875, 0.9, 0.91, 0.92]
    //         },
    //         {
    //             label: "Cross-validation Score",
    //             fill: false,
    //             backgroundColor: schemes.purpleScheme.solid,
    //             borderColor:schemes.purpleScheme.translucent,
    //             data: [0.2, 0.40, 0.60, 0.65, 0.675, 0.7, 0.725, 0.6, 0.4, 0.2]
    //         }
    //     ],
    // }

    // const options = {

    //     title: {
    //         display: true,
    //         text: "Validation Curve with SVM",
    //     },
    //     scales: {
    //         xAxes: [{
    //             scaleLabel: {
    //                 display: true,
    //                 labelString: "Y"
    //             }
                
    //         }],
    //         yAxes: [{
    //             scaleLabel: {
    //                 display: true,
    //                 labelString: "Score"
    //             },
    //             ticks: {
    //                 min: 0,
    //                 max: 1,
    //                 stepSize: 0.1
    //             }
    //         }]
    //     }
    // }

//     return (
//         <div>
//             <Line
//                 data={data}
//                 options={options}/>
//         </div>
//     )
// }

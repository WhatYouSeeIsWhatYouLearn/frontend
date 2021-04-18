

            // fill: false,
            // lineTension: 0.1,
            // backgroundColor: 'rgba(75,192,192,0.4)',
            // borderColor: 'rgba(75,192,192,1)',
            // borderCapStyle: 'butt',
            // borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            // pointBorderColor: 'rgba(75,192,192,1)',
            // pointBackgroundColor: '#fff',
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            // pointHoverBorderColor: 'rgba(220,220,220,1)',
            // pointHoverBorderWidth: 2,
            // pointRadius: 1,
            // pointHitRadius: 10,

export const schemes = {
    
    blueScheme: {
        translucent: 'rgba(75,192,192,0.4)',
        solid: 'rgba(75,192,192,1)',
        accent: '#53D0B9'
    },
    redScheme: {
        translucent: "rgba(204, 0, 0, 0.4)",
        solid: "rgba(204, 0, 0, 1)",
    },
    purpleScheme: {
        solid: "rgba(105, 24, 255, 1)",
        translucent: "rgba(105, 24, 255, 0.4)",
        accent: "#FA00BB"
    },
    greenScheme: {
        solid: "rgba(38, 153, 0, 1)",
        translucent: "rgba(38, 153, 0, 0.4)",
        accent: "#31E177"
    },
    orangeScheme: {
        solid: "rgba(249, 148, 0, 1)",
        translucent: "rgba(249, 148, 0, 0.4)",
        accent: "#FC6459"
    },
}

export function getRandomScheme(schemes: any){
    const randomInt = getRandomInt(0, schemes.length - 1);
    let randomScheme = schemes[randomInt];
    if (schemes.length != 1){ // make sure to not remove the last color scheme
        schemes.splice(randomInt, 1);
    }

    return randomScheme;
}

export const doughnutData = (scheme: any) => ({
    labels: getCategories(),
    datasets: [
        {
            label: "Cars",
            data: getCategoriesSampleData(),
            backgroundColor: ["#F99400", "#FC6459", "#D25588", "#8C5A97", "#4A5782", "#2F4858", "#1C6E7D", "#039590", "#4BBC8E", "#9BDE7E"]
        }
    ]
})

export const barData = (scheme: any, scheme2?: any) => ({
    labels: getDaysInAWeek(),
    datasets: [
        {
            label: "Standard Predictions",
            fill: false,
            backgroundColor: scheme["solid"],
            borderColor: scheme["solid"],
            pointHitRadius: 10,
            data: [33, 50, 56, 60, 63, 65, 67]
        },
        {
            label: "Our Predictions",
            fill: false,
            backgroundColor: scheme2["solid"],
            borderColor: scheme2["solid"],
            pointHitRadius: 10,
            data: [49, 58, 65, 70, 73, 77, 80]
        }

    ]
})

export const lineData = (scheme :any ) => ({
    labels: getHoursInADay(12),
    datasets: [
        {
            label: "Initial Dataset",
            showLines: false,
            fill: false,
            backgroundColor: scheme["translucent"],
            borderColor: scheme["solid"],
            pointHitRadius: 10,
            pointBackgroundColor: scheme["accent"],
            pointBorderColor: scheme["accent"],
            pointHoverBorderColor: scheme["accent"],
            data: [46, 50, 58, 63, 68, 72, 75, 80, 83, 85, 87, 90, 89, 93, 94, 95, 96, 97, 98, 98, 98, 99, 99, 99],
            
        },
    ],
})   

export const options = (xLabel?: string, yLabel?: string) => (
    {   
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true || yLabel, 
                    labelString: yLabel 
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true || xLabel,
                    labelString: xLabel
                }
            }]
        }
    }
)

export function getHoursInADay(startHour: number){
    const hours = []
    const maxLength = 24 + startHour
    for (let i = startHour; i < maxLength; i++){
        if(i > 23){
            hours.push(i - 23)
        } else {
            hours.push(i)
        }
        
    }
    
    return hours;
}

export function getDaysInAWeek(){
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days;
}

export function getMonthsInAYear(){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months;
}

export function getCategories(){
    const categories = ["BMW", "Mazda", "Audi", "Volkswagen", "Toyota", "Honda", "Tesla", "Mini Cooper", "Ford", "Mercedes"]
    return categories;
}

export function getCategoriesSampleData(){
    const categories = getCategories();
    const answers = []
    for(let i = 0; i < categories.length; i++){
        const number = getRandomInt(20, 300)
        answers.push(number)
    }
    return answers;
}


export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function minMaxStep(min: number, max: number, step: number){
    const result = []

    for(let i = min; i < max; i += step){
        result.push(i)
    }
    return result
}
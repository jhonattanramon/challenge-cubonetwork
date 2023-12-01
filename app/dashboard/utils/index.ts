import { ChartData } from "chart.js"

interface PropsHandleDataToChart{
    pacipations: TypeParticipation[] 
}

export function RandomColor():string{
    return ( "#" + (Math.floor(Math.random() * 16777215).toString(16)))
}

export function handleDataToChart({pacipations: participants}: PropsHandleDataToChart): ChartData<"doughnut">{
    return ({
        datasets: [
            {
                label: "Particition:",
                data: participants.map(({participation}) => participation),
                backgroundColor: participants.map(() => RandomColor())
                
            }
        ]
    })
}


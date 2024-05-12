import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
Chart.register(CategoryScale);

import { Scatter } from 'react-chartjs-2'

export default function PieChartUI({chartdata}){
    return (
        <>
            <Scatter data={chartdata}/>
        </>
    )
}
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
Chart.register(CategoryScale);

import { Pie } from 'react-chartjs-2'

export default function PieChartUI({chartdata}){
    return (
        <>
            <Pie data={chartdata}/>
        </>
    )
}
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
Chart.register(CategoryScale);

import { Bar } from 'react-chartjs-2'
export default function BarChartUI({chartdata}){
    return(
        <>
            <Bar data = {chartdata}/>
        </>
    )
}
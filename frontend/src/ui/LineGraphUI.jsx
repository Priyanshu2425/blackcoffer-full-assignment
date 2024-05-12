import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
Chart.register(CategoryScale);

import { Line } from 'react-chartjs-2';

export default function LineGraphUI({chartdata}){
    return (
        <>
            <Line data={chartdata}/>
        </>
    )
}
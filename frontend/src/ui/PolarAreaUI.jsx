import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
Chart.register(CategoryScale);

import { PolarArea } from 'react-chartjs-2';

export default function PolarAreaUI({chartdata}){
    return (
        <>
            <PolarArea data={chartdata}/>
        </>
    )
}
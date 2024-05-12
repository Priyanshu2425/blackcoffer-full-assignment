import { useState, useEffect } from 'react';
import LineGraphUI from '../ui/LineGraphUI';
import PieChartUI from '../ui/PieChartUI';

export default function LikelihoodView(){
    const [likelihoodData, setLikelihoodData] = useState();
    
    let chart_data = {
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: 'Data Loading',
                data: [1, 2, 3]
            }
        ]
    };
    
    if(likelihoodData){
        
        chart_data = {
            labels: likelihoodData.filter(item=>item._id!="").map(item=>item._id),
            datasets: [
                {
                    label: 'Frequency of Likelihood',
                    data: likelihoodData.filter(item=>item._id!="").map(row=>row.count)
                }
            ]
        }

    }

    useEffect(()=>{
        async function getLikelihood(){
            let response = await fetch('http://localhost:3000/data/likelihood', {
                method: 'GET'
            })

            let response_data = await response.json();
            setLikelihoodData(response_data.likelihood.sort((a,b)=>a._id-b._id));
        }
        getLikelihood();
    }, [])
    return (
        <>
            <PieChartUI chartdata = {chart_data}/>
        </>
    )
}
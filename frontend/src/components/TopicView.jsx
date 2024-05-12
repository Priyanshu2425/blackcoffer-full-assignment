import { useState, useEffect } from 'react'
import PolarAreaUI from '../ui/PolarAreaUI'

export default function LikelihoodView(){
    const [topicData, setTopicData] = useState();
    
    let chart_data = {
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: 'Data Loading',
                data: [1, 2, 3]
            }
        ]
    };
    
    if(topicData){
        
        chart_data = {
            labels: topicData.filter(item=>item._id!="").map(item=>item._id),
            datasets: [
                {
                    label: 'Frequency of Topic',
                    data: topicData.filter(item=>item._id!="").map(row=>row.count)
                }
            ]
        }

    }
    useEffect(()=>{
        async function getTopic(){
            let response = await fetch('http://localhost:3000/data/topic', {
                method: 'GET'
            })

            let response_data = await response.json();
            setTopicData(response_data.topic);
        }
        getTopic();
    })
    return (
        <>
            <PolarAreaUI chartdata={chart_data}/>
        </>
    )
}
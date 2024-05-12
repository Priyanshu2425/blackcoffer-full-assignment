import { useState, useEffect } from 'react'
import PolarAreaUI from '../ui/PolarAreaUI';

export default function LikelihoodView(){
    const [regionData, setRegionData] = useState();
        
    let chart_data = {
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: 'Data Loading',
                data: [1, 2, 3]
            }
        ]
    };
    
    if(regionData){
        
        chart_data = {
            labels: regionData.filter(item=>item._id!="").map(item=>item._id),
            datasets: [
                {
                    label: 'Frequency of Region',
                    data: regionData.filter(item=>item._id!="").map(row=>row.count)
                }
            ]
        }

    }

    useEffect(()=>{
        async function getRegionData(){
            let response = await fetch('http://localhost:3000/data/region', {
                method: 'GET'
            })

            let response_data = await response.json();
            setRegionData(response_data.region);
        }
        getRegionData();
    }, [])
    return (
        <>
            <PolarAreaUI chartdata={chart_data}/>
        </>
    )
}
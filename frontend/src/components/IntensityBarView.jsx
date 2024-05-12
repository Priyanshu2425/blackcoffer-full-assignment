import { useState, useEffect } from 'react'
import BarChartUI from '../ui/BarChartUI'

export default function IntensityBarView(){

    const [intensity, setIntensityData] = useState([]);

    let chart_data = {
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: 'Data Loading',
                data: [1, 2, 3]
            }
        ]
    };
    
    if(intensity){
        chart_data = {
            labels: intensity.filter(item=>item._id!="").map(item=>item._id),
            datasets: [
                {
                    label: 'Frequency of Intensity',
                    data: intensity.filter(item=>item._id!="").map(row=>row.count)
                }
            ]
        }
    } 

    useEffect(()=>{
        async function getIntensity(){
            let response = await fetch('http://localhost:3000/data/intensity', {
                method: 'GET',
            })

            let response_data = await response.json();
            setIntensityData(response_data.intensity.sort((a,b)=>a._id-b._id));
        }
        getIntensity();
        console.log("intensitybar");
    }, []);

    return (
        <>
            <BarChartUI chartdata = {chart_data}/>  
        </>
    )
}
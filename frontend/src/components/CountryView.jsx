import { useState, useEffect } from 'react'
import LineGraphUI from '../ui/LineGraphUI';

export default function LikelihoodView(){
    const [countryData, setCountryData] = useState();
    
    let chart_data = {
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: 'Data Loading',
                data: [1, 2, 3]
            }
        ]
    };
    
    if(countryData){
        chart_data = {
            labels: countryData.filter(item=>item._id!="").map(item=>item._id),
            datasets: [
                {
                    label: 'Frequency of Country',
                    data: countryData.filter(item=>item._id!="").map(row=>row.count)
                }
            ]
        }
    } 

    useEffect(()=>{
        async function getCountry(){
            let response = await fetch('http://localhost:3000/data/country', {
                method: 'GET'
            })

            let response_data = await response.json();
            setCountryData(response_data.country.sort());
            console.log(response_data);
        }
        getCountry();
    }, [])
    return (
        <>
            <LineGraphUI chartdata={chart_data}/>
        </>
    )
}
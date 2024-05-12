import { useState, useEffect, useRef } from 'react'
import '../assets/filters.css'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Filters(){
    const [countryFilters, setCountryFilters] = useState("");
    const [pestleFilters, setPestleFilters] = useState("");
    const [sourceFilters, setSourceFilters] = useState("");
    const [topicFilters, setTopicFilters] = useState("");
    const [regionFilters, setRegionFilters] = useState("");
    const [sectorFilters, setSectorFilters] = useState("");

    const [countryFiltersOpen, setCountryFiltersOpen] = useState(false);
    const [pestleFiltersOpen, setPestleFiltersOpen] = useState(false);
    const [sourceFiltersOpen, setSourceFiltersOpen] = useState(false);
    const [topicFiltersOpen, setTopicFiltersOpen] = useState(false);
    const [regionFiltersOpen, setRegionFiltersOpen] = useState(false);
    const [sectorFiltersOpen, setSectorFiltersOpen] = useState(false);

    const countryContainer = useRef();
    const pestleContainer  = useRef();
    const sourceContainer = useRef();
    const topicContainer = useRef();
    const regionContainer = useRef();
    const sectorContainer = useRef();

    function openFilterContainer(event){
        let filterToOpen = String(event.currentTarget.innerText);
        
        console.log(filterToOpen);
        if (filterToOpen === "Countries") {
            countryContainer.current.style.display = 'block';
            countryContainer.current.style.height = countryFiltersOpen ? '0' : (50*countryFilters.length)+"px";
            setCountryFiltersOpen(!countryFiltersOpen);
        } else if (filterToOpen === "PESTLE") {
            pestleContainer.current.style.display = 'block';
            pestleContainer.current.style.height = pestleFiltersOpen ? '0' : (52*pestleFilters.length)+"px";
            setPestleFiltersOpen(!pestleFiltersOpen);
        } else if (filterToOpen === "Source") {
            sourceContainer.current.style.display = 'block';
            sourceContainer.current.style.height = sourceFiltersOpen ? '0' : (52*sourceFilters.length)+"px";
            setSourceFiltersOpen(!sourceFiltersOpen);
        } else if (filterToOpen === "Topics") {
            topicContainer.current.style.display = 'block';
            topicContainer.current.style.height = topicFiltersOpen ? '0' : (52*topicFilters.length)+"px";
            setTopicFiltersOpen(!topicFiltersOpen);
        } else if (filterToOpen === "Region") {
            regionContainer.current.style.display = 'block';
            regionContainer.current.style.height = regionFiltersOpen ? '0' : (52*regionFilters.length)+"px";
            setRegionFiltersOpen(!regionFiltersOpen);
        } else if (filterToOpen === "Sector") {
            sectorContainer.current.style.display = 'block';
            sectorContainer.current.style.height = sectorFiltersOpen ? '0' : (52*sectorFilters.length)+"px";
            setSectorFiltersOpen(!sectorFiltersOpen);
        }

    }

    function addOrRemoveCountry(event){
        let span = event.target.children[0]
        if(span.style.display === 'none'){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    }

    async function getCountryFilters(){
        let response = await fetch('http://localhost:3000/filters/country', {
            method: 'GET'
        })
        let response_data = await response.json();
        setCountryFilters(response_data.countries.filter(country=>country!="").map((country, index)=>{
            return <div id={country} onClick={addOrRemoveCountry} className='filter-values' key={index} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                {country}<span style={{display: 'none'}}><AiOutlineCheckCircle/></span>
            </div>
        }))
    }


    function addOrRemovePestle(event) {
        let span = event.target.children[0]
        if(span.style.display === 'none'){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    }

    async function getPestleFilters(){
        let response = await fetch('http://localhost:3000/filters/pestle', {
            method: 'GET'
        })
        let response_data = await response.json();
        setPestleFilters(response_data.pestles.filter(pestle=>pestle!="").map((pestle, index)=>{
            return <div id={pestle} onClick={addOrRemovePestle} className='filter-values' key={index} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                {pestle}<span style={{display: 'none'}}><AiOutlineCheckCircle/></span></div>
        }))
    }


    function addOrRemoveSource(event) {
        let span = event.target.children[0]
        if(span.style.display === 'none'){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    }
    async function getSourceFilters(){
        let response = await fetch('http://localhost:3000/filters/source', {
            method: 'GET'
        })
        let response_data = await response.json();
        setSourceFilters(response_data.sources.filter(source=>source!="").map((source, index)=>{
            return <div id={source} onClick={addOrRemoveSource} className='filter-values' key={index} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                {source}<span style={{display: 'none'}}><AiOutlineCheckCircle/></span></div>
        }))
    }


    function addOrRemoveTopic(event) {
        let span = event.target.children[0]
        if(span.style.display === 'none'){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    }

    async function getTopicFilters(){
        let response = await fetch('http://localhost:3000/filters/topic', {
            method: 'GET'
        })
        let response_data = await response.json();
        setTopicFilters(response_data.topics.filter(topic=>topic!="").map((topic, index)=>{
            return <div id={topic} onClick={addOrRemoveTopic} className='filter-values' key={index} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                {topic}<span style={{display: 'none'}}><AiOutlineCheckCircle/></span></div>
        }))
    }


    function addOrRemoveRegion(event) {
        let span = event.target.children[0]
        if(span.style.display === 'none'){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    }

    async function getRegionFilters(){
        let response = await fetch('http://localhost:3000/filters/region', {
            method: 'GET'
        })
        let response_data = await response.json();
        setRegionFilters(response_data.regions.filter(region=>region!="").map((region,index)=>{
            return <div id={region} onClick={addOrRemoveRegion} className='filter-values' key={index} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                {region}<span style={{display: 'none'}}><AiOutlineCheckCircle/></span></div>
        }))
    }


    function addOrRemoveSector(event) {
        let span = event.target.children[0]
        if(span.style.display === 'none'){
            span.style.display = 'block';
        }else{
            span.style.display = 'none';
        }
    }

    async function getSectorFilters(){
        let response = await fetch('http://localhost:3000/filters/sector', {
            method: 'GET'
        })
        let response_data = await response.json();
        setSectorFilters(response_data.sectors.filter(sector=>sector!="").map((sector,index)=>{
            return <div id={sector} onClick={addOrRemoveSector} className='filter-values' key={index} style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                {sector}<span style={{display: 'none'}}><AiOutlineCheckCircle/></span></div>
        }))
    }

    useEffect(()=>{
        getCountryFilters();
        getPestleFilters();
        getSourceFilters();
        getTopicFilters();
        getRegionFilters();
        getSectorFilters();
    }, [])

    return (
        <>
            <div id="filters">
                <div onClick={openFilterContainer} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer'}}>
                    Countries<span><AiFillCaretDown/></span>
                </div>
                <div className='filter-container' ref={countryContainer}>
                    {countryFilters}
                </div>

                <div onClick={openFilterContainer} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer'}}> 
                    PESTLE<span><AiFillCaretDown/></span>
                </div>
                <div className='filter-container' ref={pestleContainer}>
                    {pestleFilters}
                </div>

                <div onClick={openFilterContainer} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer'}}> 
                    Source<span><AiFillCaretDown/></span>
                </div>
                <div className='filter-container' ref={sourceContainer}>
                    {sourceFilters}
                </div>

                <div onClick={openFilterContainer} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer'}}> 
                    Topics<span><AiFillCaretDown/></span>
                </div>
                <div className='filter-container' ref={topicContainer}>
                    {topicFilters}
                </div>

                <div onClick={openFilterContainer} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer'}}> 
                    Region<span><AiFillCaretDown/></span>
                </div>
                <div className='filter-container' ref={regionContainer}>
                    {regionFilters}
                </div>

                <div onClick={openFilterContainer} style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', cursor: 'pointer'}}> 
                    Sector<span><AiFillCaretDown/></span>
                </div>
                <div className='filter-container' ref={sectorContainer}>
                    {sectorFilters}
                </div>
            </div>
        </>
    )
}
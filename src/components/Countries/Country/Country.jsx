import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries}) => {
const {name,flags,population,area,cca3}=country;
const [Visited,setVisited]=useState(false);
const handeleVisited =()=>{
    setVisited(!Visited);
}
const passwithParams=()=>handleVisitedCountries(country);


    return (
        <div  style={{ color:'black', backgroundColor:Visited?'purple':'red'}} className='country'>
          <div className='flex'>
          <h3>{name.common}</h3>
           <img src={flags.png} alt="" />
          </div>
          <p>population: {population}</p>
          <p>area: {area}  km²</p>
          <p><small>code : {cca3} </small></p>
          <button onClick={()=>handleVisitedCountries(country)}>mark at visited</button>
          <button onClick={handeleVisited}>{Visited?'visited':'Going'}</button>
          {
            Visited?  '  i have visited this country':'  i wont to visited '
          }
        </div>
    );
};

export default Country;
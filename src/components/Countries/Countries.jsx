import React, { useEffect, useState } from "react";
import Country from "./Country/Country";


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setvisitedCountries] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  const handleVisitedCountries = (country) => {
    console.log("add this to your visited country");
   const newVisitedCountries =[...visitedCountries,country];
   setvisitedCountries(newVisitedCountries);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      <h3>Countries: {countries.length}</h3>
      <h5>visited countries :{visitedCountries.length}</h5>
      <ul>
        {
          visitedCountries.map(country=><li key={country.cca3} >{country.name.common}</li>)
        }
      </ul>
      {countries.map((country) => (
        <Country key={country.cca3} 
        handleVisitedCountries={handleVisitedCountries}
        country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;

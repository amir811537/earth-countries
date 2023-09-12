import React, { useEffect, useState } from "react";
import Country from "./Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px"
    }}>
      <h3>Countries: {countries.length}</h3>
      {
        countries.map(country => <Country key={country.cca3} country={country}></Country>)
      }
    </div>
  );
};

export default Countries;

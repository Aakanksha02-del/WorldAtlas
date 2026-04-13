import React, { useEffect, useState } from "react";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [region, setRegion] = useState("all");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  
  const filteredCountries = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => (region === "all" ? true : c.region === region))
    .sort((a, b) =>
      sort === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );

  return (
    <div className="country-container">
     
    
      <div className="controls">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="india">India</option>
        </select>
      </div>

     
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="flag"
            />

            <h3>{country.name.common}</h3>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0]}</p>

            <button>Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
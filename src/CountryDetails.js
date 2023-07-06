import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const CountryDetails = () => {
  const countries = useSelector((state) => state.countries.countries);
  const [isLoading, setIsLoading] = useState(true);
  const { code } = useParams();
  const countryDetails = countries.filter((country) => {
    return country.code === parseInt(code);
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (countryDetails.length === 0) {
    return <div className="loading">Country not found</div>;
  }

  return (
    <div className="country-details">
      <div>
        <div>
          {countryDetails.map((country) => (
            <div key={country.code} className="country-card">
              <h3>{country.name}</h3>
              <p>Population: {country.population}</p>
              <h3>Cities</h3>
              <div>
                <table className="city-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Capital</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.cities.map((city) => (
                      <tr key={city.name}>
                        <td>{city.name}</td>
                        <td>{city.capitale ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

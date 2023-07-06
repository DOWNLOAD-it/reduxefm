import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const countries = useSelector((state) => state.countries.countries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {countries.length === 0 ? (
            <div>No countries found</div>
          ) : (
            <div>
              {/* Render countries data */}
              {countries.map((country) => (
                <div key={country.code} className="country-card">
                  <h3>
                    <Link
                      to={`/country/${country.code}`}
                      className="country-link"
                    >
                      {country.name}
                    </Link>
                  </h3>
                  <p>Population: {country.population}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

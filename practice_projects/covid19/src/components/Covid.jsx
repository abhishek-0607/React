import React from "react";
import "./covid.css";

export const Covid = () => {
  const [data, setData] = React.useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1>
        <span>&#128308;</span> LIVE
      </h1>
      <h2>COVID-19 CORONA VIRUS TRACKER</h2>

      <ul className="card">
        <li className="cardMain">
          <div className="cardInner">
            <p className="cardName">
              <span>OUR</span>COUNTRY
            </p>
            <p className="cardTotal cardSmall"></p>
          </div>
        </li>

        <li className="cardMain">
          <div className="cardInner">
            <p className="cardName">
              <span>OUR</span>COUNTRY
            </p>
            <p className="cardTotal cardSmall">INDIA</p>
          </div>
        </li>

        <li className="cardMain">
          <div className="cardInner">
            <p className="cardName">
              <span>OUR</span>COUNTRY
            </p>
            <p className="cardTotal cardSmall">INDIA</p>
          </div>
        </li>

        <li className="cardMain">
          <div className="cardInner">
            <p className="cardName">
              <span>OUR</span>COUNTRY
            </p>
            <p className="cardTotal cardSmall">INDIA</p>
          </div>
        </li>

        <li className="cardMain">
          <div className="cardInner">
            <p className="cardName">
              <span>OUR</span>COUNTRY
            </p>
            <p className="cardTotal cardSmall">INDIA</p>
          </div>
        </li>

        <li className="cardMain">
          <div className="cardInner">
            <p className="cardName">
              <span>OUR</span>COUNTRY
            </p>
            <p className="cardTotal cardSmall">INDIA</p>
          </div>
        </li>
      </ul>
    </>
  );
};

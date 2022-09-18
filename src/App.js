import "./App.css";
import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import Table from "./Components/Table";
import data from "./data";
import Chart from "./Components/Chart";

function App() {
    const [totalCases, setTotalCases] = useState([]);

    const [countryWiseCount, setCountryWiseCount] = useState([]);
    const [totalCountryArrLength, setTotalCountryArrLength] = useState("");
    useEffect(() => {
        loadedData();
    }, []);

    const loadedData = async () => {
        setTotalCases(data.getAll);
        setCountryWiseCount(data.getAllCountries);
        setTotalCountryArrLength(data.getAllCountries.length);
    };

    return (
        <div className="App">
            <div className="m-12">
                <h1 className="text-left text-4xl font-semibold text-white">
                    Global Covid-19 Update
                </h1>
                <Cards totalCases={totalCases} />
                <Chart totalCases={totalCases} t></Chart>
                <Table
                    countryWiseCount={countryWiseCount}
                    totalCountryArrLength={totalCountryArrLength}
                    setCountryWiseCount={setCountryWiseCount}
                    loadedData={loadedData}
                ></Table>
            </div>
        </div>
    );
}

export default App;

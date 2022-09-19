import "./App.css";
import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import Table from "./Components/Table";
import data from "./data";
import Chart from "./Components/Chart";
import { useDispatch } from "react-redux";
import { getTotalCases } from "./Store/Slicers/total-cases.slice.ts";

function App() {
    const [countryWiseCount, setCountryWiseCount] = useState([]);
    useEffect(() => {
        loadedData();
        dispatch(
            getTotalCases({
                covidCaseDetails: data.getAll,
                totalCountryArrLength: data.getAllCountries.length,
                countryWiseCount: data.getAllCountries,
            })
        );
    }, []);

    const loadedData = async () => {
        setCountryWiseCount(data.getAllCountries);
    };
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div className="m-12">
                <h1 className="text-left text-4xl font-semibold text-white">
                    Global Covid-19 Update
                </h1>
                <Cards />
                <Chart />
                <Table
                    countryWiseCount={countryWiseCount}
                    setCountryWiseCount={setCountryWiseCount}
                    loadedData={loadedData}
                ></Table>
            </div>
        </div>
    );
}

export default App;

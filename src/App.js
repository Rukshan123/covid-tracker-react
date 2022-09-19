import "./App.css";
import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import Table from "./Components/Table";
import data from "./data";
import Chart from "./Components/Chart";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCases } from "./Store/Slicers/total-cases.slice.ts";

function App() {
    const [totalCases, setTotalCases] = useState([]);

    const [countryWiseCount, setCountryWiseCount] = useState([]);
    const [totalCountryArrLength, setTotalCountryArrLength] = useState("");
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
        setTotalCases(data.getAll);
        setCountryWiseCount(data.getAllCountries);
        setTotalCountryArrLength(data.getAllCountries.length);
    };

    // const { value } = useSelector((state) => state.totalCases);
    const dispatch = useDispatch();
    // console.log(value, "value");

    return (
        <div className="App">
            <div className="m-12">
                <h1 className="text-left text-4xl font-semibold text-white">
                    Global Covid-19 Update
                </h1>
                <Cards />
                <Chart></Chart>
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

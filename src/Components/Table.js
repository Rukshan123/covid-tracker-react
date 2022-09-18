import React, { useState } from "react";
import { Space, Pagination, Table, Input } from "antd";

const DataTable = ({ countryWiseCount, totalCountryArrLength, loadedData }) => {
    const [sortedInfo, setSortedInfo] = useState({});
    const columns = [
        {
            title: "Country",
            dataIndex: "country",
            width: 110,
        },
        {
            title: "Total Cases",
            dataIndex: "updated",
            width: 110,
        },
        {
            title: "New Cases",
            dataIndex: "todayCases",
            width: 110,
        },
        {
            title: "Total Deaths",
            dataIndex: "deaths",
            width: 110,
        },
        {
            title: "New Deaths",
            dataIndex: "todayDeaths",
            width: 110,
        },
        {
            title: "Total Recovered",
            dataIndex: "recovered",
            width: 110,
        },
        {
            title: "New Recovered",
            dataIndex: "recovered",
            width: 110,
        },
        {
            title: "Active Cases",
            dataIndex: "active",
            width: 110,
        },
        {
            title: "Critical",
            dataIndex: "critical",
            width: 110,
        },
    ];
    return (
        <Table
            columns={columns}
            dataSource={countryWiseCount}
            pagination={false}
        ></Table>
    );
};

export default DataTable;

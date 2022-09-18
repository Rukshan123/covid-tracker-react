import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";
ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);

const Chart = ({ totalCases }) => {
    console.log(totalCases, "totalCases ");
    const [data, setData] = useState({
        labels: [
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
        ],
        datasets: [
            {
                label: "",
                data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                borderColor: "blue",
                tension: 0.4,
                fill: true,
                pointStyle: "rect",
                pointBorderColor: "blue",
                pointBackgroundColor: "#fff",
                showLine: true,
            },
        ],
    });
    return (
        <div style={{ backgroundColor: "#28293E" }}>
            <p className="text-white text-3xl font-semibold p-5 m-12 text-left">
                Total No. Of Cases
            </p>
            <Line data={data}></Line>
        </div>
    );
};

export default Chart;

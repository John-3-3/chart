import React from "react";
//import Chart, { scales } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './BarCharsStyle.css';

const BarChart = () => {

    const labels = ["Clientes Satisfeitos", "Clientes Insatisfeitos", "Clientes que recomendam", "Clientes que recomendam"];
    const colors = ['#7eb0d5', '#fd7f6f','#b2e061','#ffb55a'];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Clientes',
                backgroundColor: colors,
                borderColor: "rgb(255,255,255)",
                data: [10, 1, 20, 70, 40, 50, 60, 70, 80, 90, 100],
            },
        ],
    };

    return (
        <div className="barChart">
            <Bar 
                data={data} width={1000} height={200}
            />
        </div>
    );
};

export default BarChart;
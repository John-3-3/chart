import React from "react";
import './BarCharsStyle.css'
const BarChart = () => {

    const labels = ["Clientes Satisfeitos", "Clientes Insatisfeitos", "Clientes que recomendam", "Clientes que recomendam"];

    return (
        <div className="barChart">

           <h1>coleção de dados</h1>
        
           <div className="charts">
            
            <div className="chart">
            </div>

            <div className="labels">
                <h2>{labels[0]}</h2>
                <h2>{labels[1]}</h2>
                <h2>{labels[2]}</h2>
                <h2>{labels[3]}</h2>
            </div>
           </div>
        </div>
    );
};

export default BarChart;
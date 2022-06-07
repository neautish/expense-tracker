import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	return (
		<div className="chart">
			{/* {props.dataPoints.map((point) => ( */}
			<ChartBar label="jun" value="50" max="100" />
			{/* ))} */}
		</div>
	);
}

export default Chart;

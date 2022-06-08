import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	console.log(props.dataPoints);
	const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointsValues);

	return (
		<div className="chart">
			{props.dataPoints.map((point) => (
				<ChartBar label={point.label} value={point.value} key={point.label} max={totalMaximum} />
			))}
		</div>
	);
}

export default Chart;

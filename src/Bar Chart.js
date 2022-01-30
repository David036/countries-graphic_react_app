import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const countries = [...this.props.products.map((elem) => {
			return {
				label:elem.name.common,
				y:elem.population
			}
		})]
		const sortCountries = [...countries.sort((a,b) => {
			return b.y - a.y
		}).slice(0,11) ]
		
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					...sortCountries
				]
			}]
		}
		
		return (
		<div >
			
			<CanvasJSChart options = {options} 
				
			/>
			
		</div>
		);
	}
}

export default BarChart;
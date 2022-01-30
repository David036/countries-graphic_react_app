import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default function App({products}) {
  const countries = [...products.map((elem) => {
    return {
      
        name: elem.name.common,
        uv: elem.population,
        pv: elem.area*100,
        amt: elem.population,
      }
    
    }).slice(17,25)]
  return (
    <LineChart
      width={500}
      height={300}
      data={countries}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
} 
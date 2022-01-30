import "./App.css";
import BarChart from "./Bar Chart";
import axios from "axios";
import { useEffect, useState } from "react";
import Example from "./Example";
function App() {
  const [products,setProducts]= useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/subregion/europe').then((response) => {
      setProducts(response.data)
      
    })
  }, []);
  
  return (
    <div className="App">
      <BarChart products={products} setProducts={setProducts} />
      <Example products={products} />
    </div>
  );
}

export default App;

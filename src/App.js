import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/Lists/ProductList";
import apiHelper from "./helper/api";

function App() {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    apiHelper.getProductList((data) => {
      setListOfProducts(data);
    });
  }, []);

  return (
    <div className="app center-all">
      <div className="app-screen" style={{ width: 400 }}>
        <Header />
        <ProductList listOfProducts={listOfProducts} />
      </div>
    </div>
  );
}

export default App;

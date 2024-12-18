import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>E-commerce App</h1>
      </header>
      <main>
        <div className="product-form">
          <ProductForm />
        </div>
        <div className="product-list">
          <ProductList />
        </div>
      </main>
    </div>
  );
};

export default App;

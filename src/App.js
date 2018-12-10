import React, { Component } from 'react';
import ProductFields from './ProductFields';
import AddProduct from './AddProduct';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      products: [],
      bestPrice: Infinity
    };

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleGetPPU = this.handleGetPPU.bind(this);
  }

  handleAddProduct(value) {
    let currentState = {};
    currentState = this.state;
    currentState.products.push(value);

    this.setState(currentState);
  }

  handleGetPPU(value) {
    let currentbestPrice = this.state.bestPrice;
    let currentState = this.state;

    if (value < currentbestPrice) {
      currentState.bestPrice = value;
      this.setState(currentState);
    }
  }

  render() {
    const products = this.state.products.map((product) =>
      <div className='product-group' key={product}>
        <ProductFields getPPU={this.handleGetPPU} />
      </div>
    );

    return (
      <div className="App">
        {products}
        <span className='product-group'>
          <span className='input-icon'>
            <i className='fas fa-plus'></i>
              </span>
          <AddProduct addProduct={this.handleAddProduct} />
        </span>
      </div>
    );
  }
}

export default App

import React, { Component } from 'react';
import App from './App';

class AddProduct extends Component {
    constructor() {
        super();

        this.state = {
            numProducts: 0
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        let newNumProducts = this.state.numProducts + 1;
        this.props.addProduct(this.state.numProducts);
        this.setState({numProducts: newNumProducts});
    }

    render() {
        return (
            <button id='add-product' onClick={this.handleAdd}>
                Add Product
            </button>
        )
    }
}

export default AddProduct
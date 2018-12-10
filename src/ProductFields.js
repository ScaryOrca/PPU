import React, { Component } from 'react';
import App from './App';
import './App.css';

class ProductFields extends Component {
    constructor() {
        super();

        this.state = {
            label: '',
            price: '',
            quantity: '',
            measurement: '',
            ppu: '?.???'
        }

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    updatePrice() {
        let pricePerUnit = (this.state.price / (this.state.quantity * this.state.measurement));
        let currentState = this.state;
        currentState.ppu = pricePerUnit.toFixed(3);
        this.setState(currentState);

        // return price per unit up
        this.props.getPPU(pricePerUnit);

    }

    handleUpdate(e) {
        let currentState = this.state;
        currentState[e.target.name] = e.target.value;
        this.setState(currentState);

        // update price if minimum requirements are met
        if (currentState.price !== '' && currentState.quantity !== '' && currentState.measurement !== '') {
            this.updatePrice();
        } else {
            currentState.ppu = '?.???';
            this.setState(currentState);
        }
    }

    render() {
        return (
            <React.Fragment>
                <span className='group-input'>
                    <span className="input-icon">
                        <i className="fas fa-tag"></i>
                    </span>
                    <input name='label' onChange={this.handleUpdate} placeholder='Label' />
                </span>

                <span className='group-input'>
                    <span className="input-icon">
                        <i className="fas fa-dollar-sign"></i>
                    </span>
                    <input name='price' type='number' step='0.01' onChange={this.handleUpdate} placeholder='Price' />
                </span>

                <span className='group-input'>
                    <span className="input-icon">
                        <i className="fas fa-hashtag"></i>
                    </span>
                    <input name='quantity' type='number' step='0.01' onChange={this.handleUpdate} placeholder='Quantity' />
                </span>

                <span className='group-input'>
                    <span className="input-icon">
                        <i className="fas fa-weight"></i>
                    </span>
                    <input name='measurement' type='number' step='0.01' onChange={this.handleUpdate} placeholder='Measurement' />
                </span>

                <span className='group-input'>
                    <span className='input-icon'>
                        <i className='fas fa-equals'></i>
                    </span>
                    <span className='ppu'>${this.state.ppu}</span>
                </span>
            </React.Fragment>
        )
    }
}

export default ProductFields
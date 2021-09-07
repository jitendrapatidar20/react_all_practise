import React from 'react';

class Car extends React.Component {
    render() {
      return(
      <div>
      <h2>Modal is {this.props.brand.model}!</h2>;
      <h2>Car Name is {this.props.brand.name}!</h2>;
      </div>
      );
    }
  }
  
  export default class Garage extends React.Component {
    render() {
      const carinfo = {name: "Tata Safari", model: "AXH55JK"};
      return (
        <div className='App'>
        <Car brand={carinfo} />
        </div>
      );
    }
  }
import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        if(this.props.balike==''){
          throw new Error();
        }
        return <img src={this.props.balike} alt="my Pic" width='300px'/>;
    }
}
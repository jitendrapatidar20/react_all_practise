import React, { Component } from 'react';

export default class Errorboudry extends Component {
    state ={
        hasError:false
    };
    static getDerivedStateFromError(error){
        return {hasError:true};
    }
    render() { 
            if(this.state.hasError){
              return <h3>Image is not found</h3>;
            }

        return this.props.children;
        
    }
}

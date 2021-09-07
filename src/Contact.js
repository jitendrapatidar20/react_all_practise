import React,{useEffect,useState} from 'react';
import Footer from './Footer';
import MyForm from './MyForm';

import './App.css';

class Contact extends React.Component {  
  render() {  
    return (
        <div className="App">
        <MyForm/>
        <Footer/>
        </div>
    );
  }  
}  
export default Contact  
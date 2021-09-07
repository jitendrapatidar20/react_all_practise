import React,{useEffect,useState} from 'react';
import Footer from './Footer'
import './App.css';  

// how to use list
const myList = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
}); 

// eaxple of map
var numbers = [1, 2, 3, 4, 5];   
const total = numbers.map((number)=>{   
    return (number * 2);   
});   

class About extends React.Component {  


  render() {  
    return (
        
        <div className="App">
        <p>List example</p>
       {listItems}
       <p>Example of Map() - {total}</p>
        <Footer/>
        </div>
    );
  }  
}  
export default About;  
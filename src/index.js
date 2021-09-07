import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';  
import Popper from 'popper.js';  
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'    
import './index.css'; 
import './mysass.scss';
import Home from './Home';    
import About from './About'; 
import Contact from './Contact'; 
import Notfound from './Notfound'; 
import App from './App';  
import DataApiTable from './DataApiTable';  
import DataTable from './DataTable';  
import CurdForm from "./CurdForm";
import AxiosExamples from "./AxiosExamples";
import MycontextProvider from "./MycontextProvider";
import Garage from './PropsExample';
import MyHOC from './MyHOC'; 
import keysExample from './keysExample';
import RefExample from './RefExample';
import MyImageComp from './MyImageComp';
import LifeCycleMethods from './LifeCycleMethods';
import LoopArray from './LoopArray';
import Multicheck from './Multicheck';


const routing = (  
  <Router>  
    <div>  

    
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      
      <ul className="nav nav-pills">  
        <li className="nav-item">  
           <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>    
        </li> 
        <li className="nav-item">  
         <NavLink activeClassName="active" to="/about" className="nav-link">About</NavLink>  
        </li>  
        <li className="nav-item">  
        <NavLink activeClassName="active" to="/contact" className="nav-link">Contact</NavLink>  
        </li> 
        <li className="nav-item">  
        <NavLink activeClassName="active" to="/app" className="nav-link">Table</NavLink>  
        </li>
        <li className="nav-item">  
        <NavLink activeClassName="active" to="/dataApiTable" className="nav-link">DataApiTable</NavLink>  
        </li>
        <li className="nav-item">  
         <NavLink activeClassName="active" to="/curdForm" className="nav-link">PHP CURD Form</NavLink>  
        </li> 
        <li className="nav-item">  
        <NavLink activeClassName="active" to="/dataTable" className="nav-link">DataTable</NavLink>  
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active" to="/axiosExamples" className="nav-link">AxiosExamples</NavLink>  
        </li>

        <li class="nav-item">
        <NavLink activeClassName="active" to="/mycontextProvider" className="nav-link">MycontextProvider</NavLink>  
        </li>

        <li className="nav-item">
        <NavLink activeClassName="active" to="/garage" className="nav-link">PropsExample</NavLink>  
        </li>
        
        <li className="nav-item">
        <NavLink activeClassName="active" to="/MyHOC" className="nav-link">MyHOC</NavLink>  
        </li>
        
        <li className="nav-item">
        <NavLink activeClassName="active" to="/keysExample" className="nav-link">keysExample</NavLink>  
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active" to="/refExample" className="nav-link">RefExample</NavLink>  
        </li>

        <li class="nav-item">
        <NavLink activeClassName="active" to="/lifeCycleMethods" className="nav-link">Life Cycle Methods</NavLink>  
        </li>

        <li class="nav-item">
        <NavLink activeClassName="active" to="/loopArray" className="nav-link">Loop Array</NavLink>  
        </li>

        <li class="nav-item">
        <NavLink activeClassName="active" to="/multicheck" className="nav-link">Multi check</NavLink>  
        </li>

        <li class="nav-item">
        <NavLink activeClassName="active" to="/myImageComp" className="nav-link">Error-Boundaries</NavLink>  
        </li>
         
      </ul>  
      </header>
      </div>
      
      <Switch>
      <Route exact path="/" component={Home} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />
      <Route path="/app" component={App} />
      <Route path="/dataApiTable" component={DataApiTable} />
      <Route path="/curdForm" component={CurdForm} />
      <Route path="/dataTable" component={DataTable} />
      <Route path="/axiosExamples" component={AxiosExamples} />
      <Route path="/mycontextProvider" component={MycontextProvider} />
      <Route path="/garage" component={Garage} />
      <Route path="/MyHOC" component={MyHOC} />
      <Route path="/keysExample" component={keysExample} />
      <Route path="/refExample" component={RefExample} />
      <Route path="/myImageComp" component={MyImageComp} />
      <Route path="/lifeCycleMethods" component={LifeCycleMethods} />
      <Route path="/loopArray" component={LoopArray} />
      <Route path="/multicheck" component={Multicheck} />
      <Route component={Notfound} />  
      </Switch>
    </div>  
  </Router> 
)  
ReactDOM.render(routing, document.getElementById('root')); 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Home from './Home';
// import MyForm from './MyForm';

// ReactDOM.render(<MyForm/>, document.getElementById('root'))

// class Car extends React.Component {
//   render() {
//     return( 
//     <h2>I am a {this.props.brand.name} {this.props.brand.model}!</h2>
//     );
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carinfo = {name: "Ford", model: "Mustang"};
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carinfo} />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Garage />, document.getElementById('root'));




// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//  const myelement = React.createElement('big', {}, 'I do not use JSX!');
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

// const myelement = (
//   <ul>
//     class="nav-link"Apples</li>
//     class="nav-link"Bananas</li>
//     class="nav-link"Cherries</li>
//   </ul>
// );

// const myelement = <input type="text" />;
// ReactDOM.render(myelement, document.getElementById('root'));

// component

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('root'))



// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// } 


// function Car() {
//   return <h2>Hi, I am also a Car!</h2>;
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

// ReactDOM.render(
//    <div>
//    <h1>Jitendra</h1>
//    <p>Ramgabjmandi Kota Rajasthan</p>
//    </div>, 
//   document.getElementById('root'));

      
  // using Recat.fragment

  // ReactDOM.render(
  //   <React.Fragment>
  //   <h1>Jitendra</h1>
  //   <p>Ramgabjmandi Kota Rajasthan</p>
  //   </React.Fragment>, 
  //  document.getElementById('root'));

   // OR 

  //  ReactDOM.render(
  //   <React.Fragment>
  //   <h1>Jitendra Patidar</h1>
  //   <p>List of Best Fruits</p>
  //   <ol>
  //     class="nav-link"Apples</li>
  //     class="nav-link"Bananas</li>
  //     class="nav-link"Cherries</li>
  //   </ol>
  //   </React.Fragment>, 
  //  document.getElementById('root'));

  //   const fname ="Jitendra Patidar";
  //    ReactDOM.render(
  //   <>
  //   <h1>My Name is {fname}</h1>
  //   <p>My Lucky Number is {5+5}</p>
  //   </>, 
  //  document.getElementById('root'));


// template litral



// const fname ="Jitendra";
// const lname ="Patidar";

// var cdate = new Date().toLocaleDateString();
// var ctime = new Date().toLocaleTimeString();

//   ReactDOM.render(
//   <>
//   <h1>My Name is {`${fname} ${lname}`}</h1>
//   <p>My Cureent Date is {cdate}</p>
//   <p>My Cureent Time is {ctime}</p>
//   </>, 
//  document.getElementById('root'));


// use class

// inline css

// const heading1 ={
//   color : 'red',
//   textAlign:'center',
//   fontSize:'70px',
//   // All CSS Atributess should be in camelCase
// }
//   ReactDOM.render(
//   <>
//   <h1 className='heading'>Hello</h1>
//   <h1 style={heading1}>Inline Css Used</h1>
//   </>, 
//  document.getElementById('root'));

/*
You are now watching a React file
through our 'Show React' tool.
Click the tab to check out
the 'index.html' file as well.
*/
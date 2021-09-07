import React, {Component,useState } from 'react';
import Image from './Image';
import photo1 from './photo1.jpeg';
import photo2 from './photo2.jpeg';
import Errorboudry from './Errorboudry';

class MyImageComp extends Component {
    
        state={
            photo1:photo1,
            photo2:photo2,
            photo3:''
        }
   
    render() {
        return (
            <div>
            <Errorboudry>
            <Image balike={this.state.photo1}/> 
            </Errorboudry>

            <Errorboudry>
            <Image balike={this.state.photo2}/>
            </Errorboudry>

            <Errorboudry> 
            <Image balike={this.state.photo3} />
            </Errorboudry>
            
            </div>
        );
    }
}
export default MyImageComp;



// import React from 'react';  
// import './App.css' 
// import  { Redirect } from 'react-router-dom' 
  
// class ErrorBoundary extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.state = { error: false, errorInfo: null };  
//   }  
    
//   componentDidCatch(error, errorInfo) {  
//     // Catch errors in any components below and re-render with error message  
//     this.setState({  
//       error: error,  
//       errorInfo: errorInfo  
//     })  
//   }  
    
//   render() {  
//     if (this.state.errorInfo) {  
//       return (  
//         <div>  
//           <h2>Something went wrong.</h2>  
//           <details style={{ whiteSpace: 'pre-wrap' }}>  
//             {this.state.error && this.state.error.toString()}  
//             <br />  
//             {this.state.errorInfo.componentStack}  
//           </details>  
//         </div>  
//       );  
//     }  
//     return this.props.children;  
//   }    
// }  
  
// class BuggyCounter extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.state = { counter: 0 };  
//     this.handleClick = this.handleClick.bind(this);  
//   }  
    
//   handleClick() {  
//     this.setState(({counter}) => ({  
//       counter: counter + 1  
//     }));  
//   }  
    
//   render() {  
//     if (this.state.counter === 3) {  
//         // return <Redirect to='/login'  />
//         throw new Error('I crashed!');  
//     }  
//     return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
//   }  
// }  
  
// function MyImageComp() {  
//   return (  
//     <div>  
//       <p><b>Example of Error Boundaries</b></p>  
//       <hr />  
//       <ErrorBoundary>  
//         <p>These two counters are inside the same error boundary.</p>  
//           <BuggyCounter />  
//           <BuggyCounter />  
//       </ErrorBoundary>  
//       <hr />  
//       <p>These two counters are inside of their individual error boundary.</p>  
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
//     </div>  
//   );  
// }  
// export default MyImageComp  
import React,{useEffect,useState} from 'react';
import Header from './Header';
import Footer from './Footer'
import './App.css';

function Box() {
  return (
   <h1 className='bigblue'>Hello World</h1>
  );
}

function Clik() {
   return (<button onClick={handleClickEvent}>Click here</button>);
 }



 const handleClickEvent = (event) => {
   alert("click Event accured");
 }



class Home extends React.Component {
   constructor(){
      super();
      this.state={
         name:'Jitendra',
         age:'30'
      }
   }

   // useEffect(() => {
   //    console.log(`You clicked ${count} times`)
   //  });


   componentDidUpdate(){
      console.warn("componentDidUpdate");
      alert("Update Successfully");
   }

   componentDidMount() {
      console.warn("componentDidMount");
      // setTimeout(() => {
      //   this.setState({name: "Patidar"})
      // }, 2000)
    }

   changeName = () => {
      this.setState({name: "Anil"});
    }

    arpass = (a) => {
      alert(a);
    }
  
  
    
   render() {   
      return (
         <div className="App">
            <Header/>
            <h1>Home Page Conent Here</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <Box/>
            <Clik/>
            {/* <button onClick={()=>{this.setState({name:'Anil'})}}>Update</button> */}
            <button  onClick={this.changeName}>Update</button>
            <button onClick={() => this.arpass("Goal")}>Argument Pass</button>
            <Footer/>
         </div>
      );
   }
}

export default Home;




// constructor(){
// // call when component is created
// }

// componentDidMount(){

//    // call when component is completed or ready
// }
// componentDidUpdate(){
 
//    // call when component is updated

// }
//  componentWillUnmount(){

//    // call when component is deleted

//  }

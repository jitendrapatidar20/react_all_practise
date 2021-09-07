import React from "react"
import {ThemeContext} from './MyContext';
import Users from './Users';

class MycontextProvider extends React.Component {

    constructor(){
        super();
        this.state={
           name:'Jitendra',
           age:'30',
           address:'Kota Rajasthan'
        }
     }
    
    render() {
      return (
        <div>
        <ThemeContext.Provider value={{
        name : this.state.name,
        age : this.state.age,
        address : this.state.address
        }}
        >
        <Users/>
        </ThemeContext.Provider>
        </div>
      );
    }
  }

  export default MycontextProvider;
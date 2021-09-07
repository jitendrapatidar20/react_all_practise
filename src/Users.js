import React, { Component } from "react"
import {ThemeContext} from './MyContext';
class Users extends Component {
    render() {
      return (
        <div>
        <ThemeContext.Consumer>
         {
             (data)=>{
              return (
                  <div className='App'>
                  <h1>Context API Example</h1>
                  <h2>My Name Is {data.name}</h2>
                  <h3>My Age Is {data.age}</h3>
                  <h4>My Address Is {data.address}</h4>
                  </div>
                  );
             }
         }
        </ThemeContext.Consumer>
        </div>
      );
    }
  }

  export default Users;
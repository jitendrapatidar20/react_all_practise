import React, { Component } from 'react';  
import { render } from 'react-dom';  
         
export default class Multicheck extends Component {  
  constructor() {  
    super();  
    this.state = {  
      categories: [  
        {id: 1, value: "Angular"},  
        {id: 2, value: "React"},  
        {id: 3, value: "PHP"},  
        {id: 4, value: "Laravel"}  
      ],  
      checkedItems: new Map()  
    };  
    
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }  
       

  handleChange(event) {  
        var isChecked = event.target.checked;  
        var item = event.target.value;  
          //  alert(item);
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));  
       
 

  }  
       
  handleSubmit(event) {  
    console.log(this.state); 
    alert(this.state.categories); 
    event.preventDefault();  

  }  
       
  render() {  
    return (  
      <div>  
       
        <form onSubmit={this.handleSubmit}>  
             
          {  
            this.state.categories.map(item => (  
              <li>  
                <label>  
                  <input  
                    type="checkbox"
                    value={item.value}  
                    onChange={this.handleChange}  
                  /> {item.value}  
                </label>  
              </li>  
            ))  
          }  
             
          <br/>  
          <input type="submit" value="Submit" />  
        </form>  
      </div>  
    );  
  }  
}  
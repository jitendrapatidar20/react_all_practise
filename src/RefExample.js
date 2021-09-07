// import React, { Component } from 'react';  
// import { render } from 'react-dom';  
   
// function CustomInput(props) {  
//   let callRefInput = React.createRef();  
   
//   function handleClick() {  
//     callRefInput.current.focus();  
//   }  
   
//   return (  
//     <div>  
//       <h2>Adding Ref to Class Component</h2>  
//       <input  
//         type="text"  
//         ref={callRefInput} />  
//       <input  
//         type="button"  
//         value="Focus input"  
//         onClick={handleClick}  
//       />  
//     </div>  
//   );  
// }  
// class RefExample extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.callRefInput = React.createRef();  
//   }  
   
//   focusRefInput() {  
//     this.callRefInput.current.focus();  
//   }  
   
//   render() {  
//     return (  
//       <CustomInput ref={this.callRefInput} />  
//     );  
//   }  
// }  
// export default RefExample;  


/*Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

When to Use Refs
1. Refs can be used in the following cases:
2. When we need DOM measurements such as managing focus, text selection, or media playback.
3. It is used in triggering imperative animations.
4. When integrating with third-party DOM libraries.
5. It can also use as in callbacks.
*/

import React, { Component } from 'react';  
import { render } from 'react-dom';  
   
class RefExample extends React.Component {  
    constructor(props) {  
    super(props);  
  
    this.callRefInput = null;  
  
    this.setInputRef = element => {  
      this.callRefInput = element;  
    };  
  
    this.focusRefInput = () => {  
      //Focus the input using the raw DOM API  
      if (this.callRefInput) this.callRefInput.focus();  
    };  
  }  
  
  componentDidMount() {  
    //autofocus of the input on mount  
    this.focusRefInput();  
  }  
  
  render() {  
    return (  
      <div>  
    <h2>Callback Refs Example</h2>  
        <input  
          type="text"  
          ref={this.setInputRef}  
        />  
        <input  
          type="button"  
          value="Focus input text"  
          onClick={this.focusRefInput}  
        />  
      </div>  
    );  
  }  
}  
export default RefExample;  
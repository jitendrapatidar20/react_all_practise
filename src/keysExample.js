import React, { Component } from 'react';

/*A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. It also helps to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time.

Keys should be given inside the array to give the elements a stable identity. The best way to pick a key as a string that uniquely identifies the items in the list. It can be understood with the below example*/

// incorrect Keys

// function ListItem(props) {  
//     const item = props.item;  
//     return (  
//       // Wrong! No need to specify the key here.  
//       <li key={item.toString()}>  
//         {item}  
//       </li>  
//     );  
//   }  
//   function NameList(props) {  
//     const myLists = props.myLists;  
//     const listItems = myLists.map((strLists) =>  
//       // The key should have been specified here.  
//       <ListItem item={strLists} />  
//     );  
    
//     return (  
//       <div>  
//           <h2>Incorrect Key Usage Example</h2>  
//                 <ol>{listItems}</ol>  
//       </div>  
//     );  
//   }  
  
// correct Keys

  function ListItem(props) {  
    const item = props.item;  
    return (  
      // No need to specify the key here.  
      <li> {item} </li>  
    );  
  }  
  function NameList(props) {  
    const myLists = props.myLists;  
    const listItems = myLists.map((strLists) =>  
      // The key should have been specified here.  
      <ListItem key={myLists.toString()} item={strLists} />  
    );  
    return (  
      <div>  
          <h2>Correct Key Usage Example</h2>  
              <ol>{listItems}</ol>  
      </div>  
    );  
  }  

class keysExample extends Component {
    render() {
        const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];  
        return (
            <div>
             <NameList myLists={myLists}/> 
            </div>
        );
    }
}
export default keysExample;
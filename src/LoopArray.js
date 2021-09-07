import React from 'react';  
     
function Mapex() {  
     
  const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];  
  return (  
    <div className="container">     
        {myArray.map(name => (  
          <li>  
            {name}  
          </li>  
        ))}  
     
    </div>  
  );  
}  



   
let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
let itemList=[];
items.forEach((item,index)=>{
  itemList.push( <li key={index}>{item}</li>)
});
 

  
function LoopArray() { 

    const students = [  
        {  
          'id': 1,   
          'name': 'Jack',   
          'email': 'jack@gmail.com'  
        },  
        {  
          'id': 2,   
          'name': 'Mary',   
          'email': 'mary@gmail.com'  
        },  
        {  
          'id': 3,   
          'name': 'John',   
          'email': 'john@gmail.com'  
        },  
    ];  
    // document.write(students.toString());
    return (  
        <div className="container">  
            <h1> Example of React Map Loop </h1>  
         
            <table className="table table-bordered">  
                <tr>  
                    <th>ID</th>  
                    <th>Name</th>  
                    <th>Email</th>  
                </tr>  
        
                {students.map((student, index) => (  
                  <tr data-index={index}>  
                    <td>{student.id}</td>  
                    <td>{student.name}</td>  
                    <td>{student.email}</td>  
                  </tr>  
                ))}  
        
            </table> 
                <ul>
                <Mapex/>
                </ul>
            
                <ol>
                {itemList}
                </ol> 
           
        
        </div>  
      );  
}
export default LoopArray;
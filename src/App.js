import React, {useState, useEffect,Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import axios from 'axios';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import Footer from './Footer';
   
  
class App extends Component {  
  render() {  
     const data = [{  
        name: 'Ayaan',  
        age: 26  
        },{  
         name: 'Ahana',  
         age: 22  
         },{  
         name: 'Peter',  
         age: 40      
         },{  
         name: 'Virat',  
         age: 30  
         },{  
         name: 'Rohit',  
         age: 32  
         },{  
         name: 'Dhoni',  
         age: 37  
         }]  
     const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       }]  
    return (  
          <div> 
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {4}  
                  pageSizeOptions = {[2,4, 6]}  
              /> 
              <Footer/>
          </div>        
    )  
  }  
}  
export default App;  
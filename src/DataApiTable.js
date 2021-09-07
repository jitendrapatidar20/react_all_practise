import React, {useState, useEffect,Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import axios from 'axios';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"  
import Footer from './Footer';  

export default class DataApiTable extends Component {
constructor(props){
super(props)
this.state = {
market: [],
loading:true
}
}
async getMarketPrice(){
const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
console.log(res.data)
this.setState({loading:false, market: res.data})
}
componentDidMount(){
this.getMarketPrice()
}
render() {
const columns = [{  
Header: 'ID',  
accessor: 'name',
sortable: true,
}
,{  
Header: 'Name',  
accessor: 'precentage' ,
},
{  
Header: 'Website',  
accessor: 'market_cap',
}
]
return (
<>
<div className= "container-fluid">
  <div className="header">
    <h2 className= "page-header text-center text-uppercase">
      <b> Data Table From API </b>
    </h2>
    <ul className="breadcrumb ">
      <li><a href="#" style={{color: 'black'}}>Home</a></li>
      <li className="active" style={{color: '  #660000'}}>Marketing Price</li>
    </ul>
  </div>
  <div className ="row">
    <div className = "col-12">
      <div className="card">
        <div className="card-action">
          <div className="marketprice">
            <div className="row">
              <div className ="col-12">
                <div className ="card">
                  <div className="card-body--">
                    <ReactTable  className ="text-center" 
                      data={this.state.market}  
                      columns={columns}  
                      defaultPageSize = {4}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</div>
</>
)
}
}
import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';

export default class AxiosExamples extends React.Component {
    

    // componentDidMount() {
    //     // Simple POST request with a JSON body using axios
    //     const article = { title: 'React POST Request Example' };
    //     axios.post('http://localhost/php-react/all-users.php', article)
    //         .then(response => this.setState({ articleId: response.data.id }));
    // }

    // componentDidMount() {
    //     // GET request using axios with error handling
    //         axios.all([
    //             axios.get('http://localhost/php-react/all-users.php')
    //           ])
    //           .then(data => {
    //             //   alert(data);
    //             //this will be executed only when all requests are complete
    //             console.log('user_name: ', data.user_name);
    //           });
    // }
    
    // useEffect(() => {
    //     // GET request using axios inside useEffect React hook
    //     axios.get('http://localhost/php-react/all-users.php')
    //         .then(response => setTotalReactPackages(response.data.total));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
    
    // componentDidMount() {
    //     // GET request using axios with set headers
    //     const headers = {
    //         'Authorization': 'Bearer my-token',
    //         'My-Custom-Header': 'foobar'
    //     };
    //     axios.get('http://localhost/php-react/all-users.php', { headers })
    //         .then(response => this.setState({ totalReactPackages: response.data.total }));
    // }



    state = {  
        posts: []  
      }  
        
      
    // useEffect(()=>{
    //     axios.get('https://reqres.in/api/users?page=2')
    //       .then(res=>{
    //         console.log(res.data.data);
    //         setUserData(res.data.data)
    //       })
    //       .catch(err=>{
    //         console.log(err);
    //       })
    //  },[])
    
      componentDidMount() {  
        axios.get(`https://jsonplaceholder.typicode.com/posts`)  
          .then(res => {  
            const posts = res.data;  
            this.setState({ posts });  
          }) 
          .catch(err=>{
            console.log(err);
          }) 
      }  
        
      deleteRow(id, e){  
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
            const posts = this.state.posts.filter(item => item.id !== id);  
            this.setState({ posts });  
          })  
          .catch(err=>{
            console.log(err);
          })
        
      }  
        
      render() {  
        return (  
          <div>  
            <h1> Example of React Axios Delete Request </h1>  
        
            <table className="table table-bordered">  
                <thead>  
                  <tr>  
                      <th>ID</th>  
                      <th>Title</th>  
                      <th>Body</th>  
                      <th>Action</th>  
                  </tr>  
                </thead>  
        
                <tbody>  
                  {this.state.posts.map((post) => (  
                    <tr>  
                      <td>{post.id}</td>  
                      <td>{post.title}</td>  
                      <td>{post.body}</td>  
                      <td>  
                        <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                      </td>  
                    </tr>  
                  ))}  
                </tbody>  
        
            </table>  
          </div>  
        )  
      }  
}
import React from 'react';
import './App.css';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
          errormessage: '',
          description: '',
          selct: 'Volvo'
        };

        this.curriculum = React.createRef()
        this.mySubmitHandler = this.mySubmitHandler.bind(this)
      }

      

      mySubmitHandler = (event) => {
      //  alert(this.curriculum.current.files[0].name)
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
          alert("Your age must be a number");
        }
      }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
          if (val !="" && !Number(val) || val > 26) {
            err = <strong>Your age must be a number and less than 26</strong>;
          }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
      }

    render() {

    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }

      return (
        <div className="App">

        
        <form onSubmit={this.mySubmitHandler}>
        {header}
      {this.state.errormessage}
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/><br/>
      <select value={this.state.selct}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <br/><br/>
      <textarea value={this.state.description} />
      <br/>
      <br/>
      <input type="file" ref={this.curriculum} />
      <br/>
      <br/>
      <input type='submit' />
      </form>
        </div>
      );
    }
  }
  export default MyForm;
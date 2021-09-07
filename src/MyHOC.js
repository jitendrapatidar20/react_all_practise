import React from 'react';
var newData = {
   data: 'Data from Higher Order Component..',
}

/*Higher Order Component (HOC) is wrapping around "normal" component and provide additional data input. It is actually a function that takes one component and returns another component that wraps the original one.*/

var MyHOC = ComposedComponent => class extends React.Component {
   componentDidMount() {
      this.setState({
         data: newData.data
      });
   }
   render() {
      return <ComposedComponent {...this.props} {...this.state} />;
   }
};
class MyComponent extends React.Component {
   render() {
      return (
         <div className='App'>
            <h3>{this.props.data}</h3>
         </div>
      )
   }
}

export default MyHOC(MyComponent);


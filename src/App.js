import React, { Component } from 'react';
import UserTable from './components/users-table/UserTable';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        userData: []
    }
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy = (key) => {
    let arrayCopy = [...this.state.userData];
    arrayCopy.sort(this.compareBy(key));
    this.setState({userData: arrayCopy});
  }

  componentDidMount() {
    fetch('http://demo9197058.mockable.io/users')
    .then(response=> response.json())
    .then(users => this.setState({userData: users}))
    }
  render() {
    return (
      <div>
        <UserTable 
        data={this.state.userData}
        sortBy={this.sortBy} 
        compareBy={this.compareBy}/>
      </div>
    );
  }
}

export default App;

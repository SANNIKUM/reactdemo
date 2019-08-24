import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import UserList from './UserList'
//import logo from './logo.svg';
//import './App.css';
import User from './User';

function App() {
  return (
    <Router>
      <div>This is a front page </div>
      <br />
      <Link to="/">Index</Link>
      <br />
       <Link to="/users/">User List</Link>
       <br />
       <Link to="/user/0">User</Link>
      <Route path="/" exact component = {Index}  />
    
      <Route path="/users/" component = {UserList}  />
      <Route path="/user/:id"  component = {User}  />
    </Router>
  );
}

function Index(){
  return (<div>this is Index Page</div>)
}

export default App;

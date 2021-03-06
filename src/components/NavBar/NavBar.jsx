import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/quiz">Take the Quiz</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
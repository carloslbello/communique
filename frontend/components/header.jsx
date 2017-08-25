import React from 'react';
import { Link } from 'react-router-dom';
import Separator from '../util/separator';

const Header = ({ loggedIn, currentUser, logOutUser }) => {
  // debugger;
  const writeStory = loggedIn ? (
    <Link to="/newpost">Write a post</Link>
  ) : null;
  const userLinks = loggedIn ? (
    <div>Hello, {currentUser.username}<Separator /><a href="#" onClick={logOutUser}>Log out</a> </div>
  ) : (
    <div><Link to="/signup">Sign up</Link><Separator /><Link to="/login">Log in</Link></div>
  );
  return (
    <header>
      <div>
        {writeStory}
      </div>
      <h1>
        <Link to="/">Communique</Link>
      </h1>
      {userLinks}
    </header>
  );
};

export default Header;

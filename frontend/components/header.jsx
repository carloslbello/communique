import React from 'react';
import { Link } from 'react-router-dom';
import Separator from '../util/separator';

const Header = ({ loggedIn, currentUser, logOutUser }) => {
  // debugger;
  const searchIcon = <Link className="search-icon" to="/search"><i className="fa fa-search" /></Link>
  const writeStory = loggedIn ? (
    <Link to="/newpost">Write a post</Link>
  ) : null;
  const userLinks = loggedIn ? (
    <div>{searchIcon} Hello, {currentUser.username}<Separator /><a href="#" onClick={logOutUser}>Log out</a> </div>
  ) : (
    <div>{searchIcon} <Link to="/signup">Sign up</Link><Separator /><Link to="/login">Log in</Link></div>
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

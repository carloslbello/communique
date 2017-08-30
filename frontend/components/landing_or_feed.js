import React from 'react';
import { connect } from 'react-redux';
import Landing from './landing';
import FeedContainer from './feed_container';

const LandingOrFeed = ({ loggedIn }) => loggedIn ? <FeedContainer /> : <Landing />;

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser
});

export default connect(mapStateToProps)(LandingOrFeed);

import React from 'react';
import { connect } from 'react-redux';
import LandingContainer from './landing_container';
import FeedContainer from './feed_container';

const LandingOrFeed = ({ loggedIn }) => loggedIn ? <FeedContainer /> : <LandingContainer />;

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser
});

export default connect(mapStateToProps)(LandingOrFeed);

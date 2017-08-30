import React from 'react';
import Modal from './modal';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username_or_email: '',
      password: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => {
      this.setState({ [key]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logInUser(this.state);
  }

  render() {
    return (
      <Modal>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" onInput={this.handleInput('username_or_email')} value={this.state.username_or_email} placeholder="Username or Email" />
          <input required type="password" onInput={this.handleInput('password')} value={this.state.password} placeholder="Password" />
          <input type="submit" value="Log In" />
        </form>
        <p>Or, <a href="#" onClick={this.props.logInDemoUser}>log in as demo user</a></p>
      </Modal>
    );
  }
}

export default LogInForm;

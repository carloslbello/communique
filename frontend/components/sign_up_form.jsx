import React from 'react';
import Modal from './modal';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirm_password: ''
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
    this.props.createUser(this.state);
  }

  render() {
    return (
      <Modal>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input required type="email" onInput={this.handleInput('email')} value={this.state.email} placeholder="Email"/>
          <input required type="text" onInput={this.handleInput('username')} value={this.state.username} placeholder="Username" />
          <input required type="password" onInput={this.handleInput('password')} value={this.state.password} placeholder="Password"/>
          <input required type="password" onInput={this.handleInput('confirm_password')} value={this.state.confirm_password} placeholder="Confirm Password"/>
          <input type="submit" value="Sign Up" />
        </form>
      </Modal>
    );
  }
}

export default SignUpForm;

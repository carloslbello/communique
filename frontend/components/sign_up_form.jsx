import React from 'react';

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
      <div className="user-credentials-form">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input required type="email" onInput={this.handleInput('email')} value={this.state.email} />
          </label>
          <label>
            Username
            <input required type="text" onInput={this.handleInput('username')} value={this.state.username} />
          </label>
          <label>
            Password
            <input required type="password" onInput={this.handleInput('password')} value={this.state.password} />
          </label>
          <label>
            Confirm Password
            <input required type="password" onInput={this.handleInput('confirm_password')} value={this.state.confirm_password} />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;

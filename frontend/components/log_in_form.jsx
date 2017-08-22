import React from 'react';

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
      <div className="user-credentials-form">
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username or Email
            <input type="text" onInput={this.handleInput('username_or_email')} value={this.state.username_or_email} />
          </label>
          <label>
            Password
            <input type="password" onInput={this.handleInput('password')} value={this.state.password} />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default LogInForm;

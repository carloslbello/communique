import React from 'react';
import ReactQuill from 'react-quill';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    // debugger;
    this.setState({
      text: value
    });
  }

  handleSubmit() {
    console.log(this.state.text);
  }

  render() {
    return (
      <div className="post">
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Post;

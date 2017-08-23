import React from 'react';
import ReactQuill from 'react-quill';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      content: this.props.content
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  handleContentChange(value) {
    this.setState({
      content: value
    });
  }

  handleSubmit() {
    this.props.submit(this.state)
      .then(action => this.props.history.push(`/posts/${action.post.id}`))
  }

  render() {
    return (
      <div className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onInput={this.handleTitleChange} />
        <ReactQuill
          value={this.state.content}
          onChange={this.handleContentChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default PostForm;

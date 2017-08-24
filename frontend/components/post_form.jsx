import React from 'react';
import ReactQuill from 'react-quill';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.post.title,
      content: this.props.post.content
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.currentTarget.innerHTML
    });
  }

  handleContentChange() {
    // debugger;
    this.setState({
      content: this.quill.editor.getContents().ops
    });
  }

  handleSubmit() {
    this.props.submit(this.state)
      .then(action => this.props.history.push(`/posts/${action.post.id}`))
  }

  render() {
    return (
      <div className="post-form">
        <h2
          contentEditable
          onInput={this.handleTitleChange} />
        <ReactQuill
          ref={quill => this.quill = quill}
          defaultValue={this.state.content}
          onChange={this.handleContentChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default PostForm;

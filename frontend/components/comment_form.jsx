import React from 'react';
import ReactQuill from 'react-quill';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContentChange() {
    this.setState({
      content: this.quill.editor.getContents().ops
    });
  }

  handleSubmit() {
    this.props.submit(this.state)
      .then(() => {
        this.setState({
          content: []
        });
        this.quill.editor.setContents([]);
      });
  }

  render() {
    return (
      <div className="comment-form">
        <b>Add a comment</b>
        <ReactQuill
          ref={quill => this.quill = quill}
          onChange={this.handleContentChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default CommentForm;

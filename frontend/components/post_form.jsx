import React from 'react';
import ReactQuill from 'react-quill';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.post.title,
      content: this.props.post.content,
      tagNames: this.props.post.tagNames,
      currentTag: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
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
    const { title, content, tagNames } = this.state;
    this.props.submit({ title, content, tag_names: tagNames })
      .then(action => this.props.history.push(`/posts/${action.post.id}`))
  }

  handleTagChange(e) {
    this.setState({ currentTag: e.currentTarget.value });
  }

  addTag(e) {
    e.preventDefault();
    if (!this.state.tagNames.includes(this.state.currentTag))
      this.setState({ tagNames: this.state.tagNames.concat(this.state.currentTag), currentTag: '' });
  }

  removeTag(tagName) {
    return () => {
      this.setState({ tagNames: this.state.tagNames.filter(existingTagName => existingTagName !== tagName) });
    }
  }

  render() {
    const tagLis = this.state.tagNames.map(tagName =>
      <li key={tagName}>
        <i className="fa fa-times pointer" onClick={this.removeTag(tagName)} />
        {tagName}
      </li>
    );
    return (
      <div className="post-form">
        <h2
          contentEditable
          onInput={this.handleTitleChange} />
        <ReactQuill
          ref={quill => this.quill = quill}
          defaultValue={this.state.content}
          onChange={this.handleContentChange} />
        <form onSubmit={this.addTag}>
          <label>
            Add Tag <span className="small">(lowercase and digits only)</span>
            <input type="text"
              pattern="[a-z0-9]+"
              onInput={this.handleTagChange}
              value={this.state.currentTag} />
          </label>
        </form>
        <ul className="tags">
          {tagLis}
        </ul>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default PostForm;

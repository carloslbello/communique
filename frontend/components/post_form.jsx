import React from 'react';
import ReactQuill from 'react-quill';
import { modules, formats } from '../util/image_react_quill';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.post, { currentTag: '' });

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.upload = this.upload.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    this.titleHeader.innerHTML = this.state.title;
    if(this.state.heroImageUrl) this.heroImg.src = this.state.heroImageUrl;
    this.quill.editor.setContents(this.state.content);
  }

  handleChange(key) {
    return e => {
      this.setState({
        [key]: e.currentTarget.innerHTML
      });
    };
  }

  handleInput(key) {
    return e => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }

  handleContentChange() {
    this.setState({
      content: this.quill.editor.getContents().ops
    });
  }

  handleSubmit() {
    const { title, content, tagNames: tag_names, summary, heroImageUrl: hero_image_url } = this.state;
    this.props.submit({ title, content, tag_names, summary, hero_image_url })
      .then(action => this.props.history.push(`/posts/${action.post.id}`))
  }

  upload() {
    cloudinary.openUploadWidget(
      CLOUDINARY_OPTIONS,
      (error, results) => {
        if(error) return;
        const { url } = results[0];
        this.setState({
          heroImageUrl: url
        });
        this.heroImg.src = url;
      }
    )
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
        <i className="fa fa-close pointer" onClick={this.removeTag(tagName)} />
        {tagName}
      </li>
    );
    return (
      <div className="post-form">
        <h2
          contentEditable
          onInput={this.handleChange('title')}
          ref={titleHeader => this.titleHeader = titleHeader} />
        <div className={this.state.heroImageUrl ? "hero-image-container pointer" : "hero-image-container pointer dashed-border"} onClick={this.upload}>
          <div>Click here to upload an image</div>
          <img ref={heroImg => this.heroImg = heroImg} />
        </div>
        <textarea
          placeholder="Summary (optional)"
          maxLength="255"
          onInput={this.handleInput('summary')}
          value={this.state.summary} />
        <ReactQuill
          modules={modules}
          formats={formats}
          ref={quill => this.quill = quill}
          onChange={this.handleContentChange} />
        <form onSubmit={this.addTag}>
          <label>
            Add Tag <span className="small">(lowercase and digits only)</span>
            <input type="text"
              pattern="[a-z0-9]+"
              onInput={this.handleInput('currentTag')}
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

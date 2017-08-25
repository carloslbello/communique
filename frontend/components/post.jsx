import React from 'react';
import Quill from 'quill';
import CommentsContainer from './comments_container';

class Post extends React.Component {
  componentDidMount() {
    if (!this.props.post)
      this.props.fetchPost();
  }

  render() {
    const { post } = this.props;
    if (!post) return null;

    // Ugly hack that works: Create an invisible Quill editor,
    // give it the post's contents, and grab its HTML

    const container = document.createElement('div');
    const quill = new Quill(container);
    quill.setContents(post.content);
    const postHTML = quill.container.querySelector('.ql-editor').innerHTML;

    const tagLis = post.tag_names.map(tag_name => <li key={tag_name}>{tag_name}</li>);

    return (
      <div className="post">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={ { __html: postHTML } } />
        <ul className="tags">
          {tagLis}
        </ul>
        <CommentsContainer postId={this.props.postId} />
      </div>
    )
  }
}

export default Post;

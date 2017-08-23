import React from 'react';

class Post extends React.Component {
  componentDidMount() {
    if (!this.props.post)
      this.props.fetchPost(this.props.postId);
  }

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <div className="post">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

export default Post;

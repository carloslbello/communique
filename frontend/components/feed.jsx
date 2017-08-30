import React from 'react';
import PostInfoContainer from './post_info_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = { postIds: [] };
  }

  componentDidMount() {
    this.props.fetchFeedPostIds()
      .then(res => this.setState({ postIds: res.post_ids }));
  }

  render() {
    return (
      <div className="posts-info-container">
        {this.state.postIds.map(postId => <PostInfoContainer key={postId} postId={postId} />)}
      </div>
    );
  }
}

export default Feed;

import React from 'react';
import PostInfoContainer from './post_info_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = { postIds: [], fetched: false };
  }

  componentDidMount() {
    this.props.fetchFeedPostIds()
      .then(res => this.setState({ postIds: res.post_ids, fetched: true }));
  }

  render() {
    const noPosts = (this.state.postIds.length === 0 && this.state.fetched);
    const noPostsInfo = noPosts ? (
      <div className="landing">
        <p>Looks like you've got nothing in your feed. You might want to check out these featured posts:</p>
      </div>
    ) : null;
    const postIds = noPosts ? window.landingPostIds : this.state.postIds;
    debugger;
    return (
      <div>
        {noPostsInfo}
        <div className="posts-info-container">
          {postIds.map(postId => <PostInfoContainer key={postId} postId={postId} />)}
        </div>
      </div>
    );
  }
}

export default Feed;

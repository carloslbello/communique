import React from 'react';
import { withRouter } from 'react-router-dom';
import { postsWithTag } from '../util/posts_api_util';
import PostInfoContainer from './post_info_container';

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tagName: this.props.match.params.tagName, postIds: [] };

    this.performTagFetch = this.performTagFetch.bind(this);
  }

  componentDidMount() {
    this.performTagFetch(this.props.match.params.tagName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.tagName !== nextProps.match.params.tagName)
      this.performTagFetch(newProps.match.params.tagName);
  }

  performTagFetch(tagName) {
    this.setState({ tagName, postIds: [] });
    postsWithTag(tagName)
      .success(res => this.setState({ postIds: res.post_ids }));
  }

  render() {
    return (
      <div className="tagged-list">
        <p>Showing posts tagged '{this.state.tagName}'</p>
        <div className="posts-info-container">
          {this.state.postIds.map(postId => <PostInfoContainer key={postId} postId={postId} />)}
        </div>
      </div>
    )
  }
}

export default Tag;

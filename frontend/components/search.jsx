import React from 'react';
import { searchWithQuery } from '../util/posts_api_util';
import PostInfoContainer from './post_info_container';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', postIds: [] };
    this.timeout = 0;

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQueryChange(e) {
    this.setState({ query: e.currentTarget.value });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.performSearch, 500);
  }

  performSearch() {
    searchWithQuery(this.state.query)
      .success(res => this.setState({ postIds: res.post_ids }));
  }

  handleSubmit(e) {
    e.preventDefault();
    clearTimeout(this.timeout);
    this.performSearch();
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onInput={this.handleQueryChange} placeholder="Search" />
        </form>
        <div className="posts-info-container">
          {this.state.postIds.map(postId => <PostInfoContainer key={postId} postId={postId} />)}
        </div>
      </div>
    );
  }
}

export default Search;

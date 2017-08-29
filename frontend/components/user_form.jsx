import React from 'react';
import { upload } from '../util/cloudinary_util';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      bio: user.bio,
      profilePictureUrl: user.profile_picture_url
    };

    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.pBio.innerHTML = this.state.bio;
  }

  handleBioChange(e) {
    this.setState({
      bio: e.currentTarget.innerHTML
    });
  }

  handleSubmit() {
    this.props.submit({ bio: this.state.bio, profile_picture_url: this.state.profilePictureUrl })
      .then(action => this.props.history.push(`/users/${this.props.user.id}`))
  }

  upload() {
    upload(
      (error, results) => {
        if(error) return;
        const { url } = results[0];
        this.setState({
          profilePictureUrl: url
        });
      }
    )
  }

  render() {
    const { user } = this.props;
    return (
      <div className="user-page">
        <div className="user-avatar-container user-avatar-container-large pointer" onClick={this.upload}>
          <div>Click to upload an image</div>
          <img src={this.state.profilePictureUrl ? this.state.profilePictureUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/500px-Checkerboard_pattern.svg.png'} alt={`${user.username}'s avatar`} />
        </div>
        <h1>{user.username}</h1>
        <p className="dashed-border" contentEditable onInput={this.handleBioChange} ref={pBio => this.pBio = pBio} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default UserForm;

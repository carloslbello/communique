import React from 'react';

class RequiredLoadConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadingRequestSent: false };
  }

  componentWillMount() {
    if(!this.props.resource && !this.state.loadingRequestSent) {
      this.props.request();
      this.setState({ loadingRequestSent: true });
    }
  }

  render() {
    const { component: Component, resource, request, mappedState, mappedDispatch } = this.props;
    if(!resource) return null;
    return <Component {...mappedState(resource)} {...mappedDispatch} />;
  }
}

export default RequiredLoadConnect;

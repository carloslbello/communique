import React from 'react';
import { withRouter } from 'react-router-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.goToRoot = this.goToRoot.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => { this.container.className = 'modal-container'; });
  }

  goToRoot(e) {
    if (e.currentTarget === e.target)
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="modal" onClick={this.goToRoot}>
        <div className="modal-container modal-small" ref={container => this.container = container}>
          <i className="fa fa-close fa-2x modal-close pointer" onClick={this.goToRoot} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(Modal);

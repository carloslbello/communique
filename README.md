# Communique

[Communique live][heroku]

[heroku]: http://communique-cl.herokuapp.com/

Communique is a fullstack web app based on Medium. It uses Ruby on Rails and the PostgreSQL database on the backend and React/Redux on the frontend.

## Features and Implementation

### AJAX Architecture

Many of the React components that are used in Communique may require AJAX requests to fetch the required data if it is not already in the Redux store. Instead of doing this logic in each of those components, I created a utility called RequiredLoadConnect, which can detect if a resource is missing and fetch it before rendering the connected component.

```javascript
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
    const { component: Component, resource, request, mappedState, mappedDispatch, required } = this.props;
    if(required === false || resource === null || resource === undefined) return null;
    return <Component {...mappedState(resource)} {...mappedDispatch} />;
  }
}
```

RequiredLoadConnect is used with the React-Redux `connect` method.

```javascript
// Example of RequiredLoadConnect usage

const mapStateToProps = (state, ownProps) => ({
  component: Post, // this is the component we want to render
  resource: state.entities.posts[ownProps.postId],
  // ^ this is the resource we need loaded
  mappedState: resource => ({
    // this function takes the resource and returns props to be used by the component
    post: resource
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  request: () => dispatch(fetchPost(ownProps.postId)),
  // ^ if we don't already have the resource, this request is made to fetch it
  mappedDispatch: {}
  // ^ if the component needs access to any actions, they are put in mappedDispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequiredLoadConnect);
```

### Post Rendering and Editing

Posts are created using the Quill.js rich text editing library. Quill uses an internal format called Delta to store data, and this format is also used to store post contents on the backend as serialized JSON. Raw HTML can be exported from Quill, but if content is stored in this manner, it creates an XSS issue.

Quill has no facility to directly render Delta formatted data into HTML, so in order to achieve this functionality, I create an invisible Quill editor, set its contents, and grab its inner HTML.

```javascript
// Ugly hack that works: Create an invisible Quill editor,
// give it the post's contents, and grab its HTML

const container = document.createElement('div');
const quill = new Quill(container);
quill.setContents(post.content);
const postHTML = quill.container.querySelector('.ql-editor').innerHTML;
```

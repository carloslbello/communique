# Communique

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/

## Minimum Viable Product

Communique is a web application inspired by Medium built using Ruby on Rails
and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Rich Text Editing
- [ ] Including image upload
- [ ] Creating posts
- [ ] Tags
- [ ] Commenting on posts
- [ ] Follows and feed
- [ ] Marking a post as heard
- [ ] Infinite Scroll
- [ ] Search through posts
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

These sets of functionality will be implemented in the order they are listed:

- [ ] Rails project with front-end auth
- [ ] API for creating and editing posts coupled with frontend rich text editing
- [ ] Image upload for rich text editing
- [ ] Tags for post
- [ ] Creating a feed where tags and individual users can be followed, with infinite scroll
- [ ] Marking a post as 'heard'
- [ ] Search posts by title, content, and tags

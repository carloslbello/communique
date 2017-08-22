# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:id`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts & Comments

- `GET /api/posts`
  - Posts index/search
  - accepts `tag_name` query param to list posts by tag
  - accepts `content_query` query param to search by post title and content
  - accepts pagination params
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`
- `POST /api/posts/:id/comments`
- `GET /api/posts/:id/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Heards

- `POST /api/posts/:id/heard`
- `DELETE /api/posts/:id/heard`

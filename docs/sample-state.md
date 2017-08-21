```js
{
  entities: {
    users: {
      1: {
        username: 'some_guy',
        id: 1,
        avatar_url: 'some.website/image.png',
      }
    },
    posts: {
      1: {
        title: 'What If The World Ends On Monday?',
        body: '(insert CommonMark formatted text here)',
        authorId: 1,
        timesHeard: 220,
        firstToHear: 'Albert Einstein'
      },
    },
  },
  ui: {
    currentUser: {
      id: 1,
      followingUsersById: [2, 3],
      heardPostsById: [1],
    }
  },

}
```

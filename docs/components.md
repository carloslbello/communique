## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**PostEditorContainer**
 - PostEditor

**NewPostContainer**
 - PostEditor

**NavbarContainer**
 - Navbar

**PostIndex**
 - PostIndexItem
  - PostDetail

**Search**

**PostContainer**
 - Post
  - SmallUserInfo

**UserContainer**
 - UserInfo

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/post/:postId" | "PostContainer" |
| "/new-post" | "NewPostContainer" |
| "/search" | "Search" |
| "/users/:userId" | "UserContainer" |

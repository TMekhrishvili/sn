Twitter like social media.

Tech stack: 
* Nodejs
* Nestjs framework
* MongoDB
* Docker (Docker compose)
* Swagger

AWS (to be determined).

## Github Actions

React + typescript. Any css framework. (Bootstrap, Material or component libraries)

## Functionallity

1. If user is not logged in automatically redirect to login page.
2. Registration page will have a form with four fields: Email, username (handle), password (repeat password).
3. Password should contain at least one uppercase, one character, one number. Length should be at least 8 characters.
4. Login page should have a form with email and password fields.
5. We should use JWT. (Passportjs, Or without framework) We should store user data in db (password should be encrypted). (bcrypt.js).
6. After registration user should be redirected to login page.
7. website should have home page where user can see posts by users he/she follows. (If user doesn't follow anyone, then list should be empty).
8. On top of list of posts, there should be text input, where user can add new posts.
9. on the left we should have a sidebar, with buttons (home, profile).

> Live feed with websockets?

## post

1. Post should have following properties (content, likeCount, commentCount, iLike). Comment should have text content (no nested replies).
2. In the home page list we should have post preview (post content, likeCount, commentCount). If user clicks on post we should get a popup which will containt post preview + comment list.
3. Profile page will have user details (Generic avatar, post count, follow count, follower count). after user details we will have user's post list (details are the same as home page list).

Footer (All rights reserved (copyright symbol) and authors)



1. users
    1. create/register - add new user
       1. username (handle)
       2. email
       3. password
       4. repeat password
       5. followings[user id]
    2. update - edit profile(?)
    3. delete account(?)
2. posts
   1. id
   2. user id
   3. content
   4. comments 
        [{
            userid,
            comment,
            date,
        }]
   5. likes [user id]
   6. create date


* `/posts` - create post
* `/posts/comment` - add comment on post
* `/posts/like` - like post
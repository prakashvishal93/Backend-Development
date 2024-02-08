# CRUD

- `Create Read Update Read`
- When we say we are trying to make a CRUD API in compliance to REST convention. In Rest Convention, the most important thing is `Resource`.
- `Resource ` is a real life entity.
- By CRUD API, we actually mean that API that can create our `Resource`.
- Eg: Medium - Create a blog, Read a blog, Update a blog, Delete a blog if he owns the Blog.

## Creating a basic blog Application using CRUD

- C -> Create Blog
- R -> Read Blog
- U -> Update Blog
- D -> Delete Blog

-- In Order to prepare these CRUD API based on REST Convention, we can follow some set of rules, so that whenever we are creating a CRUD API,  
 everytime we see as a consistent set of Input Parameter, Consistent set of Output Parameter, and URL, if we are going to following this convention.

### API TO CREATE A BLOG

    - URL ---->   /blog
    - Method --> POST


    -- Wanted to read all blogs
                -- URL -- /blogs
                -- Methods -- GET

    -- API to read specific blogs -- using blog id (to uniquely identify the blog)
                -- URL -- /blogs/:id        --> eg - /blogs/231421
                -- Methods -- GET

    -- Wanted to delete a blog
                -- URL -- /blogs/:id
                -- Methods -- DELETE

    -- Wanted to update a blog
                -- URL -- /blogs/:id
                -- Methods -- PUT/PATCH
                -- body params - {title, or something}

### HOT Reloading:

    - When we make a change anything to our codebase, the server restarts automatically.For this restarting, we need a third party packages.
    - We can use `nodemon`- It automatically restarts the node application when a file changes detected
        - npx is used to as cli to run the node file :- > `npx nodemon index.js`
            - We can also add a start script in package.json to run the node file : -> "start": "npx nodemon index.js"
                To run it, we can use npm start

### Middleware

    In simple terms, Let say we are sending a request and there is an API, then we are going to receive a request.
    Before we receive the request, we can put some layer of logic before we actually hit the API. These logic can do a lot of thing like whether
    someone is sending correct data or not, whether someone is sending mallicious data.
    In these layer we can do this before actually hitting our API. These layer are middleware.

    Also, In order to configure the body-parser, we need the middleware

### Setting up body-parser

    -

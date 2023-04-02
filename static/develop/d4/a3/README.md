# API Reference

## GET /

Returns a webpage with a link to `/posts`

## GET /posts

Returns JSON list of posts in order from most recent to least recent.

### Arguments

None

### Example Call

```js
const postsURL = "https://post-server.zphyrj1.repl.co/posts"
const posts = await (await fetch(postsURL)).json()
```

### Example Output

```json
["post 3", "post 2", "post 1"]
```

## POST /posts

Adds a post to the list of posts on the server and returns a list of the current posts on the server including the newest added post.

### Headers
```ts
body: string
```

### Example Call

```js
const postsURL = "https://post-server.zphyrj1.repl.co/posts"
const postText = "Hello, World!"

posts = await (
  await fetch(postsURL, {
    method: "POST",
    body: postText,
  })
).json();
```

### Example Output

```json
["Hello, World!", "post 3", "post 2", "post 1"]
```



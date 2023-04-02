---
title: Develop
color: purple
---

<script>
  import Previewer from "$lib/Previewer.svelte"
</script>

# Develop

> warn Warning!
>
> This section is only an outline so far. It will likely get filled out more by the end of February and completed by the end of March.

## Day 1: Review JavaScript/Intro to Svelte

### Activity 1: Todo App (Code along)

Make a text feed that a user can post to and delete from with pure javascript

Example: [https://posts.zphyrj.repl.co](https://posts.zphyrj.repl.co)

### Lesson 1: Svelte Hello World

Go through part 1 on [learn.svelte.dev](https://learn.svelte.dev)

> tip You learn better by typing everything out!
>
> While the solve button will autosolve the tutorial, I strongly recommend actually
> typing out the tutorial and trying to complete each step yourself!

## Day 2: Svelte

### Lesson 1: Setup

On replit open the [Svelte template](https://replit.com/@replit/Svelte?v=1)!

### Activity 1: Recreate day 1's activity using Svelte

> tip
>
> Make sure to refer to the
> [Svelte documentation](https://svelte.dev/docs#template-syntax)
> for help, just like how you looked at the P5.js documentation for the
> [Experiment](./experiment) level.

## Day 3: NodeJS

### Activity 1: NodeJS + Replit DB Post Server

### Activity 2: Svelte + Fetch

#### Fetch

The [`fetch` javascript function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) lets us get data from our other website and insert it into
our own website. Here's how to use it to fetch from my example server:

```js
posts = await (await fetch(postsURL)).json()
```

The await keyboard tells the browser to wait for the server to get back to us before
continuing with setting the posts value to what the server said the list of posts
is currently.

Here's an [example replit](https://replit.com/@zphyrj1/Posts). Don't look at my
code until you've looked at the Svelte documentation and asked a friend!

## Day 4: Brainstorm App (collaborative)

### Activity 1: Brainstorm App (10 mins)

Make a new Svelte project and list out ideas in README.md

> important
>
> Make sure to limit the scope of the project to something that can be done in one hour!

Here's some example ideas!

### Activity 2: Design Frontend (25 mins)

Use the fileName.draw feature on Replit to design the website within the project created for Activity 1.

![A sketch of the design for the Posts app](./d4/wireframe.png)

### Activity 3: Design backend (25 mins)

Make a new node.js project

Use a README.md to design the API for the server

TODO: make example

## Day 5: Program App

### Activity 1: Program App (60 mins)

Use the designs from yesterday and actually code them up.

TODO: make example

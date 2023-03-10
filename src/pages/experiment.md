---
title: Experiment
color: orange
---

<script>
  import Previewer from "$lib/Previewer.svelte"
</script>

# Experiment

> warn Warning!
>
> This section is not complete yet. It will likely be completed around the end of February.

## Day 1: Review + intro to JS

### Activity 1: Review HTML + CSS (15 mins)

Edit the HTML files below to do two things:

1. Make it look better with different fonts, colors (especially the `background-color` and the link `color`), along with any other CSS you like.
2. Replace the joke with your own! Feel free to add in images or other HTML elements if you'd like.

<Previewer root="/experiment/d1/a1/index.html" paths={["/experiment/d1/a1/punchline.html"]} />

### Activity 2: Hello World with JS (5 mins)

```js
console.log('Hello World')
```

### Activity 3: Introduce JS + JS Canvas (40 mins)

Start by drawing one rectangle to the js canvas. It can be a square, like the one shown below, or it can be a rectangle of your choosing. You can change the background color and the rectangle number to whatever you'd like.

<Previewer root="/experiment/d1/a3/square.html" paths={["/experiment/d1/a3/square.js"]} />

Then draw 10 rectangles onto the canvas using a `for` loop:

```js
for (let i = 0; i < 10; i++) {
  // draw one rectangle here!
}
```

If you're feeling inspired, play around and see what you can make!

> answer
>
> <details>
> <summary>Show Example</summary>
> <Previewer root="/experiment/d1/a3/squares.html" paths={["/experiment/d1/a3/squares.js"]} />
> </details>

## Day 2: P5.js animations

### Activity 1: P5.js drawing (15 mins)

Here's a duplicate of the first square we drew, this time using the P5.js library.

Note the script import on line 10 with `src="../../p5.js"` inside of the `rect.html` on line 10. This imports the p5.js library.

> ask
>
> <details>
> <summary>What are libraries?</summary>
> A library in programming is a collection of `code` such as `functions` and `classes` which are designed to make other programmers' jobs easier (we'll cover classes tomorrow).
> You don't have to read all of the code inside of `p5.js` to use the library, you can simply call the functions laid out in the [p5.js documentation](https://p5js.org/reference/) and trust that the library will take care of the rest.
> </details>

<Previewer root="/experiment/d2/a1/rect.html" paths={["/experiment/d2/a1/square.js"]} />

### Activity 2: P5.js animating (15 mins)

TODO: Make demo project using the `draw()` function

<Previewer root="/experiment/d2/a2/fancy.html" paths={["/experiment/d2/a2/fancy.js"]} />

### Activity 3: P5.js interactivity (30 mins)

Introduce keyboard and mouse variables to the p5.js code.

<Previewer root="/experiment/d2/a3/player.html" paths={["/experiment/d2/a3/player.js"]} />

<Previewer root="/experiment/d2/a3/parallax.html" paths={["/experiment/d2/a3/parallax.js"]} />

## Day 3: Classes and Object Orientation

### Lesson 1: Vectors (45 mins)

#### Why Learn Vectors?

Go over vectors with this demo: https://replit.com/@ZephyrJones/vectors

TODO: Outline how to teach vectors + add vector visualizations to this site

### Lesson 2: Classes (15 mins)

Make a class that does something.

TODO: code up a class demo

## Day 4: Move!

### Activity 1: Dinosaur Game Clone (60 mins)

#### Player Class

Make a player controller for a P5.js rectangle with a player class that lets the player jump and draws the player.

#### Cactus/Spike class

Make a cactus class that draws a cactus and moves to the left. Have 2-3 cacti that move at different speeds.

#### Game Loop

##### Points

When a cactus gets to the other side of the screen the player should get a point for successfully dodging the cactus.

##### Collision Detection/Game Over

Make a collision detection function that checks if the player is touching the cactus. If the player is touching the cactus, the game should end.

## Day 5: Your Turn!

### Draft experiment (5 mins)

TODO: Make list of experiment ideas

> important Warning
>
> Make sure to limit the scope of the project! You'll only have 40 minutes to make the project

### Make project (40 mins)

Code up the project

### Share/present projects (15 mins)

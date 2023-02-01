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

TODO: make review activity (some sort of multi page website)

### Activity 2: Hello World with JS (5 mins)

```js
console.log('Hello World')
```

### Activity 2: Introduce JS + JS Canvas (30 mins)

Start by drawing 1 rectangle to the js canvas.

<Previewer root="/experiment/d1/a2/rect.html" paths={["/experiment/d1/a2/square.js"]} />

Then draw 10 rectangles onto the canvas using a for loop.

If you're feeling inspired, play around and see what you can make!

> tip
>
> Try editing the `count` variable in the `squares.js` file!

<Previewer root="/experiment/d1/a2/fancy.html" paths={["/experiment/d1/a2/squares.js"]} />

### Lesson 3: Demo P5.js for Tomorrow (15 mins)

TODO: make animated p5.js demo

## Day 2: P5.js animations

### Activity 1: P5.js drawing (15 mins)

TODO: Make demo project

### Activity 2: P5.js animating (15 mins)

TODO: Make demo project using the `draw()` function

### Activity 3: P5.js interactivity (30 mins)

Introduce keyboard and mouse variables to the p5.js code.

<Previewer root="/experiment/d2/a3/parallax.html" paths={["/experiment/d2/a3/parallax.js"]} />

## Day 3: Classes and Object Orientation

### Lesson 1: Vectors (45 mins)

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

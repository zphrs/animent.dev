---
title: Experiment
color: orange
---

<script>
  import Previewer from "$lib/Previewer.svelte"
</script>

# Experiment

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

Be a little rebelious! Make the square a rectangle! I won't try to stop ya ;)

### Activity 2: P5.js animating (15 mins)

Here's a fancy animation! Ooooohhhh aaaaaaaa

<Previewer root="/experiment/d2/a2/fancy.html" paths={["/experiment/d2/a2/fancy.js"]} />

See if you can make a better animation! Remember to use
[replit's](https://replit.com)
[p5.js template](https://replit.com/@replit/p5js?v=1)!

### Activity 3: P5.js interactivity (30 mins)

Now we get to the real fun part! Interactivity!

In level 1 you might have been frustrated that we couldn't interact with the fancy
CSS animations. Kind of boring, I know. Well worry no longer! In JavaScript we
can listen to keyboard and mouse events and react to them! Basically the
computer knows when you clack on keys or move the mouse and do cool stuff when
you do!

This is the start to building a fully interactive UI, like the one you're using
to read and code on!

#### Keyboard Input

Try using WASD to make sooo many copies of our good frind, the square.

<Previewer root="/experiment/d2/a3/player.html" paths={["/experiment/d2/a3/player.js"]} />

#### Mouse Input

Try moving around the mouse! Fancy, I know!

<Previewer root="/experiment/d2/a3/parallax.html" paths={["/experiment/d2/a3/parallax.js"]} />

## Day 3: Vectors and Objects!

Today we get to learn about what makes every video game possible: vectors and
objects.

### Lesson 1: Vectors (45 mins)

#### Why Learn Vectors?

Vectors are used constantly in video games and other art to define motion for
characters including rotation, position, and change in motion over time,
[raytracing](https://youtu.be/frLwRLS_ZR0) to simulate realistic lighting,
particle simulations, fancy graphics, anything involving graphics, and more!

> note Additional (longer) Resources!
>
> A deeper dive into vectors specifically applied to video game design!
>
> [Vectors & Dot Product • Math for Game Devs [Part 1]](https://youtu.be/MOYiVLEnhrw)
>
> Also A [deeper dive into raytracing](https://youtu.be/gsZiJeaMO48) specifically
> for real time rendering meaning all the calculations must happen every 16-4
> milliseconds (that's 1/1000 of a second!). I strongly recommend watching the
> first video before watching the second video on ray tracing.

Here's an example which shows how to represent motion using vectors:
<Previewer root="/experiment/d3/l1/motion.html" paths={["/experiment/d3/l1/motion.js"]} />

Playing around with the demo above should give you an intuitive feel for vectors.

The dot's position (represented with the black line), velocity
(represented with the red line), and acceleration (represented with the blue line),
are controlled with the WASD keys depending on which mode is active. You can switch
modes with the spacebar.

A few things to try:

- Try setting the velocity to a low value by tapping the 'w' key while on 'velocity'
  mode and then "fight" the velocity with your position by holding the "s" key while
  on the 'position' mode.
  - Similarly try setting the acceleration to a low value and then
    "fight" the acceleration with your velocity.
- Try to define position, velocity, and acceleration.
- Think about how the relationship between position and velocity is similar
  to the relationship between velocity and acceleration.
- Think of game ideas you could make using position, velocity, and
  acceleration as player-controlled values.

### Lesson 2: Classes (15 mins)

Classes are like a blueprint for making objects. Objects are just fancy clusters
of the same old variables you're used to. Once we have the blueprint for one dot
we can make 2, or 3, or 100, or 1000 or however many we want.

That way we can make millions of dots!
Muhahahaha!

We'll start with two though.

In this case, we're clustering together
our `position`, `velocity`, `acceleration`, and `mode` variables into one class
which includes the functions we made that use those four variables like `draw`
and `updateMotion` along with the helper functions that help us draw a dot and
update a dot's motion.

We'll also cluster controls into a class so that we can have one user use
WASD and Q to control their dot while the other user uses IJKL and O to control
theirs. That class is a little easier to write because all we need to know is
which keys we'd like to associate with `up`, `down`, `left`, and `right` along
with a way to check if they're pressed:

```js
class Controls {
  constructor(up, left, down, right, toggle) {
    this.up = up
    this.left = left
    this.down = down
    this.right = right
    this.toggle = toggle
  }
  isUp() {
    return keyIsDown(this.up)
  }
  isLeft() {
    return keyIsDown(this.left)
  }
  isDown() {
    return keyIsDown(this.down)
  }
  isRight() {
    return keyIsDown(this.right)
  }
}
```

Then to create a control scheme it's just one function call with the fancy `new`
keyword next to it because we're creating some `new` controls.

```js
const W = 87
const A = 65
const S = 83
const D = 68
const Q = 81

const WASDQ = {
  up: W,
  left: A,
  down: S,
  right: D,
  toggle: Q
}

new Controls(
  WASDQ.up,
  WASDQ.left,
  WASDQ.down,
  WASDQ.right,
  WASDQ.toggle
)
```

Now onto the `Dot` class:

```js
class Dot {
  position
  velocity
  acceleration
  motion
  constructor(controls) {
    // we initiate our variables like when we had one dot
    // so that the dot starts still in the top left corner
    this.position = createVector(0, 0)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.motion = 0
    // we assume controls is a Controls object created by doing
    // new Controls(...)
    this.controls = controls
  }
  // helper function for updateMotion()
  getVectorBeingChanged() {
    switch (this.motion) {
      case 0:
        return this.position
      case 1:
        return this.velocity
      case 2:
        return this.acceleration
    }
  }
  // updates motion
  // relies on the Controls class methods like isLeft, isRight, etc.
  // Also does vector math to figure out the updated position, velocity, and
  // acceleration for the dot.
  updateMotion() {
    const vector = this.getVectorBeingChanged()
    const deltaVector = createVector(0, 0)
    const amount = 0.1 ** (1 * this.motion)
    if (this.controls.isLeft()) {
      deltaVector.x -= amount
    }
    if (this.controls.isRight()) {
      deltaVector.x += amount
    }
    if (this.controls.isUp()) {
      deltaVector.y -= amount
    }
    if (this.controls.isDown()) {
      deltaVector.y += amount
    }
    vector.add(deltaVector)

    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.keepInBounds()
  }
  // Maybe toggle motion checks whether the toggle key is the one that was
  // most recently pressed. If so, it calls toggleMotion to change the motion
  // vector that gets changed.
  maybeToggleMotion() {
    if (this.controls.toggle === keyCode) {
      this.toggleMotion()
    }
  }
  // helper for maybeToggleMotion
  toggleMotion() {
    this.motion = (this.motion + 1) % 3
  }

  // helper for updateMotion: keeps the dot on the screen.
  // Resets velocity and acceleration along with position to
  // prevent weird glitchy behavior where you get trapped against a wall.
  keepInBounds() {
    if (this.position.x < 0) {
      this.position.x = 0
      this.velocity.x = 0
      this.acceleration.x = 0
    }
    if (this.position.x > width) {
      this.position.x = width
      this.velocity.x = 0
      this.acceleration.x = 0
    }
    if (this.position.y < 0) {
      this.position.y = 0
      this.velocity.y = 0
      this.acceleration.y = 0
    }
    if (this.position.y > height) {
      this.position.y = height
      this.velocity.y = 0
      this.acceleration.y = 0
    }
  }

  // helper for draw()
  getMotionAsText() {
    switch (this.motion) {
      case 0:
        return 'position'
      case 1:
        return 'velocity' // first derivative - a preview of college math
      case 2:
        return 'acceleration' // second derivative
    }
  }

  // uses the variables in the class to draw out the dot along with the various
  // vector variables inside the class and the current motion mode.
  draw() {
    fill(0)
    ellipse(this.position.x, this.position.y, 10, 10)
    // draw lines to show the vectors
    drawVector(createVector(0, 0), this.position, 'black', 0)
    drawVector(this.position, this.velocity, 'red', 1)
    drawVector(this.position, this.acceleration, 'blue', 2)
    stroke(0)
    text(this.getMotionAsText(), this.position.x, this.position.y)
  }
}
```

<Previewer root="/experiment/d3/l2/dots.html" paths={["/experiment/d3/l2/dots.js"]} />

> try Try
>
> Try changing the default position of the dots so that they start somewhere other
> than the top left! For an extra challenge, see if you can get them to start in the
> center of the screen.
>
> Try adding another mode or two to the dots! Maybe make an AI mode which chases the other
> dot around or a gravity mode which sets acceleration to always be negative and then
> lets you try to "fight" against the gravity by changing the acceleration with WASD.

## Day 4: Move!

### Activity 1: Dinosaur Game Clone (60 mins)

This activity is challenging! I want you to try each class on your own for 5 minutes.
I'll start doing a code along in 5 minutes. If you feel confident feel free to
ignore the code along and just get to coding yourself!

#### Player Class

Make a player controller for a P5.js rectangle with a player class that lets the player jump.
Also have a drawn function like we learned yesterday. The player should only move up and down,
not left and right.

> tip
>
> A jump can be performed by setting velocity to be a high value while having
> acceleration be negative. Then when you hit the bottom of the screen set both velocity
> and acceleration to 0.

#### Cactus/Spike class

Make a cactus class that draws a cactus and moves to the left. Have 2-3 cacti that move at different speeds.

> tip
>
> You can reuse cacti by teleporting cacti which they reach the far left of the screen
> back to the far right of the screen.

#### Game Loop

##### Points

When a cactus gets to the other side of the screen the player should get a point for successfully dodging the cactus. For an extra challenge, make the player get the point as soon as the cactus
passes the player.

> tip
>
> You can use a `this` variable like we did for the 1 dot example from yesterday.

##### Collision Detection/Game Over

Make a collision detection function that checks if the player is touching the cactus. If the player is touching the cactus, the game should end.

> ask
>
> How can you tell when two rectangles intersect?
> Try drawing this out on paper first!

> try Try
>
> Try making an end screen rather than just making the game stop running, complete
> with showing your total score and maybe even your high score!

## Day 5: Your Turn!

### Draft experiment (5 mins)

Here's some ideas of projects you could make!

- A drawing app! Track the mouse using
  [mouseX](https://p5js.org/reference/#/p5/mouseX) and
  [mouseY](https://p5js.org/reference/#/p5/mouseY) and only draw the background
  inside of the setup function. That way you can draw a circle wherever the
  mouse is on each draw frame.
  - Additional challenges:
    - Only draw circles when
      [mouseIsPressed](https://p5js.org/reference/#/p5/mouseIsPressed)
    - Let the user select different colors by typing keys on the keyboard.
- Another game! Maybe a jetpack game where you collect coins (yellow colored circles)?
  Maybe something else?
- Click the button challenge! Teleport a button around the screen and see how
  many clicks someone can make in 3600 draw calls. After 3600 draw calls, show
  the user an end screen! (3600 draw calls is around 60 seconds).
  - It shouldn't be too hard to figure out when a point will be inside of a
    rectangle after doing the harder version of figuring out when two rectangles
    are intersecting from yesterday.
- Anything else you can think of!
  - I'll try to help everyone get progress on their projects as much as I can!
  - Remember! The [P5.js docs](https://p5js.org/reference/) are your friend!

> important Warning
>
> Make sure to limit the scope of the project! You'll only have 40 minutes to
> make the project, so be sure to get the basic functionality down before focusing
> on the smaller less important details.

### Make project (40 mins)

Code up the project!

> tip
>
> Ask for help when you get stuck! We are here to help!

### Share/present projects (15 mins)

Share what you've made!

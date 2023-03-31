---
title: Animate
color: green
---

<script>
  import Previewer from "$lib/Previewer.svelte"
</script>

# Animate

## Day 1: Overview of HTML + CSS

We will set up our environments, go over what html and css are used
for, learn the structure of an XML language, and create our first
two sites.

| Lesson/Activity               | Time    |
| ----------------------------- | ------- |
| Lesson 1: HTML vs CSS         | 20 mins |
| Activity 1: Setup             | 20 mins |
| Activity 2: Hello World!      | 10 mins |
| Activity 3: Poetry (optional) | 15 mins |
| Wrap Up                       | 5 mins  |

### Lesson 1: HTML vs CSS (15 mins)

> tip
>
> Try disabling CSS and JavaScript in your browser to see what CSS, HTML, and JavaScript do. JavaScript can be disabled through browser settings in all browsers and CSS can be disabled in Firefox and Safari with the developer tools.

> important
>
> Some examples might seem really long or confusing! Don't be afraid to ask questions about any of the code in the examples.

#### HTML/XML

HTML is an XML markup language which can be used to make titles,
headers, links, images, lists, tables, and style text. XML is a
general format which is used for many things, but
which was invented for HTML.

XML consists of elements which have an opening tag (`<tagName>`) and a closing
tag (`</tagName>`). Elements can contain other elements and text:

> ask
>
> What do you think the `<strong>...</strong>` HTML element does?

<Previewer root="/animate/d1/l1/bold-paragraph.html"/>

> ask
>
> Why do you think that all of the text is on one line instead of being on four lines?
>
> <details>
>   <summary>Answer</summary>
>
> The browser automatically removes all of the extra whitespace (spaces, tabs, and newlines) between elements and text. This is so that you can format your code nicely without having to worry about the format of your code showing up on the actual website. Later we'll go over how to have multiple lines render in the browser!
>
> </details>

Elements can have attributes as well:

```html
<img src="puppy.png" alt="a happy puppy" />
```

> ask
>
> Write the above `<img />` tag on a whiteboard or on a piece of paper. Can you label the tag name, the two attribute names, and the two attribute values?
>
> <details>
> <summary>Answer</summary>
>
> Tag name: `img`
>
> Attribute names: `src`, `alt`
>
> Attribute values: `"puppy.png"`, `"a happy puppy"`
>
> </details>

> note Note
>
> We will cover what [img tags](#adding-a-meme-10-mins) do and how they work later in the lesson.

#### Opening/Closing Tags

A tag in HTML is what is surrounded by the angle brackets: `<` `>` (aka the greater than/less than symbols)

In the following example, `<p>` is the opening tag, and `</p>` is the closing tag. The opening tag, closing tag, and what is in between make up one HTML element. There is one HTML element in this example:

```html file=<rootDir>/animate/d1/l1/opening-closing.html

```

<Previewer root="/animate/d1/l1/opening-closing.html"></Previewer>

> ask
>
> What is the difference between opening and closing tags?
>
> <details>
>   <summary>Answer</summary>
>
> Closing tags have a forward slash - `/` - right after the opening angle bracket: `</`
>
> </details>

> tip
>
> You can type in the tag name (`p`, `h1`, etc) and then hit <kbd>Tab</kbd> to automatically create an opening tag and a closing tag. Then if you hit <kbd>Enter</kbd> right after, it will automatically create an indented line in between the opening tag and the closing tag. Try it below!
>
> <Previewer root="/animate/d1/l1/blank.html"/>

#### Attributes

Attributes are used to give information about the element, such as formatting and metadata. The structure of an attribute is `attribute-name="attribute-value"`. You can put as many attributes as you want inside of the opening tag, just make sure to put a space in between each one. The first item inside the angle brackets should always be the tag name (ex. `p`, `h1`, etc) which can then be followed by attributes (ex. `class`, `src`, `href`, etc). Here is an example:

<Previewer root="/animate/d1/l1/attributes.html" />

> important
>
> It is strongly recommended to always put quotes around the attribute value! You technically don't need to if you only use letters (a-z/A-Z), numbers (0-9), periods (.), and hyphens (-) in the attribute value, but if you don't usually put quotes you'll forget to when you have an attribute which contains a character that is not a letter, a number, a period, or a hyphen. This is one of the most common mistakes I see!

#### Style Attribute

The style attribute lets you style your HTML element with CSS to make it look more fancy. Here's an example:

<Previewer root="/animate/d1/l1/fancy-style.html" />

The style tag is a list of css properties and property values separated by semicolons.

> important
>
> You don't _need_ to put a semicolon at the end of the last property, but you **should** because otherwise you will forget to and wonder why your CSS isn't working. Please just always put a semicolon after each css declaration.

```html file=<rootDir>/animate/d1/l1/css-property.html

```

#### CSS

CSS stands for <br />
**C**ascading <br />
**S**tyle <br />
**S**heets

CSS lets you use CSS selectors to indicate to the browser which element to apply styling within the curly brackets to. You can think of the browser copying and pasting what is in between the curly brackets into the specified element's `style=` attribute.

There are a few different selectors when it comes to css:

| Selector  | Description                                                                                       | Example  |
| --------- | ------------------------------------------------------------------------------------------------- | -------- |
| `element` | Selects all elements of the given HTML tag like the body element (`<body>...</body>`) for example | `body`   |
| `#id`     | Selects the element with the given id like `<div id="lolz">...</div>`                             | `#lolz`  |
| `.class`  | Selects all elements with the given class like `<div class="fancy"> ... </div>`                   | `.fancy` |

You can either put css inline with a `<style>` HTML element, put CSS for a single element in the `style=` HTML attribute, or put CSS in a separate file with the `.css` file extension.

There are even more selectors than the ones above, some of which we will cover in <a href="../develop" rel="external" data-color='purple' class='accent-color'>Level 3</a>!

> tip
>
> The element in between the opening head tag (`<head>`) on line 1 and the closing head tag (`</head>`) on line 3 is called a `<link />` tag. It is used to tell the browser which file your css rules are in. In the example below they're located in `style.css`. Go ahead and click on the `style.css` tab to see and try editing the CSS rules!

<Previewer root="/animate/d1/l1/css-example.html" paths={["/animate/d1/l1/style.css"]} ></Previewer>

> ask
>
> What happens if you change the font style of the `.asdf` class to be `italicized` instead of `bold` or if you change the color of `.any-class-name` to be one of [these colors](https://147colors.com/) instead of `darkred`?

### Activity 1: Setup (15 mins)

Set up Replit or VS Code, depending on instructor preference. If using Replit, have students always start by deleting everything inside the `index.html` file and deleting the `style.css` and `script.js` files as well.

This is because Replit's boilerplate code isn't standard and can lead to problems like a horizontal scrollbar and a title of "replit".

### Activity 2: Hello World! (10 mins)

Introduction to HTML with a Hello World website, complete with a header and a paragraph.

> tip
>
> You can enter an exclamation mark (<kbd>!</kbd>) followed by <kbd>Tab</kbd> to auto-complete the HTML boilerplate:
>
> ```html file=<rootDir>/animate/d1/a2/starter.html
>
> ```
>
> Try it below!
>
> <Previewer root="/animate/d1/l1/blank.html"/>

> important
>
> Make sure to change the inside of the `<title>` tag.

> tip
>
> You can put a `<style>` element inside the `<head>` element to style your CSS.

<Previewer root="/animate/d1/a2/index.html"></Previewer>

### Activity 3: Poetry (15 mins)

We are going to make two poems: first we have "Echo," a series of <code>h</code> tags which get smaller, followed by any poem that has at least three lines! If the student can't think of one, there's always:

> default
>
> roses are red<br />
> violets are blue<br />
> there's always a programmer<br />
> that's better than you

> tip
>
> The `<br>` tag adds a line break.

<Previewer root="/animate/d1/a3/index.html"></Previewer>

## Day 2

| Lesson/Activity                                    | Time    |
| -------------------------------------------------- | ------- |
| Activity 1: Make a Logo!                           | 30 mins |
| Lesson 1: Adding a Meme!                           | 10 mins |
| Activity 2: Add your logo to a website! (Optional) | 15 mins |
| Wrap Up                                            | 5 mins  |

### Activity 1: Make a Logo! (30 mins)

Make a logo using basic shapes, css, and text.

> important
>
> Start with this basic template, including the `xmlns="http://www.w3.org/2000/svg"` attribute:
>
> ```html
> <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
>   <circle cx="50" cy="50" r="50"></circle>
> </svg>
> ```
>
> Otherwise the browser will show something like this: ![Text which reads, This XML file does not appear to have any style information associated with it. The document tree is shown below.](./animate/d2/forgot-xmlns.png)

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50"></circle>
</svg>

Then add text to it:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" r="50" cy="50" style="fill: black"></circle>
  <text x="50" y="50" style="fill: white; font-size: 15px">Text</text>
</svg>
```

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" r="50" cy="50" style="fill: black"></circle>
  <text x="50" y="50" style="fill: white; font-size: 15px">
    Text
  </text>
</svg>

<p>
Then change the font with a style tag. Note how I moved the styles for the text element that was in <code>style=</code> into the newly created style tag. A good rule is generally if you have more than 2 CSS properties, it's time to put the CSS into a style tag:
</p>

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" r="50" cy="50" style="fill: black"></circle>
  <text x="50" y="50">Text</text>
  <style>
    text {
      font-size: 15px;
      font-family: cursive;
      fill: white;
    }
  </style>
</svg>
```

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" r="50" cy="50" style="fill: black"></circle>
  <text id="cursive" x="50" y="50" style="font-size: 15px; font-family: cursive; fill: white;">Text</text>
</svg>

You can also use CSS transforms to rotate the text and more!

```html file=<rootDir>/animate/d2/a1/logo.svg

```

![Graphic design is my passion](./animate/d2/a1/logo.svg)

<Previewer root="/animate/d2/a1/logo.svg" paths={["/animate/d2/a1/logo.svg"]} ></Previewer>

### Lesson 1: Adding a Meme! (10 mins)

I just added an image with the `<img>` tag, moved the CSS to a new file, and added some CSS for the image.

```html
<img src="/car.jpeg" alt="Car salesman standing in front of car." />
```

> tip
>
> Make sure your image is in the same folder as your HTML file for the image to show up! If you instead want to make an images folder and put your images in there, make sure to set the src to start with `/images/` like `/images/car.jpeg`

<Previewer root="/animate/d2/l1/index.html" paths={["/animate/d2/l1/index.html", "/animate/d2/l1/style.css", "/animate/d2/l1/car.jpeg"]} ></Previewer>

### Activity 2: Add your logo to a website! (15 mins)

Add an index.html file in whatever directory you have your svg file and use an `<img />` tag to put that image on the html page.

<Previewer root="/animate/d2/a2/index.html" paths={["/animate/d2/a2/index.html", "/animate/d2/a2/logo.svg"]} ></Previewer>

## Day 3

| Lesson/Activity                                 | Time    |
| ----------------------------------------------- | ------- |
| Activity 1: Multiple Pages!                     | 15 mins |
| Activity 2: CSS Animations + External CSS       | 30 mins |
| Activity 3: Experiment More with CSS (optional) | 10 mins |
| Wrap up                                         | 5 mins  |

### Activity 1: Multiple Pages! (15 mins)

Make a multi-page website! Complete with `<a>` links to go in between the two pages. See line 21 in `index.html` and line 22 in `second.html` for an example of how to use the `<a>` tag.

> note Note
>
> We use the `<a>` tag instead of the `<link>` tag for links in between pages because in the older days of the internet the `<a>` tag had another use as an "anchor" to anchor one page to another. This other use of the `<a>` tag isn't used today, but knowing that `a` stands for "anchor" might help you remember that the `<a>` tag is for "anchoring" pages together!

<Previewer root="/animate/d3/a1/index.html" paths={["/animate/d3/a1/index.html", "/animate/d3/a1/second.html"]} ></Previewer>

### Activity 2: CSS Animations + External CSS (30 mins)

Create a simple spooky CSS animation. In `style.css` we animage the `opacity` css property

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

<Previewer root="/animate/d3/a2/index.html" paths={["/animate/d3/a2/index.html", "/animate/d3/a2/style.css"]} ></Previewer>

### Activity 3: Experiment More with CSS (15 mins)

Look at websites around the web and when you find a design you like, inspect that website's CSS code. (right click + Inspect)

Try to implement that design on your own in a new Replit!

> tip
>
> Don't be afraid to ask questions of your instructors, especially in this activity. Obviously the entire internet will have CSS that we have not covered in this class so it makes sense that you'd have questions!

## Day 4

| Lesson/Activity                                | Time    |
| ---------------------------------------------- | ------- |
| Activity 1: Animate an SVG                     | 20 mins |
| Activity 2: Animate Multiple Shapes (optional) | 10 mins |
| Activity 3: Create Your Own Animation          | 15 mins |
| Wrap up                                        | 5 mins  |

### Activity 1: Animate an SVG (20 mins)

Start with this template:

<Previewer root="/animate/d4/a1/rect-template.svg" />

> tip
>
> Try changing the `x`, `y`, `width`, and `height` HTML attributes to see how they change the rectangle! See if you can center the rectangle in the 100 by 100 viewbox.
>
> <details> 
> <summary>Answer</summary>
>
> Set `x` and `y` to be 25.
>
> </details>
> Then add an animation to it:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="25" y="25" width="50" height="50"></rect>
  <style>
    @keyframes bounce {
      0% {
        y: 25;
      }

      100% {
        y: 50;
      }
    }

    #rect {
      animation: bounce 2s ease-in-out infinite alternate;
    }
  </style>
</svg>
```

![bouncing svg](./animate/d4/a1/bounce.svg)
<Previewer root="/animate/d4/a1/bounce.svg" paths={["/animate/d4/a1/bounce.svg"]} ></Previewer>

### Activity 2: Animate Multiple Shapes (10 mins)

<Previewer root="/animate/d4/a2/circling-circles.svg"/>

### Activity 3: Create Your Own Animation (15 mins)

Create your very own animation!

You can find more shapes and how to make them here: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#basic_shapes)

Of course you can also use the two shapes we already learned, `rect` and `circle`, to do plenty of very very awesome animations.

## Day 5:

| Lesson/Activity                      | Time    |
| ------------------------------------ | ------- |
| Activity 1: Make Two More Animations | 30 mins |
| Activity 2: Make a Homepage          | 15 mins |
| Activity 3: Present (15 mins)        | 15 mins |

### Activity 1: Make Two More Animations (30 mins)

<Previewer root="/animate/d5/a1/ex1.svg"></Previewer>

<Previewer root="/animate/d5/a1/ex2.svg"></Previewer>

### Activity 2: Make a Homepage (15 mins)

<Previewer root="/animate/d5/a2/index.html" paths={["/animate/d5/a2/style.css"]}></Previewer>

### Activity 3: Present (15 mins)

Present your projects with the class!

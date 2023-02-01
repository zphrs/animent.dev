# Animent.dev - Learn web development in three stages

Made using [sveltekit](https://kit.svelte.dev)

## Editing Curriculum

The content for each level exists in two places: [/src/pages](./src/pages/) and [/static](./static/)

### Layout

The `pages` directory has the markdown files which is all the text, tables, and layout of each section: [animate](./src/pages/animate.md), [experiment](./src/pages/experiment.md), and [develop](./src/pages/develop.md).

### Code Examples

The `static` directory has the example code files which is organized by level first (animate, experiment, develop), then by day, and lastly by activity/lesson. Activity folders are marked by an `a` followed by a number while lesson folders are marked by an `l` followed by a number. Since not all activities/lessons have examples, some activities/lessons don't have folders in the `static` directory.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

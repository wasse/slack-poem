import React from 'react'
import {
   configure,
   getStorybook,
   setAddon,
   addDecorator,
   addParameters,
} from '@storybook/react'
// import centered from '@storybook/addon-centered/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withTests } from '@storybook/addon-jest'
import results from '../src/.jest-test-results.json'
import 'bulma'
import '../src/assets/styles.scss'

import { setConsoleOptions, withConsole } from '@storybook/addon-console'
import StoryRouter from 'storybook-react-router'

// theme for storybook ui. adds parameters globally in stories
import crfTheme from './crfTheme'

addParameters({
   options: {
      theme: crfTheme,
   },
})

// Decorators:
addDecorator(StoryRouter())

addDecorator(
   withTests({
      results,
   })
)

addDecorator(withKnobs)

// Centers the components originating from features, components and assets folders in the storybook workspace.
// addDecorator((story, storyInfo) => {
//   if (
//     storyInfo.kind.toLowerCase().startsWith('features') ||
//     storyInfo.kind.toLowerCase().startsWith('components') ||
//     storyInfo.kind.toLowerCase().startsWith('assets')
//   ) {
//     return centered(story, storyInfo);
//   }
//   return <div style={{ padding: 20 }}>{story()}</div>;
// });

// addDecorator(centered)

// Settings for addon-console
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
const panelExclude = setConsoleOptions({}).panelExclude
setConsoleOptions({
   panelExclude: [],
})

// Loads the stories from the files in stories folder. They must have stories in their name and file ending should be jsx
function loadStories() {
   const req = require.context('../src/storybook', true, /\.stories\.jsx$/)
   req.keys().forEach(filename => req(filename))
}

// serializeStories(getStorybook);
configure(loadStories, module)

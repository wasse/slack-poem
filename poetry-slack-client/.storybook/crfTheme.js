import { create, darken } from '@storybook/theming'

export default create({
   brandTitle: 'Poetry-Slack component library',
   // colorSecondary: "#faa541",
   // appContentBg: 'white',
   // appContentBg: '#303030',
   base: 'light',
   textColor: 'black',
   textInverseColor: 'rgba(255, 255, 255, 0.9)',
   colorPrimary: 'black',
   colorSecondary: 'gray',
})

/**
 *These are the default settings.
 *
 * import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});
 *
 *
 *  */

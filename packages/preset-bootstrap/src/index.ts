import { makeStyles, makeTheme } from '@theme-ui/css/utils'
import { generateBorderWidths, generateRadii } from './borders'
import { generateColors } from './colors'
import {
  generateFonts,
  generateFontSizes,
  generateFontWeights,
  generateLineHeights,
} from './typography'

// $ spacers
export const space = [0, 0.25, 0.5, 1, 1.5, 3].map((n) => n + 'rem')

export const breakpoints = ['576px', '768px', '992px', '1200px']

export const sizes = {
  // container widths
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
}

export const shadows = {
  default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
  sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
  lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
}

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 0,
  mb: 2,
}
const display = {
  fontWeight: 'display',
  lineHeight: 'heading',
}

// variants
const text = {
  heading,
  display,
}

export const styles = makeStyles({
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  p: {
    mb: 3,
    lineHeight: 'body',
  },
  h1: {
    ...heading,
    fontSize: 7,
  },
  h2: {
    ...heading,
    fontSize: 6,
  },
  h3: {
    ...heading,
    fontSize: 5,
  },
  h4: {
    ...heading,
    fontSize: 4,
  },
  h5: {
    ...heading,
    fontSize: 3,
  },
  h6: {
    ...heading,
    fontSize: 2,
  },
  blockquote: {
    fontSize: 3,
    mb: 3,
  },
  table: {
    // todo
    width: '100%',
    marginBottom: 3,
    color: 'gray.9',
    borderCollapse: 'collapse',
  },
  th: {
    verticalAlign: 'bottom',
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.3',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray.3',
    padding: '.75rem',
    textAlign: 'inherit',
  },
  td: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray.3',
    verticalAlign: 'top',
    padding: '.75rem',
  },
  inlineCode: {
    color: 'pink',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
})

export const bootstrap = makeTheme({
  borderWidths: generateBorderWidths(),
  radii: generateRadii(),
  colors: generateColors(),
  fonts: generateFonts(),
  fontSizes: generateFontSizes(),
  fontWeights: generateFontWeights(),
  lineHeights: generateLineHeights(),
  breakpoints,
  space,
  sizes,
  shadows,
  text,
  styles,
})

export default bootstrap

import { makeStyles, makeTheme } from '@theme-ui/css/utils'
import { generateBorders, generateBorderWidths, generateRadii } from './borders'
import { generateColors } from './colors'
import { generateOpacities } from './opacities'
import { generateShadows } from './shadows'
import { generateSizes } from './sizes'
import {
  generateFonts,
  generateFontSizes,
  generateFontWeights,
  generateLineHeights,
} from './typography'

// $ spacers
export const space = [0, 0.25, 0.5, 1, 1.5, 3].map((n) => n + 'rem')

export const breakpoints = ['576px', '768px', '992px', '1200px']

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

const borderWidths = generateBorderWidths()
const colors = generateColors()
export const bootstrap = makeTheme({
  borderWidths,
  borders: generateBorders(borderWidths, colors.grays[3]),
  radii: generateRadii(),
  colors,
  opacities: generateOpacities(),
  shadows: generateShadows(colors.black),
  sizes: generateSizes(),
  fonts: generateFonts(),
  fontSizes: generateFontSizes(),
  fontWeights: generateFontWeights(),
  lineHeights: generateLineHeights(),
  breakpoints,
  space,
  text,
  styles,
})

export default bootstrap

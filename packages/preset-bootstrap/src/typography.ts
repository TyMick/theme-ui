export const fonts = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  heading: 'inherit',
  monospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  // NOTE(@mxstbr): TypeScript does not let us do the self-references below if we don't provide "default" values
  sans: '',
}
fonts.sans = fonts.body

export const fontWeights = {
  body: 400,
  heading: 500,
  bold: 700,
  light: 300,
  // NOTE(@mxstbr): TypeScript does not let us do the self-references below if we don't provide "default" values
  normal: 0,
  display: 0,
}
fontWeights.normal = fontWeights.body
fontWeights.display = fontWeights.light

export const fontSizes: Array<string> & {
  lead?: string
} = [
  '0.75rem', // '80%',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3.5rem',
  '4.5rem',
  '5.5rem',
  '6rem',
]
fontSizes.lead = fontSizes[3]

export const lineHeights = {
  body: 1.5,
  heading: 1.2,
}

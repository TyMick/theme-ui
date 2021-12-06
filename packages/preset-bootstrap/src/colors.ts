import { rgba, shade, tint } from 'polished'

const white = '#fff'
const grays = [
  white, // 0 index
  '#f8f9fa',
  '#e9ecef',
  '#dee2e6',
  '#ced4da',
  '#adb5bd',
  '#6c757d',
  '#495057',
  '#343a40',
  '#212529',
]
const black = '#000'

// $colors
const baseColors = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white,
  gray: grays[6],
  grayDark: grays[8],
}

// $theme-colors
const themeColors = {
  primary: baseColors.blue,
  secondary: grays[6],
  success: baseColors.green,
  info: baseColors.cyan,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: grays[1],
  dark: grays[9],
}

const colorShades = {
  blues: generateColorShades(baseColors.blue),
  indigos: generateColorShades(baseColors.indigo),
  purples: generateColorShades(baseColors.purple),
  pinks: generateColorShades(baseColors.pink),
  reds: generateColorShades(baseColors.red),
  oranges: generateColorShades(baseColors.orange),
  yellows: generateColorShades(baseColors.yellow),
  greens: generateColorShades(baseColors.green),
  teals: generateColorShades(baseColors.teal),
  cyans: generateColorShades(baseColors.cyan),
}

const themeUiColors = {
  text: grays[9], // $body-color
  background: baseColors.white, // $body-bg
  highlight: rgba(themeColors.primary, 0.25), // $input-btn-focus-color
}

export const colors = {
  grays,
  black,
  ...baseColors,
  ...themeColors,
  ...colorShades,
  ...themeUiColors,
}

function generateColorShades(color: string) {
  return [
    white, // 0 index
    tint(0.8, color),
    tint(0.6, color),
    tint(0.4, color),
    tint(0.2, color),
    color,
    shade(0.2, color),
    shade(0.4, color),
    shade(0.6, color),
    shade(0.8, color),
  ]
}

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

const themeUiColors = {
  text: grays[9],
  background: baseColors.white,
  muted: grays[3],
  textMuted: grays[6],
}

export const colors = {
  grays,
  black,
  ...baseColors,
  ...themeColors,
  ...themeUiColors,
}

export const baseColors = {
  white: '#fff',
  black: '#000',
  gray: [
    '#fff', // 0 index
    '#f8f9fa',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#6c757d', // gray[6] is Bootstrap's primary $gray
    '#495057',
    '#343a40',
    '#212529',
  ],
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
}

export const colors = {
  ...baseColors,
  grayDark: baseColors.gray[8],
  primary: baseColors.blue,
  secondary: baseColors.gray[6],
  success: baseColors.green,
  info: baseColors.cyan,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  text: baseColors.gray[9],
  background: baseColors.white,
  muted: baseColors.gray[3],
  textMuted: baseColors.gray[6],
}

import { ColorModesScale, NestedScale } from '@theme-ui/css'
import * as CSS from 'csstype'
import merge from 'lodash.merge'
import { rgba, shade, tint } from 'polished'

export interface BootstrapColors {
  white: CSS.Property.Color
  grays: NestedScale<CSS.Property.Color>
  black: CSS.Property.Color
  blue: CSS.Property.Color
  indigo: CSS.Property.Color
  purple: CSS.Property.Color
  pink: CSS.Property.Color
  red: CSS.Property.Color
  orange: CSS.Property.Color
  yellow: CSS.Property.Color
  green: CSS.Property.Color
  teal: CSS.Property.Color
  cyan: CSS.Property.Color
  gray: CSS.Property.Color
  grayDark: CSS.Property.Color
  primary: CSS.Property.Color
  secondary: CSS.Property.Color
  success: CSS.Property.Color
  info: CSS.Property.Color
  warning: CSS.Property.Color
  danger: CSS.Property.Color
  light: CSS.Property.Color
  dark: CSS.Property.Color
  blues: NestedScale<CSS.Property.Color>
  indigos: NestedScale<CSS.Property.Color>
  purples: NestedScale<CSS.Property.Color>
  pinks: NestedScale<CSS.Property.Color>
  reds: NestedScale<CSS.Property.Color>
  oranges: NestedScale<CSS.Property.Color>
  yellows: NestedScale<CSS.Property.Color>
  greens: NestedScale<CSS.Property.Color>
  teals: NestedScale<CSS.Property.Color>
  cyans: NestedScale<CSS.Property.Color>
}

export function generateColors(
  overrides: Partial<BootstrapColors & ColorModesScale> = {}
): BootstrapColors & ColorModesScale {
  const white = overrides.white ?? '#fff'
  const grays = merge(
    [
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
    ],
    overrides.grays
  )
  const black = overrides.black ?? '#000'

  // $colors
  const baseColors = {
    blue: overrides.blue ?? '#0d6efd',
    indigo: overrides.indigo ?? '#6610f2',
    purple: overrides.purple ?? '#6f42c1',
    pink: overrides.pink ?? '#d63384',
    red: overrides.red ?? '#dc3545',
    orange: overrides.orange ?? '#fd7e14',
    yellow: overrides.yellow ?? '#ffc107',
    green: overrides.green ?? '#198754',
    teal: overrides.teal ?? '#20c997',
    cyan: overrides.cyan ?? '#0dcaf0',
    white,
    gray: overrides.gray ?? grays[6],
    grayDark: overrides.grayDark ?? grays[8],
  }

  // $theme-colors
  const themeColors = {
    primary: overrides.primary ?? baseColors.blue,
    secondary: overrides.secondary ?? grays[6],
    success: overrides.success ?? baseColors.green,
    info: overrides.info ?? baseColors.cyan,
    warning: overrides.warning ?? baseColors.yellow,
    danger: overrides.danger ?? baseColors.red,
    light: overrides.light ?? grays[1],
    dark: overrides.dark ?? grays[9],
  }

  const colorShades = {
    blues: overrides.blues ?? generateColorShades(baseColors.blue),
    indigos: overrides.indigos ?? generateColorShades(baseColors.indigo),
    purples: overrides.purples ?? generateColorShades(baseColors.purple),
    pinks: overrides.pinks ?? generateColorShades(baseColors.pink),
    reds: overrides.reds ?? generateColorShades(baseColors.red),
    oranges: overrides.oranges ?? generateColorShades(baseColors.orange),
    yellows: overrides.yellows ?? generateColorShades(baseColors.yellow),
    greens: overrides.greens ?? generateColorShades(baseColors.green),
    teals: overrides.teals ?? generateColorShades(baseColors.teal),
    cyans: overrides.cyans ?? generateColorShades(baseColors.cyan),
  }

  const bootstrapColors: BootstrapColors = {
    grays,
    black,
    ...baseColors,
    ...themeColors,
    ...colorShades,
  }

  const themeUiExtras = {
    text: overrides.text ?? grays[9], // $body-color
    background: overrides.background ?? baseColors.white, // $body-bg
    highlight: overrides.highlight ?? rgba(themeColors.primary, 0.25), // $input-btn-focus-color
  }

  return {
    ...overrides,
    ...bootstrapColors,
    ...themeUiExtras,
  } as BootstrapColors & ColorModesScale

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
}

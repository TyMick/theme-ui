import { ScaleDict, TLengthStyledSystem } from '@theme-ui/css'
import * as CSS from 'csstype'
import mapValues from 'lodash.mapvalues'

export interface BootstrapBorderWidths {
  base: CSS.Property.BorderWidth<TLengthStyledSystem>
  1: CSS.Property.BorderWidth<TLengthStyledSystem>
  2: CSS.Property.BorderWidth<TLengthStyledSystem>
  3: CSS.Property.BorderWidth<TLengthStyledSystem>
  4: CSS.Property.BorderWidth<TLengthStyledSystem>
  5: CSS.Property.BorderWidth<TLengthStyledSystem>
}
export function generateBorderWidths(
  overrides: Partial<
    BootstrapBorderWidths &
      ScaleDict<CSS.Property.BorderWidth<TLengthStyledSystem>>
  > = {}
): BootstrapBorderWidths &
  ScaleDict<CSS.Property.BorderWidth<TLengthStyledSystem>> {
  return {
    base: '1px',
    1: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
    5: '5px',
    ...overrides,
  }
}

export interface BootstrapBorders {
  base: CSS.Property.Border<{}>
  0: CSS.Property.Border<{}>
  1: CSS.Property.Border<{}>
  2: CSS.Property.Border<{}>
  3: CSS.Property.Border<{}>
  4: CSS.Property.Border<{}>
  5: CSS.Property.Border<{}>
}
export function generateBorders(
  borderWidths: BootstrapBorderWidths &
    ScaleDict<CSS.Property.BorderWidth<TLengthStyledSystem>>,
  borderColor: CSS.Property.Color,
  overrides: Partial<BootstrapBorders & ScaleDict<CSS.Property.Border<{}>>> = {}
): BootstrapBorders & ScaleDict<CSS.Property.Border<{}>> {
  return {
    0: '0',
    ...mapValues(borderWidths, (width) => `${width} solid ${borderColor}`),
    ...overrides,
  }
}

export interface BootstrapBorderRadii {
  base: CSS.Property.BorderRadius<TLengthStyledSystem>
  sm: CSS.Property.BorderRadius<TLengthStyledSystem>
  lg: CSS.Property.BorderRadius<TLengthStyledSystem>
  pill: CSS.Property.BorderRadius<TLengthStyledSystem>
}
export function generateRadii(
  overrides: Partial<
    BootstrapBorderRadii &
      ScaleDict<CSS.Property.BorderRadius<TLengthStyledSystem>>
  > = {}
): BootstrapBorderRadii &
  ScaleDict<CSS.Property.BorderRadius<TLengthStyledSystem>> {
  return {
    base: '0.25rem',
    sm: '0.2rem',
    lg: '0.3rem',
    pill: '50rem',
    circle: '50%',
    ...overrides,
  }
}

import { ScaleDict, TLengthStyledSystem } from '@theme-ui/css'
import * as CSS from 'csstype'

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
    ...overrides,
  }
}

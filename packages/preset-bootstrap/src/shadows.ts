import { ScaleDict } from '@theme-ui/css'
import * as CSS from 'csstype'
import { rgba } from 'polished'

export interface BootstrapShadows {
  base: CSS.Property.BoxShadow
  sm: CSS.Property.BoxShadow
  lg: CSS.Property.BoxShadow
  inset: CSS.Property.BoxShadow
  none: CSS.Property.BoxShadow
}
export function generateShadows(
  black: CSS.Property.Color,
  overrides: Partial<BootstrapShadows & ScaleDict<CSS.Property.BoxShadow>> = {}
): BootstrapShadows & ScaleDict<CSS.Property.BoxShadow> {
  return {
    base: `0 .5rem 1rem ${rgba(black, 0.15)}`,
    sm: `0 .125rem .25rem ${rgba(black, 0.075)}`,
    lg: `0 1rem 3rem ${rgba(black, 0.175)}`,
    inset: `inset 0 1px 2px ${rgba(black, 0.075)}`,
    none: 'none',
    ...overrides,
  }
}

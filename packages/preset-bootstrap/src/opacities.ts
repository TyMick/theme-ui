import { ScaleDict } from '@theme-ui/css'
import * as CSS from 'csstype'

export interface BootstrapOpacities {
  0: CSS.Property.Opacity
  10: CSS.Property.Opacity
  25: CSS.Property.Opacity
  50: CSS.Property.Opacity
  75: CSS.Property.Opacity
  100: CSS.Property.Opacity
}
export function generateOpacities(
  overrides: Partial<BootstrapOpacities & ScaleDict<CSS.Property.Opacity>> = {}
): BootstrapOpacities & ScaleDict<CSS.Property.Opacity> {
  return {
    0: '0',
    10: '0.1',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
    ...overrides,
  }
}

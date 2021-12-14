import { ScaleDict } from '@theme-ui/css'
import * as CSS from 'csstype'

export interface BootstrapContainerWidths {
  sm: CSS.Property.Height<{}> | CSS.Property.Width<{}>
  md: CSS.Property.Height<{}> | CSS.Property.Width<{}>
  lg: CSS.Property.Height<{}> | CSS.Property.Width<{}>
  xl: CSS.Property.Height<{}> | CSS.Property.Width<{}>
  xxl: CSS.Property.Height<{}> | CSS.Property.Width<{}>
}
export function generateSizes(
  overrides: Partial<
    BootstrapContainerWidths &
      ScaleDict<CSS.Property.Height<{}> | CSS.Property.Width<{}>>
  > = {}
): BootstrapContainerWidths &
  ScaleDict<CSS.Property.Height<{}> | CSS.Property.Width<{}>> {
  return {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px',
    ...overrides,
  }
}

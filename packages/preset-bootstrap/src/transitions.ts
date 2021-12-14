import { ScaleDict } from '@theme-ui/css'
import * as CSS from 'csstype'

export interface BootstrapTransitions {
  base: CSS.Property.Transition
  fade: CSS.Property.Transition
  collapse: CSS.Property.Transition
  collapseWidth: CSS.Property.Transition
}
export function generateTransitions(
  overrides: Partial<
    BootstrapTransitions & ScaleDict<CSS.Property.Transition>
  > = {}
): BootstrapTransitions & ScaleDict<CSS.Property.Transition> {
  return {
    base: 'all .2s ease-in-out',
    fade: 'opacity .15s linear',
    collapse: 'height .35s ease',
    collapseWidth: 'width .35s ease',
    ...overrides,
  }
}

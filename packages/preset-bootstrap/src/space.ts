import { ScaleDict } from '@theme-ui/css'
import * as CSS from 'csstype'
import { multiplyWithUnit } from './utils'

export interface BootstrapSpacers {
  base: CSS.Property.Margin<number | string>
  0: CSS.Property.Margin<number | string>
  1: CSS.Property.Margin<number | string>
  2: CSS.Property.Margin<number | string>
  3: CSS.Property.Margin<number | string>
  4: CSS.Property.Margin<number | string>
  5: CSS.Property.Margin<number | string>
  auto: CSS.Property.Margin<number | string>
}
export function generateSpace(
  overrides: Partial<
    BootstrapSpacers & ScaleDict<CSS.Property.Margin<number | string>>
  > = {}
): BootstrapSpacers & ScaleDict<CSS.Property.Margin<number | string>> {
  const base = overrides.base ?? '1rem'
  const bootstrapSpacers: BootstrapSpacers = {
    base,
    0: overrides[0] ?? 0,
    1: overrides[1] ?? multiplyWithUnit(base, 0.25),
    2: overrides[2] ?? multiplyWithUnit(base, 0.5),
    3: overrides[3] ?? base,
    4: overrides[4] ?? multiplyWithUnit(base, 1.5),
    5: overrides[5] ?? multiplyWithUnit(base, 3),
    auto: overrides.auto ?? 'auto',
  }

  return { ...overrides, ...bootstrapSpacers }
}

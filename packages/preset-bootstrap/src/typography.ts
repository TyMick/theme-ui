import { ScaleDict, TLengthStyledSystem } from '@theme-ui/css'
import * as CSS from 'csstype'

export interface BootstrapFonts {
  sansSerif: CSS.Property.FontFamily
  monospace: CSS.Property.FontFamily
}
export function generateFonts(
  overrides: Partial<BootstrapFonts & ScaleDict<CSS.Property.FontFamily>> = {}
): BootstrapFonts & ScaleDict<CSS.Property.FontFamily> {
  const bootstrapFonts: BootstrapFonts = {
    sansSerif:
      overrides.sansSerif ??
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
      overrides.monospace ??
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  }

  const themeUiExtras = {
    body: overrides.body ?? bootstrapFonts.sansSerif,
  }

  return { ...overrides, ...bootstrapFonts, ...themeUiExtras }
}

export interface BootstrapFontWeights {
  lighter: CSS.Property.FontWeight
  light: CSS.Property.FontWeight
  normal: CSS.Property.FontWeight
  bold: CSS.Property.FontWeight
  bolder: CSS.Property.FontWeight
}
export function generateFontWeights(
  overrides: Partial<
    BootstrapFontWeights & ScaleDict<CSS.Property.FontWeight>
  > = {}
): BootstrapFontWeights & ScaleDict<CSS.Property.FontWeight> {
  const normal = overrides.normal ?? 400
  const bold = overrides.bold ?? 700
  const bootstrapFontWeights: BootstrapFontWeights = {
    lighter: overrides.lighter ?? 'lighter',
    light: overrides.light ?? 300,
    normal,
    bold,
    bolder: overrides.bolder ?? 'bolder',
  }

  const themeUiExtras = {
    body: overrides.body ?? bootstrapFontWeights.normal, // $font-weight-base
    heading: overrides.heading ?? 300, // $headings-font-weight
  }

  return { ...overrides, ...bootstrapFontWeights, ...themeUiExtras }
}

export interface BootstrapLineHeights {
  base: CSS.Property.LineHeight<TLengthStyledSystem>
  sm: CSS.Property.LineHeight<TLengthStyledSystem>
  lg: CSS.Property.LineHeight<TLengthStyledSystem>
}
export function generateLineHeights(
  overrides: Partial<
    BootstrapLineHeights &
      ScaleDict<CSS.Property.LineHeight<TLengthStyledSystem>>
  > = {}
): BootstrapLineHeights &
  ScaleDict<CSS.Property.LineHeight<TLengthStyledSystem>> {
  const bootstrapLineHeights: BootstrapLineHeights = {
    base: overrides.base ?? 1.5,
    sm: overrides.sm ?? 1.25,
    lg: overrides.lg ?? 2,
  }

  const themeUiExtras = {
    body: overrides.body ?? bootstrapLineHeights.base,
    heading: overrides.heading ?? 1.2, // $headings-line-height
  }

  return { ...overrides, ...bootstrapLineHeights, ...themeUiExtras }
}

export interface BootstrapFontSizes {
  base: CSS.Property.FontSize<number>
  sm: CSS.Property.FontSize<number>
  lg: CSS.Property.FontSize<number>
  h1: CSS.Property.FontSize<number>
  h2: CSS.Property.FontSize<number>
  h3: CSS.Property.FontSize<number>
  h4: CSS.Property.FontSize<number>
  h5: CSS.Property.FontSize<number>
  h6: CSS.Property.FontSize<number>
}
export function generateFontSizes(
  overrides: Partial<
    BootstrapFontSizes & ScaleDict<CSS.Property.FontSize<number>>
  > = {}
): BootstrapFontSizes & ScaleDict<CSS.Property.FontSize<number>> {
  const base = overrides.base ?? '1rem'
  const bootstrapFontSizes: BootstrapFontSizes = {
    base,
    sm: overrides.sm ?? multiplyWithUnit(base, 0.875),
    lg: overrides.lg ?? multiplyWithUnit(base, 1.25),
    h1: overrides.h1 ?? multiplyWithUnit(base, 2.5),
    h2: overrides.h2 ?? multiplyWithUnit(base, 2),
    h3: overrides.h3 ?? multiplyWithUnit(base, 1.75),
    h4: overrides.h4 ?? multiplyWithUnit(base, 1.5),
    h5: overrides.h5 ?? multiplyWithUnit(base, 1.25),
    h6: overrides.h6 ?? multiplyWithUnit(base, 1),
  }

  return { ...overrides, ...bootstrapFontSizes }
}

function multiplyWithUnit(
  measurement: CSS.Property.FontSize<number>,
  factor: number
) {
  if (typeof measurement === 'number') {
    return measurement * factor
  }

  const number = parseFloat(measurement)
  if (Number.isNaN(number))
    throw new Error("Can't multiply a measurement without a numeric component")
  const unit = measurement.replace(number.toString(), '')
  return `${number * factor}${unit}`
}

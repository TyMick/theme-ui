import { ScaleDict, TLengthStyledSystem } from '@theme-ui/css'
import * as CSS from 'csstype'

export interface BootstrapFonts {
  sansSerif: CSS.Property.FontFamily
  monospace: CSS.Property.FontFamily
  base: CSS.Property.FontFamily
  code: CSS.Property.FontFamily
}
export function generateFonts(
  overrides: Partial<BootstrapFonts & ScaleDict<CSS.Property.FontFamily>> = {}
): BootstrapFonts & ScaleDict<CSS.Property.FontFamily> {
  const sansSerif =
    overrides.sansSerif ??
    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  const monospace =
    overrides.monospace ??
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  const bootstrapFonts: BootstrapFonts = {
    sansSerif,
    monospace,
    base: overrides.base ?? sansSerif,
    code: overrides.code ?? monospace,
  }

  const themeUiExtras = {
    body: overrides.body ?? bootstrapFonts.base,
  }

  return { ...overrides, ...bootstrapFonts, ...themeUiExtras }
}

export interface BootstrapFontWeights {
  lighter: CSS.Property.FontWeight
  light: CSS.Property.FontWeight
  normal: CSS.Property.FontWeight
  bold: CSS.Property.FontWeight
  bolder: CSS.Property.FontWeight
  base: CSS.Property.FontWeight
  headings: CSS.Property.FontWeight
  display: CSS.Property.FontWeight
  lead: CSS.Property.FontWeight
  legend?: CSS.Property.FontWeight
  dt: CSS.Property.FontWeight
  nestedKbd: CSS.Property.FontWeight
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
    base: overrides.base ?? normal,
    headings: overrides.headings ?? 500,
    display: overrides.display ?? 300,
    lead: overrides.lead ?? 300,
    legend: overrides.legend ?? undefined,
    dt: overrides.dt ?? bold,
    nestedKbd: overrides.nestedKbd ?? bold,
  }

  const themeUiExtras = {
    body: overrides.body ?? bootstrapFontWeights.normal,
    heading: overrides.heading ?? bootstrapFontWeights.headings,
  }

  return { ...overrides, ...bootstrapFontWeights, ...themeUiExtras }
}

export interface BootstrapLineHeights {
  base: CSS.Property.LineHeight<TLengthStyledSystem>
  sm: CSS.Property.LineHeight<TLengthStyledSystem>
  lg: CSS.Property.LineHeight<TLengthStyledSystem>
  headings: CSS.Property.LineHeight<TLengthStyledSystem>
  display: CSS.Property.LineHeight<TLengthStyledSystem>
}
export function generateLineHeights(
  overrides: Partial<
    BootstrapLineHeights &
      ScaleDict<CSS.Property.LineHeight<TLengthStyledSystem>>
  > = {}
): BootstrapLineHeights &
  ScaleDict<CSS.Property.LineHeight<TLengthStyledSystem>> {
  const headings = overrides.headings ?? 1.2
  const bootstrapLineHeights: BootstrapLineHeights = {
    base: overrides.base ?? 1.5,
    sm: overrides.sm ?? 1.25,
    lg: overrides.lg ?? 2,
    headings,
    display: overrides.display ?? headings,
  }

  const themeUiExtras = {
    body: overrides.body ?? bootstrapLineHeights.base,
    heading: overrides.heading ?? bootstrapLineHeights.headings,
  }

  return { ...overrides, ...bootstrapLineHeights, ...themeUiExtras }
}

export interface BootstrapFontSizes {
  root?: CSS.Property.FontSize<number>
  base: CSS.Property.FontSize<number>
  sm: CSS.Property.FontSize<number>
  lg: CSS.Property.FontSize<number>
  h1: CSS.Property.FontSize<number>
  h2: CSS.Property.FontSize<number>
  h3: CSS.Property.FontSize<number>
  h4: CSS.Property.FontSize<number>
  h5: CSS.Property.FontSize<number>
  h6: CSS.Property.FontSize<number>
  display: CSS.Property.FontSize<number>[]
  lead: CSS.Property.FontSize<number>
  small: CSS.Property.FontSize<number>
  subSup: CSS.Property.FontSize<number>
  initialism: CSS.Property.FontSize<number>
  blockquote: CSS.Property.FontSize<number>
  legend: CSS.Property.FontSize<number>
}
export function generateFontSizes(
  overrides: Partial<
    BootstrapFontSizes & ScaleDict<CSS.Property.FontSize<number>>
  > = {}
): BootstrapFontSizes & ScaleDict<CSS.Property.FontSize<number>> {
  const base = overrides.base ?? '1rem'
  const small = overrides.small ?? '0.875em'
  const bootstrapFontSizes: BootstrapFontSizes = {
    root: overrides.root ?? undefined,
    base,
    sm: overrides.sm ?? multiplyWithUnit(base, 0.875),
    lg: overrides.lg ?? multiplyWithUnit(base, 1.25),
    h1: overrides.h1 ?? multiplyWithUnit(base, 2.5),
    h2: overrides.h2 ?? multiplyWithUnit(base, 2),
    h3: overrides.h3 ?? multiplyWithUnit(base, 1.75),
    h4: overrides.h4 ?? multiplyWithUnit(base, 1.5),
    h5: overrides.h5 ?? multiplyWithUnit(base, 1.25),
    h6: overrides.h6 ?? multiplyWithUnit(base, 1),
    display: overrides.display ?? [
      0,
      '5rem',
      '4.5rem',
      '4rem',
      '3.5rem',
      '3rem',
      '2.5rem',
    ],
    lead: overrides.lead ?? multiplyWithUnit(base, 1.25),
    small,
    subSup: overrides.subSup ?? '0.75em',
    initialism: overrides.initialism ?? small,
    blockquote: overrides.blockquote ?? multiplyWithUnit(base, 1.25),
    legend: overrides.legend ?? '1.5rem',
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

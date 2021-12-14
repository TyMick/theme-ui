export function multiplyWithUnit(measurement: string | number, factor: number) {
  if (typeof measurement === 'number') {
    return measurement * factor
  }

  const number = parseFloat(measurement)
  if (Number.isNaN(number))
    throw new Error("Can't multiply a measurement without a numeric component")
  const unit = measurement.replace(number.toString(), '')
  return `${number * factor}${unit}`
}

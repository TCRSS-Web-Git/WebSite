export default function (number: number | null | undefined): string {
  if (number === null || number === undefined) {
    return '0'
  }

  return number.toLocaleString('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 })
}

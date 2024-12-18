export default function (phoneNumber: string): string {
  if (phoneNumber?.startsWith('+66')) {
    // Remove the country code
    phoneNumber = '0' + phoneNumber.substring(3)
  }
  return phoneNumber
}

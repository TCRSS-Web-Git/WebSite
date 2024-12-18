import type { DateTimeFormatOptions } from '@intlify/core-base'
import type { MaybeRefOrGetter } from '@vueuse/shared'
import { toValue } from '@vueuse/shared'

export default function (date: MaybeRefOrGetter<Date | number | string>) {
  const { locale } = useI18n()
  date = toValue(date)
  if (typeof date === 'string') {
    const isValidDate = !isNaN(Date.parse(date))

    if (!isValidDate) {
      return '-'
    }
  }

  // Define options for date formatting
  const options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Get user's timezone
  }

  const localize = locale.value === 'th' ? 'TH' : 'en-GB'

  // Convert the input string into a Date object if string
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date)
  }

  // Return the date formatted according to the locale
  return date.toLocaleDateString(localize, options)
}

import type {UseFetchOptions} from 'nuxt/app'
import { useCookie } from '#imports'

export function useApiFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig()
  const app = useNuxtApp()

  return useFetch(url, {
    baseURL: config.public.baseUrl,
    // credentials: 'include', // Ensure cookies are sent
    headers: {
      ...options.headers,
      'Accept': 'application/json', // backend read header `X-Localization` when set `Accept` to `application/json`
      'X-Localization': app.$i18n.locale?.value ?? 'en', // Add X-Localization header
    },
    ...options,
  })
}

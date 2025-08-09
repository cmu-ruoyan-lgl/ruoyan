import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  const supported = ['en', 'zh'] as const
  const effectiveLocale = supported.includes(locale as any) ? locale : 'en'
  return {
    messages: (await import(`./messages/${effectiveLocale}.json`)).default
  }
})



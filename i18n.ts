import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  const supported = ['en', 'zh', 'cn'] as const
  const normalized = locale === 'cn' ? 'zh' : locale
  const effectiveLocale = (supported as readonly string[]).includes(locale as any)
    ? normalized
    : 'en'
  return {
    messages: (await import(`./messages/${effectiveLocale}.json`)).default
  }
})



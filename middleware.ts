import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'zh', 'cn'],
  defaultLocale: 'cn'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next|.*\..*).*)']
}



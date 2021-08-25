export default {
  github: 'https://github.com/fridayback/wanlend-docs.git',
  docsRepositoryBase: 'https://github.com/fridayback/wanlend-docs.git',
  titleSuffix: ' – WanLend Docs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline"></span>
      <a aria-label="WanLend logo" href="https://wanlend.finance">
        <img src="android-icon-192x192.png"></img>
      </a>
      <span className="text-gray-600 font-normal hidden md:inline">
        WanLendV2 Documentation Management
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://twitter.com/WanLend" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="WanLend Docs" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.png"
      />
      <meta name="msapplication-TileImage" content="/favicon.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © WanLab.</>,
  // unstable_faviconGlyph: URL('favicon.png'),
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'zh', text: '中文' }
  // ]
}

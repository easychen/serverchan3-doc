export default {
    logo: <span>CubeSugar Studio Docs</span>,
    project: {
      link: 'https://github.com/easychen/serverchan3-doc',
    //   icon: (
    //     <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    //       <path d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z" />
    //     </svg>
    //   )
    },
    i18n: [
      { locale: 'zh', name: '简体中文' },
      { locale: 'en', name: 'English' },
    ],
    docsRepositoryBase: 'https://github.com/easychen/serverchan3-doc/tree/main',
    footer: {
      content: <span>
      Copy {`${new Date().getFullYear()}`} ©{' '}
      <a href="https://ft07.com" target="_blank" rel="noopener noreferrer">
      方糖气球 🎈
      </a>
    </span>,
    },
    head: (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>CubeSugar Studio Docs 🎈</title>
          <meta property="og:title" content="方糖文档中心" />
          <meta property="og:description" content="方糖旗下产品的文档中心" />
          <link rel="icon" type="image/png" href="/logo.144.png" />
        </>
      )
  };
  
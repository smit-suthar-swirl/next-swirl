import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
        <meta name='description' content='' />
        <link rel="icon" type="image/png" href="https://assets-global.website-files.com/63f0e6822ce56e6262917200/644f67cbf671a46f5d911a93_favicon-32x32.png" />
      </Head>
      <Header />
      <main className='desktop:pt-20'>{children}</main>
      <Footer />
    </>
  )
}
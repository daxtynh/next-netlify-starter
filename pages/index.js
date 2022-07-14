import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Hero } from '@components/Hero'
import { About } from '@components/About'
import { Portfolio } from '@components/Portfolio'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home Page!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Welcome to my app!" />
      <main>
        <Hero />
        <Portfolio />
        <About />
      </main>
      

      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Layout from '../components/Layout'
import Faq from '../components/Faq'
import { Suspense, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gtag, install,initDataLayer } from 'ga-gtag';

import { contact,faq } from '../portfolio'

const Home = () => {
  const [offset, setOffset] = useState(0)
 

  typeof window != 'undefined' &&
    window.addEventListener('scroll', () => {
      window.pageYOffset < 100 && setOffset(window.pageYOffset)
    })
  useEffect(() => {
    initDataLayer();
    gtag('js', new Date());

    gtag('config', 'AW-16645644521');
    install('AW-16645644521'); 
    AOS.init()
    AOS.refresh({
      duration: 500,
    })
  }, [offset])
  const [highlightedLink, setHighlighedtLink] = useState('')
  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const sectionName = window.location.hash

      setHighlighedtLink(sectionName)
    }
    window.addEventListener('scroll', handleScroll, false)
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])
  return (
    <Layout highlightedLink={highlightedLink} contact={contact}>
      <Head>
        <title>Sourabh Kaushik · Tech Lead · Payments Expert · Android</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <Suspense>
       
        <section id="faq" className="py-8 md:py-16">
          <Faq faq={faq} />
        </section>
      </Suspense>
    </Layout>
  )
}

export default Home

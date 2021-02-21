import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutIntro from '../components/aboutIntro'
// import Quote from '../components/quote'
import Newsletter from '../components/newsletter'
import Lifestyle from '../components/lifestyleAbout'
import Pricing from '../components/pricing'
import Map from '../components/map'
import NonMembers from '../components/nonMembers'

const AboutPage = () => (
  <Layout>
    <SEO title='Learn More' />
    <AboutIntro />
    {/* <Quote
      quote='Success is liking yourself, liking what you do, and liking how you do it.'
      by='Maya Angelou'
    /> */}
    <Lifestyle />
    <Pricing />
    <NonMembers />
    <Newsletter />
    {/* { typeof window !== 'undefined' && <Map /> } */}
  </Layout>
)

export default AboutPage 
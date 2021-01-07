import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Mission from '../components/mission'
import Quote from '../components/quote'
import Values from '../components/values'
import Map from '../components/map'
import Newsletter from '../components/newsletter'

const AboutPage = () => (
  <Layout>
    <SEO title='About Us' />
    <Mission />
    <Quote
      quote='Success is liking yourself, liking what you do, and liking how you do it.'
      by='Maya Angelou'
    />
    <Values />
    <Newsletter />
    { typeof window !== 'undefined' && <Map /> }
  </Layout>
)

export default AboutPage
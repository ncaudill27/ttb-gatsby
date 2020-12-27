import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Mission from '../components/mission'
import Quote from '../components/quote'
import Values from '../components/values'

const AboutPage = () => (
  <Layout>
    <SEO title='About' />
    <Mission />
    <Quote
      quote='Success is liking yourself, liking what you do, and liking how you do it.'
      by='Maya Angelou'
    />
    <Values />
  </Layout>
)

export default AboutPage
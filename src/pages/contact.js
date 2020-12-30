import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OfficeInfo from '../components/office'
import Map from '../components/map'
import Newsletter from '../components/newsletter'

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <OfficeInfo />
    { typeof window !== 'undefined' && <Map /> }
    <Newsletter />
  </Layout>
)

export default ContactPage
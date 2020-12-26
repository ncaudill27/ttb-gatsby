import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Bio from '../components/bio'

import Section from '../components/section'
import Dual from '../components/dual';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Bio />
    <Section id='lifestyle' className='circles' color='sec-light'>
      <div>
      <h1>Lifestyle Medicine</h1>
      <p>The Tiny Beet strives for a comprehensive approach towards our patients health. Guided by the teachings of Lifestyle Medicine.</p>
      <p>We focus on our patients physical and mental well-being while looking for long term development of health for them to carry on into adulthood.</p>
      <p>One of our goals is for our kids learn healthy habits and carry them into adulthood—avoiding chronic illnesses that have become the norm in our world.</p>
      <Dual>
        <div first>
          <h2>Lifestyle Medicine is</h2>
          <ul>
            <li>Evidence based medicine, which means that bases its recommendations in scientific studies, not in individual observations.</li>
            <li>Gets to the root cause of a patient’s problem. We treat the patient as a whule not as their illness.</li>
            <li>Focuses on its 6 pillars: nutrition, physical activity, sleep, stress management, mindfulness, and avoidance of substance abuse.</li>
            <li>The future approach to medicine</li>
          </ul>
        </div>
        <div second>
        <h2>Lifestyle Medicine is not</h2>
        <ul>
          <li>Alternative or holistic medicine.</li>
          <li>Against vaccinations. In fact our practice requires them.</li>
          <li>Against prescription or medications as a form of treatment.</li>
        </ul>
        </div>
      </Dual>
      </div>
    </Section>
  </Layout>
)

export default IndexPage

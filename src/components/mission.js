import React from "react"

import Section from "./section"
import Dual from "./dual"
import Watergirl from "./images/watergirl"

const Mission = () => (
  <Section color="pri-med">
    <Dual>
      <div first>
        <h1>Our Mission</h1>
        <p>
          We are sowing the seeds of a new approach to medicine that has the
          power to sprout lifestyle changes in children and their families that
          in turn will help our community grow.
        </p>
        <p>
          At the Tiny Beet SLMP, we believe in the values of empathy and
          respect.
        </p>
        <p>
          We are here to provide evidence-based pediatrics through an old
          fashioned model of continuity of care.
        </p>
        <p>
          We strive to inspire long term change in the lives of children, their
          families, and in turn our community through a medical, mental, and
          physical approach tiny steps at a time.
        </p>
      </div>
      <Watergirl second />
    </Dual>
  </Section>
)

export default Mission

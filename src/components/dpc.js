import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Section from "./section"
import Dual from "./dual"
import Grid from "./dpcGrid"

import styles from "./dpc.module.css"

const DPCButton = () => (
  <AnchorLink
    to="/learn-more#pricing"
    title="DPC pricing"
    className={styles.anchor}
  >
    Learn more about DPC
  </AnchorLink>
)

const DPC = () => {
  const breakpoints = useBreakpoint()

  return (
    <Section color="pri-med">
      <Dual>
        <div first>
          <h1>The benefits of a DPC practice.</h1>
          <p>
            A DPC model, similar to concierge medicine, allows for a tailored
            experience with each individual patient and works as a monthly
            membership. Dr. Caudill is looking forward to spending more time
            with her patients at The Tiny Beet.
          </p>
          {!breakpoints.sm && <DPCButton />}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          second
        >
          <Grid />
          {breakpoints.sm && <DPCButton />}
        </div>
      </Dual>
    </Section>
  )
}

export default DPC

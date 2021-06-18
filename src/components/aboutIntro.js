import React from "react"
import styled from "styled-components"

import Section from "./section"

const AboutIntro = () => (
  <Root color="pri-dark" background>
    <Wrapper>
      <Title>
        The Tiny Beet is Savannah’s first Lifestyle Medicine pediatric practice.
      </Title>
    </Wrapper>
  </Root>
)

const Root = styled(Section)`
  margin-top: 90px;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  max-width: 900px;
`

const Title = styled.h1`
  @media (max-width: 700px) {
    text-align: center;
  }
`

export default AboutIntro

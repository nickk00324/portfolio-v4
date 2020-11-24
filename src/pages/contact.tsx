import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledContact = styled.div`
  height: 100vh;
`

const Contact = () => {
  return (
    <Layout>
      <StyledContact>
        <h1>contact</h1>
        <p>
          Email me @ <a href={"mailto:nickkochornswasdi@gmail.com"}>here</a>
        </p>
      </StyledContact>
      <SEO title="Contact" />
    </Layout>
  )
}

export default Contact

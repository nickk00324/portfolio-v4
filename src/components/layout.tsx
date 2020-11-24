/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import Seo from "./seo"
import { theme } from "../styles/theme"
import "./layout.css"

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 200px;
  p {
    margin: 5px 0;
  }

  p:first-child {
    padding-right: 10px;
  }
`

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <Header />
      <main>{props.children}</main>
      <Footer>
        <p>
          email me <a href="mailto:nickkochornswasdi@gmail.com">here</a>
        </p>
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </Footer>
    </ThemeProvider>
  )
}

export default Layout

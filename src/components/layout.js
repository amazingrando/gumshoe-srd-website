/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"

const Layout = ({ children }) => {
  const [menuOpen, handleMenuOpen] = useState(false)

  const siteQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Header
        siteTitle={siteQuery.site.siteMetadata.title}
        menuToggle={() => handleMenuOpen(!menuOpen)}
        test={menuOpen}
      />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          padding: 0px 1.0875rem 1.45rem;
        `}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <Nav menuOpen={menuOpen} menuToggle={() => handleMenuOpen(!menuOpen)} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuOpen: PropTypes.bool.isRequired,
}

export default Layout

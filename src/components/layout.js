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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import color from "../utils/colors"

import Header from "./header"
import Nav from "./nav"

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

          a {
            color: ${color.link};
          }
        `}
      >
        <main>{children}</main>
        <footer
          css={css`
            margin: 1rem 0 4rem;
          `}
        >
          Made with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by <a href="https://twitter.com/amazingrando">@amazingrando</a>
          <div
            css={css`
              float: right;
            `}
          >
            <a
              css={css`
                margin-right: 1rem;
              `}
              href="https://creativecommons.org/licenses/by/3.0/"
            >
              Attribution 3.0 Unported (CC BY 3.0)
            </a>
            <a
              css={css`
                margin-right: 1rem;
              `}
              href="https://site.pelgranepress.com/index.php/the-gumshoe-system-reference-document/"
            >
              Official SRD
            </a>
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a href="https://github.com/amazingrando/gumshoe-srd-website">
              Files on Github
            </a>
          </div>
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

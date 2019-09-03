/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import color from "../utils/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const Nav = ({ props, menuOpen, menuToggle }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___order }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              order
            }
          }
        }
      }
    }
  `)

  return (
    <nav
      css={css`
        background-color: ${color.blueDark};
        color: white;
        position: absolute;
        top: 0;
        left: ${menuOpen ? "0" : "-100%"};
        bottom: 0;
        width: 100%;
        max-width: 600px;
        transition: all 0.15s;
        padding: 1.7rem 1.15rem;
        min-height: 100vh;
      `}
    >
      <FontAwesomeIcon
        icon={faTimesCircle}
        css={css`
          color: ${color.yellow};
          margin-left: 0.75rem;
          margin-bottom: 1rem;
        `}
        size="2x"
        onClick={menuToggle}
      />
      <ul
        css={css`
          padding: 0;
          margin: 0;

          li {
            padding: 0;
            margin: 0;
            list-style: none;
          }
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                display: inline-block;
                border-radius: 2px;
                color: ${color.white};
                font-size: 1.25rem;
                padding: 0.5rem 0.75rem;
                text-decoration: none;
                transition: all 0.15s;

                &:hover {
                  background-color: rgba(255, 255, 255, 0.1);
                }
              `}
            >
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        css={css`
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 3rem;
          padding: 1.7rem 0.75rem;
        `}
      >
        <p>
          Made with ❤️ by{" "}
          <a href="https://twitter.com/amazingrando">@amazingrando</a>
        </p>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
}

export default Nav

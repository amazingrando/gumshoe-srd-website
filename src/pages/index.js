import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import color from "../utils/colors"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        background: white;
        margin-top: 0.5rem;
        padding: 1.75rem 1rem;

        @media (min-width: 700px) {
          margin-top: 2rem;
          padding: 3rem 3rem;
        }
      `}
    >
      <h1
        css={css`
          display: flex;
          align-items: center;
          margin-top: 0;
        `}
      >
        <span
          css={css`
            background: ${color.blueDark};
            border-radius: 50%;
            color: ${color.yellow};
            font-size: 1.25rem;
            font-weight: 500;
            margin-right: 0.5rem;
            padding: 8px;
          `}
        >
          00
        </span>
        The GUMSHOE System Reference Document
      </h1>
      <ul
        css={css`
          counter-reset: numbering;
        `}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li
            key={node.id}
            css={css`
              margin: 0.75rem 0;
              padding: 0;
              list-style: none;

              ::before {
                counter-increment: numbering;
                content: "0" counter(numbering) " ";
                margin-right: 0.25rem;
              }
            `}
          >
            <Link
              to={node.fields.slug}
              css={css`
                color: ${color.link};
                :hover {
                  color: ${color.blueDark};
                }
              `}
            >
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
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
`

import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import color from "../utils/colors"
import Layout from "./layout"
import SEO from "./seo"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO />
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
            0{post.frontmatter.order}
          </span>
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        order
      }
    }
  }
`

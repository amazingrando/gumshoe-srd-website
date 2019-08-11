import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>The GUMSHOE Rules Systemz</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h3>
      </div>
    ))}

    <p>Welcome to your new Gatsby site.</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet
      sapien risus, sit amet sagittis mi lobortis ac. Aliquam sed urna quis
      lorem ultricies aliquam quis non eros. Aliquam tempus, quam vel maximus
      tristique, mauris leo consectetur erat, non posuere mauris orci in nunc.
      Pellentesque auctor mattis faucibus. Nam nec orci id sapien finibus
      ullamcorper. Nam vitae vulputate risus. Sed mollis lacinia nibh, eu
      malesuada mauris gravida id. Vivamus eget erat pretium, convallis justo
      et, vulputate dui. Quisque rutrum nibh ac elit posuere eleifend. Integer
      scelerisque turpis quis tellus viverra congue. Sed eu aliquet magna, vitae
      tempor sem. Maecenas laoreet dolor metus.
    </p>
    <p>
      Mauris eget orci eget mauris cursus blandit quis nec nisl. Duis in arcu
      risus. Pellentesque sed leo ipsum. Sed at scelerisque nisl, non finibus
      mi. Maecenas lobortis lobortis libero vitae imperdiet. Phasellus et sem
      consequat, dapibus ipsum finibus, congue nunc. Duis eu rutrum sem. Nam
      elementum ex et purus tempus placerat. In varius eu purus eu interdum.
      Morbi dignissim sodales tincidunt.
    </p>
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia Curae; Fusce non purus at nunc venenatis
      lacinia. Aenean maximus lacus et felis facilisis tempor sit amet eget sem.
      Sed cursus sem sem, sed cursus dui dignissim et. Morbi ac mi luctus,
      venenatis lacus nec, vulputate ante. Quisque condimentum, lectus quis
      convallis ullamcorper, libero massa finibus dui, nec congue elit ex id
      mauris. Praesent nec scelerisque nisl, eget maximus urna. Maecenas
      sagittis ornare velit, vitae elementum nisi pharetra et.
    </p>
    <p>
      Proin sed nunc nec dui porttitor sollicitudin. Nam metus erat, sodales ut
      molestie a, posuere at ex. Nullam vitae ligula a mi semper suscipit.
      Quisque dignissim, lorem ac venenatis sollicitudin, nisl dolor semper
      nunc, maximus mattis metus tellus vel libero. Fusce ac pretium dolor, vel
      venenatis sem. Vestibulum in tristique dolor. Fusce varius aliquet elit,
      non vestibulum metus laoreet a. Nulla facilisi. Aliquam luctus urna cursus
      euismod lacinia.
    </p>
    <p>
      Suspendisse quis pulvinar sem. Pellentesque mauris justo, molestie a
      fermentum pellentesque, malesuada non ex. Fusce viverra enim a orci
      lacinia gravida. Pellentesque blandit, nunc vitae aliquam gravida, diam
      massa interdum purus, ut imperdiet dolor odio nec mi. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Cras condimentum ipsum
      ut blandit maximus. Proin in porttitor odio. Vivamus auctor pulvinar
      interdum.
    </p>

    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      totalCount
    }
  }
`

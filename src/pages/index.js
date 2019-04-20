import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO
      title="Apex refrigeration"
      keywords={[`gatsby`, `application`, `react`]}
    />

    <div
      style={{
        backgroundImage: `url(${
          props.data.allLandingPage.edges[0].node.backgroundImage
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: 700,
      }}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allLandingPage {
      edges {
        node {
          backgroundImage
        }
      }
    }
  }
`

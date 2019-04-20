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
    >
      <div
        style={{
          minHeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          width: "100%",
          background: "rgb(0,0,0)",
          background:
            " linear-gradient(90deg, rgba(0,0,0,0.80015756302521) 0%, rgba(0,0,0,0.6152836134453781) 18%, rgba(0,212,255,0) 100%)",
        }}
      >
        <div style={{ maxWidth: 1080, width: "100%", justifyContent: "left" }}>
          <div style={{ maxWidth: 700 }}>
            <p>YOUR APPLICANCES ARE IN SAFE HANDS</p>
            <h1 style={{ fontWeight: 700, fontSize: 50 }}>
              Relax as we fit and maintain your electrical appliances
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
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

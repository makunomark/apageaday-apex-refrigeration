import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, Button, Input, Form } from "antd"

const { Meta } = Card

const IndexPage = props => (
  <Layout>
    <SEO
      title="Apex refrigeration"
      keywords={[`gatsby`, `application`, `react`]}
    />

    <div>
      <div
        style={{
          backgroundImage: `url(${
            props.data.allLandingPage.edges[0].node.backgroundImage
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: 600,
        }}
      >
        <div
          style={{
            minHeight: 600,
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
          <div
            style={{ maxWidth: 1080, width: "100%", justifyContent: "left" }}
          >
            <div style={{ maxWidth: 700, padding: `1rem 1rem` }}>
              <p>YOUR APPLICANCES ARE IN SAFE HANDS</p>
              <h1 style={{ fontWeight: 700, fontSize: 50, color: "white" }}>
                Relax as we fit and maintain your electrical appliances
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <Button shape="round" style={{ marginTop: 32 }} type="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "#f8f8f8" }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            padding: `4rem 1rem`,
            flexDirection: "column",
            maxWidth: 1080,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Our Services</h1>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 48 }}>
            <Card hoverable style={{ width: 300, margin: "1em 1em" }}>
              <Meta
                title={<h3 style={{ textAlign: "center" }}>Fitting</h3>}
                description={
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris.
                  </p>
                }
              />
            </Card>
            <Card hoverable style={{ width: 300, margin: "1em 1em" }}>
              <Meta
                title={<h3 style={{ textAlign: "center" }}>Fitting</h3>}
                description={
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris.
                  </p>
                }
              />
            </Card>
            <Card hoverable style={{ width: 300, margin: "1em 1em" }}>
              <Meta
                title={<h3 style={{ textAlign: "center" }}>Fitting</h3>}
                description={
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris.
                  </p>
                }
              />
            </Card>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff" }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            padding: `4rem 1rem`,
            flexDirection: "column",
            maxWidth: 1080,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Our Products</h1>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#f8f8f8" }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            padding: `4rem 1rem`,
            flexDirection: "column",
            maxWidth: 1080,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Contact Us</h1>
          <p style={{ textAlign: "center" }}>
            Send us an email by filling your details in the form below. We check
            emails regularly
          </p>
          <Form style={{ width: 400, marginTop: "6em" }}>
            <Form.Item>
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <Button
                shape="round"
                type="primary"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
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

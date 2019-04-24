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
              Refrigeration and Air Conditioning Appliances
              </h1>

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
            <Card
              hoverable
              style={{ margin: "1em 1em", border: "none", borderRadius: 16 }}
            >
              <Meta
                title={<h3 style={{ textAlign: "center" }}>New equipment supply and installation</h3>}
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
            <Card
              hoverable
              style={{ margin: "1em 1em", border: "none", borderRadius: 16 }}
            >
              <Meta
                title={<h3 style={{ textAlign: "center" }}>Good quality after sale service</h3>}
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
            <Card
              hoverable
              style={{ margin: "1em 1em", border: "none", borderRadius: 16 }}
            >
              <Meta
                title={<h3 style={{ textAlign: "center" }}>Existing equipment scheduled and breakdown maintenance</h3>}
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

            <Card
              hoverable
              style={{ margin: "1em 1em", border: "none", borderRadius: 16 }}
            >
              <Meta
                title={<h3 style={{ textAlign: "center" }}>Retail, wholesale and bulk supply of related parts</h3>}
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

          <div style={{ marginTop: "6em" }}>
            <Card
              hoverable
              style={{ padding: 0, border: "none", margin: "1em" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                  src={props.data.allLandingPage.edges[0].node.backgroundImage}
                  style={{ height: 200, flex: 1 }}
                />
                <div
                  style={{ flex: 1, padding: "0em 2em", alignItems: "center" }}
                >
                  <h3>Cold Room building and maintainance</h3>
                  <p>
                    We build cold rooms from scratch with minimal supervision.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </Card>
            <Card
              hoverable
              style={{ padding: 0, border: "none", margin: "1em" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                  src={props.data.allLandingPage.edges[0].node.backgroundImage}
                  style={{ height: 200, flex: 1 }}
                />
                <div
                  style={{ flex: 1, padding: "0em 2em", alignItems: "center" }}
                >
                  <h3>Refrigerator repair and maintainance</h3>
                  <p>
                    We build cold rooms from scratch with minimal supervision.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </Card>
            <Card
              hoverable
              style={{ padding: 0, border: "none", margin: "1em" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                  src={props.data.allLandingPage.edges[0].node.backgroundImage}
                  style={{ height: 200, flex: 1 }}
                />
                <div
                  style={{ flex: 1, padding: "0em 2em", alignItems: "center" }}
                >
                  <h3>Microwave services</h3>
                  <p>
                    We build cold rooms from scratch with minimal supervision.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </Card>
          </div>
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
              <Button shape="round" type="primary">
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

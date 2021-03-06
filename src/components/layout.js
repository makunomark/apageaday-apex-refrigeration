/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { white } from "ansi-colors"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
            fontFamily: `Open Sans`,
          }}
        >
          <main>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
          </main>
          <footer
            style={{
              minHeight: 200,
              backgroundColor: "#0058a9",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f8f8f8' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: `4rem 2rem`,
                maxWidth: 1240,
                marginLeft: "auto",
                marginRight: "auto",
                color: "white",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Our Vision
                </b>
                <br />
                <br />

                <p style={{ maxWidth: 200 }}>
                  Our vision is simple, to be a leading refrigeration and air
                  conditioning company in the region and render an excellent
                  Service to all Small, Medium and large Size Enterprises
                </p>
              </div>

              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Our mission
                </b>
                <br />
                <br />

                <p style={{ maxWidth: 200 }}>
                  Our Mission is to be the preferred service provider in this
                  line of work and be able to cater to a much larger customer
                  base. .To always be professional &amp; ethical in all our
                  business dealings and to add value to our clients
                </p>
              </div>

              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Our Values
                </b>
                <br />
                <br />

                <ul style={{ maxWidth: 200 }}>
                  <li>Friendly customer care</li>
                  <li>Deliver professional services</li>
                  <li>Good quality products and spares</li>
                  <li>Good quality maintenance and service</li>
                  <li>Cost effective systems</li>
                </ul>
                {/* <p style={{ maxWidth: 200 }}>Friendly customer care</p>
                <p style={{ maxWidth: 200 }}>Deliver professional services</p>
                <p style={{ maxWidth: 200 }}>Good quality products and spares</p>
                <p style={{ maxWidth: 200 }}>Good quality maintenance and service</p>
                <p style={{ maxWidth: 200 }}>Cost effective systems</p> */}
              </div>

              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Contact Us
                </b>
                <br />
                <br />

                <b>Nakuru Office</b>
                <p>
                  <span>Prime Plaza</span>
                  <br />
                  <span>Tel: 0724775713</span>
                </p>

                <b>Nairobi Office</b>
                <p>
                  <span>Maridadi Plaza</span>
                  <br />
                  <span>Tel: 0722614619</span>
                </p>

                <b>Email address</b>
                <p>
                  <span>keepcoolref@yahoo.com</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

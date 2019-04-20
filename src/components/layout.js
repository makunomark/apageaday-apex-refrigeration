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
                  About us
                </b>
                <br />
                <br />

                <p style={{ maxWidth: 200 }}>
                  We’re on a mission to build a better future where technology
                  creates good jobs for everyone. Fusce sed rutrum risus
                  pulvinar tortor et. Aenean suscipit ege.
                </p>
              </div>

              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Our mission
                </b>
                <br />
                <br />

                <p style={{ maxWidth: 200 }}>
                  We’re on a mission to build a better future where technology
                  creates good jobs for everyone. Fusce sed rutrum risus
                  pulvinar tortor et. Aenean suscipit ege.
                </p>
              </div>

              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Featured Services
                </b>
                <br />
                <br />

                <p style={{ maxWidth: 200 }}>
                  Refrigerator repair and maintainance
                </p>
                <p style={{ maxWidth: 200 }}>Microwave services</p>
                <p style={{ maxWidth: 200 }}>Refrigerator repair</p>
              </div>

              <div style={{ margin: "2em 3em" }}>
                <b style={{ color: "white", fontSize: 20, flex: 1 }}>
                  Contact Us
                </b>
                <br />
                <br />

                <b>Nakuru Office</b>
                <p>
                  <span>P.O. Box 15300-20100 Nakuru</span>
                  <br />
                  <span>Prime Plaza</span>
                  <br />
                  <span>Tel: 0722265467/0722614619</span>
                </p>

                <br />

                <b>Nairobi Office</b>
                <p>
                  <span>P.O. Box 15300-00100 Nairobi</span>
                  <br />
                  <span>Maridadi Plaza</span>
                  <br />
                  <span>Tel: 0722265467/0722614619</span>
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

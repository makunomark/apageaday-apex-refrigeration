import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(0,0,0,0.1)`,
      position: "absolute",
      width: "100%",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `1rem 1rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div style={{ display: "flex" }}>
        <Link to="/about" style={menuStyle}>
          About
        </Link>

        <Link to="/" style={menuStyle}>
          Our services
        </Link>

        <Link to="/" style={menuStyle}>
          Contact us
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const menuStyle = {
  color: `white`,
  textDecoration: `none`,
  padding: 12
}

export default Header

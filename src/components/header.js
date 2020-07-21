import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: `#5f160c`, // Kim chose #9b2e04, I like #632118 and #662020 and #5f160c
        marginBottom: `1.45rem`,
        borderBottom: `1px solid #421610`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Img loading="eager" style={{ float: "left", marginTop: "-0.5em", borderRadius: "50%", marginRight: "0.5em", textAlign: "center" }} fixed={data.file.childImageSharp.fixed} alt="A photo of a cat I use as my avatar image" />
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
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

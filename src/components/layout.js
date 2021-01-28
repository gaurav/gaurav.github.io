/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"
import Header from "./header"
import "./layout.css"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {props.goBackTo &&
          <>
            <small><a href={props.goBackTo}>{props.goBackText}</a></small>
          </>
        }
        {props.title &&
          <>
            <h1>{props.title}</h1>
            <SEO title={props.title} />
          </>
        }
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()} Gaurav Vaidya. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>.<br />
          <small>
          <a href="https://github.com/gaurav/gaurav.github.io">Source code available</a> under the GPL v3.0 open source license.
          {` `}
          <a href="https://github.com/gaurav/gaurav.github.io/tree/develop/jsonld">Raw data available</a> as RDF in JSON-LD and Turtle.
          </small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
    dataJson(_id: {eq: "https://www.ggvaidya.com/"}) {
      sameAs {
        _id
        label
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />

      <p>Welcome to my website! For now, there's nothing here. Instead,
      you can find me on other websites:</p>

      <ul>
        { data.dataJson.sameAs.map(({ _id, label }) => (
          <li><a href={ _id }>{ label }</a></li>
        ))}
      </ul>
    </Layout>
  )
}

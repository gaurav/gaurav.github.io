import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

export const query = graphql`
  query {
    dataJson(_id: {eq: "https://www.ggvaidya.com/"}) {
      sameAs {
        _id
        label
        publisher {
          logo
          name
        }
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

      <ul class={indexStyles.sameAsList}>
        {
          data.dataJson.sameAs.map(({ _id, label, publisher }) => {
            return (
              <li><a href={ _id }>{ label }</a> on { publisher.name }</li>
            );
          })
        }
        <li><em>Or</em> you can e-mail me at <tt>gaurav</tt>(at)<tt>ggvaidya</tt>.<tt>com</tt>.</li>
      </ul>
    </Layout>
  )
}

import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

import websites from "../jsonld/websites.json"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <p>Welcome to my website! You might want to see:</p>

      <ul>
        <li>A <a href="./timeline">timeline</a> of my life (think of it as an extended CV).</li>
      </ul>

      <p>You can find me on other websites:</p>

      <ul>
        {
          websites.sameAs.map((website, index) => {
            return (
              <li><a href={ website['@id'] }>{ website.label }</a> on { website.publisher.name }</li>
            );
          })
        }
        <li><em>Or</em> you can e-mail me at <tt>gaurav</tt>(at)<tt>ggvaidya</tt>.<tt>com</tt>.</li>
      </ul>
    </Layout>
  )
}

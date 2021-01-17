import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

export default function Component(props) {
  const tagName = props.params.name;

  return (
    <Layout>
      <SEO title={'Tag not found: ' + tagName} />
      <h1>Tag not found: {tagName}</h1>

      <p>Unfortunately, this website does not yet have information about the tag: {tagName}.</p>
    </Layout>
  )
}

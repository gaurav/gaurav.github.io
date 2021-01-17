import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

export default function Component(props) {
  const tagId = props.params.id;
  const tagInfo = props.data.tagsJson;
  const tagName = tagInfo.name;

  return (
    <Layout>
      <SEO title={'Tag: ' + tagName} />
      <h1>Tag: {tagName}</h1>

      <p>{tagInfo.description}</p>

      <ul>
        {tagInfo._id && <li><a href={tagInfo._id}>{tagInfo._id}</a></li>}
        {tagInfo.urls.map(url => <li><a href={url}>{url}</a></li>)}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    tagsJson(id: { eq: $id }) {
      _id
      name
      description
      urls
    }
  }
`

import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

import tagData from "../../data/tags.json"

export default function Component(props) {
  const tagId = props.params.id;

  if (!tagData[tagId] || !tagData[tagId].name) {
    return (
      <Layout>
        <SEO title={'Tag not found: ' + tagId} />
        <h1>Tag not found: {tagId}</h1>

        <p>Unfortunately, this website does not yet have information about the tag: {tagId}.</p>
      </Layout>
    )
  } else {
    const tagInfo = tagData[tagId]
    const tagName = tagInfo.name

    return (
      <Layout>
        <SEO title={tagName} />
        <small><Link to="/tags">Return to the list of tags</Link></small>
        <h1>{tagName}{ (tagInfo.id && tagInfo.id !== tagName) && <>{" (" + tagInfo.id + ")"}</>}</h1>

        <p>{tagInfo.description}</p>

        <ul>
          {tagInfo['@id'] && <li><a href={tagInfo['@id']}>{tagInfo['@id']}</a></li>}
          {(tagInfo.urls || []).map(url => <li><a href={url}>{url}</a></li>)}
        </ul>
      </Layout>
    )
  }
}

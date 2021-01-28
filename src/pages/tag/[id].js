import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"

import * as tags from "../../lib/tags.js"

import tagData from "../../../data/tags.json"

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
      <Layout
        goBackTo="/tags"
        goBackText="Return to the list of tags"
      >
        <SEO title={tagName} />
        <h1>{tagName}{ (tagInfo.id && tagInfo.id !== tagName) && <>{" (" + tagInfo.id + ")"}</>}</h1>

        <p>{tagInfo.description}</p>

        {tagInfo.seeAlso && <p>
          See also: {tagInfo.seeAlso.map((tag, index) => <>
              { tags.renderTag(tag) }
              {(index < tagInfo.seeAlso.length - 1) && <>{", "}</>}
            </>
          )}
        </p>}

        <ul>
          {tagInfo['@id'] && <li><a href={tagInfo['@id']}>{tagInfo['@id']}</a></li>}
          {(tagInfo.urls || []).map(url => <li><a href={url}>{url}</a></li>)}
        </ul>
      </Layout>
    )
  }
}

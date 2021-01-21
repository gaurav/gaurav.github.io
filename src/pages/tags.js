import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { renderTag } from "../lib/tags.js"

import tagsData from "../data/tags.json"

export default function TagsPage() {
  return (
    <Layout>
      <SEO title='Tags' />
      <h1>Tags</h1>

      <ul>
        { Object.keys(tagsData).sort().map(tagId => {
          const tagInfo = tagsData[tagId];
          return <li><Link to={'/tag/' + tagId}>{tagId}{(tagInfo.name !== tagId) && <>{" ("}{tagInfo.name}{")"}</>}</Link>
            {tagInfo.description && <>{": "}{tagInfo.description}</>}
            </li>
        }) }
      </ul>
    </Layout>
  )
}

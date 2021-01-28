/*
 * Access tag information stored in data/tags.json.
 */

import React from "react"
import { Link } from "gatsby"

import tagsData from "../../data/tags.json"

export function getTagInfo(tagId) {
  return tagsData.get(tagId);
}

export function renderTag(tagId) {
  const tagName = tagId;

  if (!tagsData[tagId]) {
    throw new Error(`Tag '${tagId}' referenced but not defined in 'data/tags.json'!`);
  }

  return <Link to={'/tag/' + tagId}>{tagName}</Link>
}

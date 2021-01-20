import React from "react"
import { DateTime } from "luxon"

import * as dates from "../lib/dates.js"
import * as citations from "../lib/citations.js"

import Layout from "../components/layout"

import slugify from 'slugify'

import css from "./timeline.module.css"

import publicationsData from "../jsonld/publications.json"

export default function PublicationsPage() {
  const publications = publicationsData.authored
    .map(src => {
      const dest = {...src};
      dest.pubTime = DateTime.fromISO(dest.datePublished);
      return dest;
    })
    .sort(
      (a, b) => b.pubTime.toMillis() - a.pubTime.toMillis()
    );

  return (
    <Layout title="Publications">
      <ul>
      {
        publications.map((publication, index) => <li>{citations.renderCitation(publication)}</li>)
      }
      </ul>
    </Layout>
  )
}

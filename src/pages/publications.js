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

  const pubYears = [...new Set(publications.map(pub => pub.pubTime.year))].sort().reverse();

  return (
    <Layout title="Publications">
      { pubYears.map(pubYear => {
        return <><h2>{pubYear}</h2>
          <ul>
          { publications.filter(pub => pub.pubTime.year === pubYear).map((publication, index) => {
            return <li>{citations.renderCitation(publication)}
              <div data-badge-details="right" data-badge-type="2" data-doi={publication.doi} data-hide-no-mentions="true" class="altmetric-embed"></div>
            </li>
          }) }
          </ul></>
        })
      }
    </Layout>
  )
}

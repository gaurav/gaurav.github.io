import React from "react"
import { DateTime } from "luxon"

import dates from "../lib/dates.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

import timelineData from "../jsonld/timeline.json"

export default function TimelinePage() {
  const roles = timelineData.hasRole
    .map(src => {
      const dest = {...src};
      dest.startTime = DateTime.fromISO(dest.startDate);
      dest.endTime = DateTime.fromISO(dest.endDate);
      dest.duration = dest.startTime.until(dest.endTime).toDuration([
        'years',
        'months',
        'days'
      ]);
      return dest;
    })
    .sort(
      (a, b) => b.startTime.toMillis() - a.startTime.toMillis()
    );

  return (
    <Layout>
      <SEO title="Timeline" />

      <p>My life, arranged chronologically.</p>

      {
        roles.map((role, index) => {
          return (<div>
            <div>
              { dates.getFullTimeSpan(role.startTime) }
              {" "}
              to
              {" "}
              { dates.getFullTimeSpan(role.endTime) }
              {" "}&bull;{" "}
              { role.roleName }
              {" "}at{" "}
              { role.roleName }
            </div>
            <div>
              Me.
            </div>
          </div>);
        })
      }
    </Layout>
  )
}

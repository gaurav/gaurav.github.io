import React from "react"
import { DateTime } from "luxon"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

import timelineData from "../data/timeline.json"

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

      <dl class={indexStyles.timelineList}>
        {
          roles.map((role, index) => {
            return (<>
              <dt>
                <span title={role.startTime}>{ role.startTime.toLocaleString(DateTime.DATE_FULL) }</span>
                {" "}
                to
                {" "}
                { role.endTime.toLocaleString(DateTime.DATE_FULL) }.
                {" "}
                ({ role.duration.years } years, { role.duration.months } months, {role.duration.days} days)
                {" "}
                { role.roleName }
              </dt>
              <dd>
                Me.
              </dd>
            </>);
          })
        }
      </dl>
    </Layout>
  )
}

import React from "react"
import { DateTime } from "luxon"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

import timelineData from "../jsonld/timeline.json"

function getDurationAsString(luxonDuration) {
  const duration = luxonDuration.shiftTo(
    'years',
    'months',
    'days'
  );

  function getUnitAsString(count, unit) {
    if (count == 0) return 'zero ' + unit;
    if (count > 1) return Math.floor(count) + ' ' + unit;
    switch(unit) {
      case "years": return '1 year';
      case "months": return '1 month';
      case "days": return '1 day';
    }
  }

  if(duration.years <= 0 && duration.months <= 0) {
    return getUnitAsString(duration.days, 'days');
  } else if(duration.years <= 0) {
    return `${getUnitAsString(duration.months, 'months')} and ${getUnitAsString(duration.days, 'days')}`;
  } else {
    return `${getUnitAsString(duration.years, 'years')}, ${getUnitAsString(duration.months, 'months')} and ${getUnitAsString(duration.days, 'days')}`;
  }
}

function getFullTimeSpan(luxonTime) {
  const duration = luxonTime.diffNow([
    'years',
    'months',
    'days'
  ]).negate();
  console.log("Duration to now from ", luxonTime, " is ", duration, " or ", getDurationAsString(duration));

  return <span title={getDurationAsString(duration) + ' ago'}>{luxonTime.toLocaleString(DateTime.DATE_FULL)}</span>
}

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
                { getFullTimeSpan(role.startTime) }
                {" "}
                to
                {" "}
                { getFullTimeSpan(role.endTime) }.
                {" "}
                ({ getDurationAsString(role.duration) })
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

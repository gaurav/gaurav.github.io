import React from "react"
import { DateTime } from "luxon"

import * as dates from "../lib/dates.js"
import * as orgs from "../lib/organizations.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import css from "./timeline.module.css"

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
      <h2>Timeline</h2>

      {
        roles.map((role, index) => {
          return (<div class={css.timelineEvent}>
            <div>
              { dates.getShortDiffSpan(role.startTime, role.endTime) }
              {" "}&bull;{" "}
              <strong>{ role.roleName }</strong>
              {" "}at{" "}
              { orgs.getOrganizationNamePlaceSpan(role.organization) }
            </div>
            <div class={css.timelineInset}>
              { role.organization.parentOrganization && <div>
                  <em>Part of { orgs.getOrganizationNamePlaceSpan(role.organization.parentOrganization) }</em>
                </div>
              }
              { role.organization.funder && <div>
                  <em>Funded by { orgs.getOrganizationNamePlaceSpan(role.organization.funder) }
                    { role.organization.funder.parentOrganization && <span>{" "}
                        (part of { orgs.getOrganizationNamePlaceSpan(role.organization.funder.parentOrganization) })
                      </span>
                    }
                  </em>
                </div>
              }
            </div>
            { role.description && <p>{ role.description }</p> }
            <p><ul>
              { (role.relatedLink || []).map(link => {
                return <li>Link: <a href={link['@id']}>{link.label}</a>{ link.description && <>{": "}{link.description}</>}</li>
              })}
            </ul></p>
          </div>);
        })
      }
    </Layout>
  )
}

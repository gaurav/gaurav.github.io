import React from "react"
import { DateTime } from "luxon"
import { Link } from "gatsby"

import slugify from 'slugify'

import { ReferenceManager } from "../lib/entities.js"
import * as dates from "../lib/dates.js"
import * as orgs from "../lib/organizations.js"
import * as creativeworks from "../lib/creativeworks.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import css from "./timeline.module.css"

import timelineData from "../../jsonld/timeline.json"
import projectsData from "../../jsonld/projects.json"
import publicationsData from "../../jsonld/publications.json"
import citationsData from "../../jsonld/citations.json"

export default function TimelinePage() {
  const refs = new ReferenceManager();
  refs.addEntitiesFromData(publicationsData);
  refs.addEntitiesFromData(citationsData);
  const filledTimelineData = refs.fillReferences(timelineData);
  const filledProjectData = refs.fillReferences(projectsData);

  const roles = filledTimelineData.hasRole
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
      (a, b) => b.endTime.toMillis() - a.endTime.toMillis()
    );

  function getProjectsForRole(role, slug) {
    const roleId = role['@id'];
    if (!roleId) return;

    // TODO: sort products in time order.

    return filledProjectData.projects
      .map(src => {
        const dest = {...src};
        dest.startTime = DateTime.fromISO(dest.startDate);
        dest.endTime = DateTime.fromISO(dest.endDate);
        return dest;
      })
      .sort(
        (a, b) => b.endTime.toMillis() - a.endTime.toMillis()
      )
      .filter(project => project.role === roleId).map(project => {
        const projectSlug = slug + '-' + slugify(project.name)
        const startTime = DateTime.fromISO(project.startDate)
        const endTime = DateTime.fromISO(project.endDate)
        return <>
          <li id={projectSlug}><a class="section-link" href={'#' + projectSlug}>&sect;</a>
            <strong>Project:</strong> <Link to={'/projects#' + slugify(project.name)}>{project.name}</Link> ({ dates.getShortDiffSpan(startTime, endTime) }): { project.description}

          </li>
          { project.products && <ul class="uncompressed">
            { project.products.map(product => <li>{creativeworks.renderCreativeWorkShort(product, projectSlug)}</li>) }
          </ul> }
        </>
      })
  }

  return (
    <Layout title="Timeline">
      <small>(<a href="#" onclick="$('.roleProducts').slideToggle(1000)">Toggle showing products</a>)</small>
      <p></p>

      {
        roles.map((role, index) => {
          const slug = slugify(role.roleName + '-' + orgs.getOrganizationNamePlaceString(role.organization));
          return (<div id={slug} class={css.timelineEvent}>
            <div>
              <a class="section-link" href={"#" + slug}>&sect;</a>
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
            <p><ul class="uncompressed roleProducts">
              { getProjectsForRole(role, slug) }
              { (role.products || []).map(product => <li>{creativeworks.renderCreativeWork(product, slug, false)}</li>) }
            </ul></p>
          </div>);
        })
      }
    </Layout>
  )
}

import React from "react"
import { DateTime } from "luxon"

import * as dates from "../lib/dates.js"
import * as orgs from "../lib/organizations.js"
import * as creativeworks from "../lib/creativeworks.js"
import * as citations from "../lib/citations.js"
import { ReferenceManager } from "../lib/entities.js"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import css from "./projects.module.css"

import projectsData from "../jsonld/projects.json"
import citationsData from "../jsonld/citations.json"

export default function TimelinePage() {
  const refs = new ReferenceManager();
  refs.addEntitiesFromData(citationsData);
  const filledProjectData = refs.fillReferences(projectsData);
  console.log("Filled project data:", filledProjectData);

  const projects = filledProjectData.projects
    .map(src => {
      const dest = {...src};
      dest.startTime = DateTime.fromISO(dest.startDate);
      dest.endTime = DateTime.fromISO(dest.endDate);
      dest.products = (dest.products || []).map(srcProduct => {
        const dest = {...srcProduct};
        dest.startTime = DateTime.fromISO(dest.startDate);
        dest.endTime = DateTime.fromISO(dest.endDate);
        return dest;
      }).sort(
        (a, b) => b.endTime.toMillis() - a.endTime.toMillis()
      );
      return dest;
    })
    .sort(
      (a, b) => b.endTime.toMillis() - a.endTime.toMillis()
    );

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>

      {
        projects.map((project, index) => {
          return (<div>
            <div class={css.projectTitle}>
              { dates.getShortDiffSpan(project.startTime, project.endTime) }
              {" "}&bull;{" "}
              <strong>{ project.name }</strong>
            </div>
            <div class={css.projectInset}>

            </div>
            { project.description && <p>{ project.description }</p> }
            <p><ul class="uncompressed">
              { project.products.map(product => <li>{creativeworks.renderCreativeWork(product)}</li>) }
            </ul></p>
            <hr class={css.projectEndHR} />
          </div>);
        })
      }
    </Layout>
  )
}

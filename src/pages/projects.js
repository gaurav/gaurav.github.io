import React from "react"
import { DateTime } from "luxon"
import { Link } from "gatsby"
import slugify from "slugify"

import * as dates from "../lib/dates.js"
import * as orgs from "../lib/organizations.js"
import * as creativeworks from "../lib/creativeworks.js"
import * as citations from "../lib/citations.js"
import { ReferenceManager } from "../lib/entities.js"

import Layout from "../components/layout"
// import Image from "../components/image"

import css from "./projects.module.css"

import projectsData from "../jsonld/projects.json"
import publicationsData from "../jsonld/publications.json"
import citationsData from "../jsonld/citations.json"

export default function TimelinePage() {
  const refs = new ReferenceManager();
  refs.addEntitiesFromData(publicationsData);
  refs.addEntitiesFromData(citationsData);
  const filledProjectData = refs.fillReferences(projectsData);
  // console.log("Filled project data:", filledProjectData);

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
    <Layout title="Projects">

      {
        projects.map((project, index) => {
          const slug = slugify(project.name);

          return (<div>
            <div id={slug} class={css.projectTitle}>
              { dates.getShortDiffSpan(project.startTime, project.endTime) }
              {" "}&bull;{" "}
              <strong>{ project.name }</strong>
              {" "}
              <a class="section-link" href={"#" + slug}>&sect;</a>
            </div>
            { project.description && <p>{ project.description }</p> }
            <p><ul class="uncompressed">
              { project.products.map(product => <li>{creativeworks.renderCreativeWork(product, slug)}</li>) }
            </ul></p>
            <hr class={css.projectEndHR} />
          </div>);
        })
      }
    </Layout>
  )
}

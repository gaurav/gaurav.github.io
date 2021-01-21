/*
 * Some code to simplify displaying creative works (https://schema.org/CreativeWork).
 */

import React from "react"
import { DateTime } from "luxon"
import slugify from "slugify"

import * as citations from "./citations.js"
import * as dates from "./dates.js"
import * as utils from "./utils.js"
import { renderTag } from "./tags.js"

export function renderLicense(license) {
  const url = ((typeof license === 'object') && license['@id']) || license;
  const name = ((typeof license === 'object') && license.name) || license;

  switch (url) {
    case 'https://www.wikidata.org/wiki/Q10513450':
      return <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">GNU General Public License, version 2.0</a>
    case 'https://www.wikidata.org/wiki/Q27016752':
      return <><a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">GNU General Public License, version 2.0</a> or later</>
    case 'https://www.wikidata.org/wiki/Q10513445':
      return <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License, version 3.0</a>
    case 'https://www.wikidata.org/wiki/Q27016754':
      return <><a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License, version 3.0</a> or later</>

    default:
      return <a href={license}>{name}</a>
  }
}

export function renderCreativeWorkShort(work, parentSlug="creative-work") {
  return renderCreativeWork(work, parentSlug, false)
}

export function renderCreativeWork(work, parentSlug="creative-work", includeDetails=true) {
  if (!work) return;

  const url = work['@id'] || work['url'];
  const name = work.name || "Unnamed creative work";
  const type = work['@type'];
  const slug = `${parentSlug}-${slugify(work.name || url)}`;
  const startTime = work.startDate ? DateTime.fromISO(work.startDate) : undefined;
  const endTime = work.endDate ? DateTime.fromISO(work.endDate) : undefined;

  switch (type) {
    case 'schema:SoftwareSourceCode':
      return <>
        <strong>Software</strong>: <a id={slug} href={url}>{name}</a>
        { includeDetails && <a class="section-link" href={"#" + slug}>&sect;</a> }
        { (startTime || endTime) && <>{" ("}{dates.getShortDiffSpan(startTime, endTime)}{")"}</> }
        { work.description && <>{": "}{ utils.paragraphMultiline(work.description) }</> }
        { includeDetails && <ul class="compressed">
          { work.technologies &&
            <li>Technologies used: {" "}
              { work.technologies.map((tech, index) => <>{ renderTag(tech) }
                { (index < work.technologies.length - 1) && ", " }
              </>) }.
            </li>
          }
          { work.features &&
            <li>Provides the following features:
            <ul class="compressed">
              { work.features.map(feature => <li>{feature}</li>) }
            </ul>
            </li>
          }
          { work.codeRepository && <li>Source code available at <a href={work.codeRepository}>{work.codeRepository}</a>.</li> }
          { work.license && <li>Released under the {renderLicense(work.license)}.</li> }
        </ul> }
      </>;

    case 'http://okfnlabs.org/bibjson/':
      return <>
        <a class="section-link" href={"#" + slug}>&sect;</a>
        <strong id={slug}>Citation</strong>: { citations.renderCitation(work) }
        </>

    default:
      if (!url) throw new Error("Unable to render creative work without an '@id': " + work);
      return <>
        <a class="section-link" href={"#" + slug}>&sect;</a>
        <strong>Link</strong>: <a id={slug} href={url}>{name}</a>
        { (startTime || endTime) && <>{" ("}{dates.getShortDiffSpan(startTime, endTime)}{")"}</> }
        { work.description && <>{": "}{work.description}</> }
      </>;
  }
}

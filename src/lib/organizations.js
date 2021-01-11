/*
 * Some code to simplify displaying organizations (https://schema.org/Organization).
 */

import React from "react"

export function getOrganizationNamePlaceSpan(org) {
  if (!org) return;

  const addThe = org.addThe;
  const url = org["@id"];
  const name = org.name;
  const location = org.location;

  if (!name && !url) {
    throw new Error("Organization " + org + " has neither a name nor a URL.");
  } else if (!name) {
    return <span>{addThe && "the "}<a href={url}>{url}</a></span>
  } else {
    if (location) {
      return <span>{addThe && "the "}<a href={url} title={'Located at ' + location}>{name}</a></span>
    } else {
      return <span>{addThe && "the "}<a href={url}>{name}</a></span>
    }
  }
}

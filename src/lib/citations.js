/*
 * Some code to simplify displaying citations.
 */

import React from "react"
import { DateTime } from "luxon"

export function renderAuthors(authors) {
  return authors.map((author, index) => {
    const url = author['@id'] || author['url'];
    const is_last = (index === authors.length - 1);

    if (url === 'https://www.ggvaidya.com/' || url === 'http://orcid.org/0000-0003-0587-0454') {
      return <>
        <strong>{author.name}</strong>
        {!is_last && ", "}
        </>;
    } else if (!url) {
      return <>
        {author.name}
        {!is_last && ", "}
        </>;
    } else {
      return <>
        <a href={url}>{author.name}</a>
        {!is_last && ", "}
        </>;
    }
  })
}

export function renderJournal(journal) {
  if (!journal) return;

  return <>
      <em>{ journal.name }</em>
      &nbsp;
      <strong>{ journal.volume }</strong>
      { journal.issue && `(${journal.issue})` }
      { journal.pages && `:${journal.pages.replace("--", "–")}` }
    </>;
}

export function renderCitation(citation) {
  const url = citation['@id'];
  const pubDate = citation.datePublished

  return <>
      { renderAuthors(citation.authors || []) }
      {" "}
      { !pubDate ? (<>(<em>undated</em>)</>) :
        (<>({DateTime.fromISO(pubDate).toLocaleString({
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })})</>)
      }
      {" "}
      <a href={url}>{citation.title}</a>.
      {" "}
      { renderJournal(citation.journal) }.
    </>;
}

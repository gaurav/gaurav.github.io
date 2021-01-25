/*
 * General methods.
 */

import React from "react"

export function paragraphMultiline(text, alwaysParagraph=false) {
  const paras = text.split("\n");
  if (paras.length === 0) return "";
  if (paras.length === 1) {
    if (alwaysParagraph) return <p>{paras[0]}</p>;
    else return paras[0];
  }
  return paras.map(line => <p>{line}</p>)
}

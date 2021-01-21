/*
 * General methods.
 */

import React from "react"

export function paragraphMultiline(text) {
  const paras = text.split("\n");
  if (paras.length === 0) return "";
  if (paras.length === 1) return paras[0];
  return paras.map(line => <p>{line}</p>)
}

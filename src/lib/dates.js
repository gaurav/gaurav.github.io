/*
 * Collects some functions for working with dates.
 */

import React from "react"
import { DateTime } from "luxon"

export function getUnitAsString(count, unit) {
  if (count === 0) return 'zero ' + unit;
  if (count > 1) return Math.floor(count) + ' ' + unit;
  switch(unit) {
    case "years": return '1 year';
    case "months": return '1 month';
    case "days": return '1 day';
    default: return `unknown unit '${unit}'`;
  }
}

export function getDurationAsString(luxonDuration) {
  const duration = luxonDuration.shiftTo(
    'years',
    'months',
    'days'
  );

  if(duration.years <= 0 && duration.months <= 0) {
    return getUnitAsString(duration.days, 'days');
  } else if(duration.years <= 0) {
    return `${getUnitAsString(duration.months, 'months')} and ${getUnitAsString(duration.days, 'days')}`;
  } else {
    return `${getUnitAsString(duration.years, 'years')}, ${getUnitAsString(duration.months, 'months')} and ${getUnitAsString(duration.days, 'days')}`;
  }
}

export function getFullTimeSpan(luxonTime) {
  const duration = luxonTime.diffNow([
    'years',
    'months',
    'days'
  ]).negate();
  // console.log("Duration to now from ", luxonTime, " is ", duration, " or ", getDurationAsString(duration));

  return <span title={getDurationAsString(duration) + ' ago'}>{luxonTime.toLocaleString(DateTime.DATE_FULL)}</span>
}

export function getShortTimeSpan(luxonTime) {
  const duration = luxonTime.diffNow([
    'years',
    'months',
    'days'
  ]).negate();
  // console.log("Duration to now from ", luxonTime, " is ", duration, " or ", getDurationAsString(duration));

  return <span title={luxonTime.toLocaleString(DateTime.DATE_FULL) + ', ' + getDurationAsString(duration) + ' ago'}>
    {luxonTime.toLocaleString({
      month: 'short',
      year: 'numeric'
    })}</span>
}

export function getShortDiffSpan(luxonTime1, luxonTime2) {
  // Note: we assume that luxonTime2 is later than luxonTime1.

  const duration = luxonTime2.diff(luxonTime1, [
    'months',
    'days'
  ]);
  const duration1 = luxonTime1.diffNow([
    'years',
    'months',
    'days'
  ]).negate();
  const duration2 = luxonTime2.diffNow([
    'years',
    'months',
    'days'
  ]).negate();

  if (duration.months < 1) {
    return <span title={
      luxonTime1.toLocaleString(DateTime.DATE_FULL) + ' to ' +
      luxonTime2.toLocaleString(DateTime.DATE_FULL) + ', ' +
      getDurationAsString(duration) + ' ago'
    }>{luxonTime2.toLocaleString({
      month: 'short',
      year: 'numeric'
    })}</span>
  }

  return <>
    <span title={luxonTime1.toLocaleString(DateTime.DATE_FULL) + ', ' + getDurationAsString(duration1) + ' ago'}>
    {luxonTime1.toLocaleString({
      month: 'short',
      year: 'numeric'
    })}</span>
    {" "}<span class="no-title-dash" title={getDurationAsString(duration)}>to</span>{" "}
    <span title={luxonTime2.toLocaleString(DateTime.DATE_FULL) + ', ' + getDurationAsString(duration2) + ' ago'}>
    {luxonTime2.toLocaleString({
      month: 'short',
      year: 'numeric'
    })}</span>
  </>;
}

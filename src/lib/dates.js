/*
 * Collects some functions for working with dates.
 */

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
  console.log("Duration to now from ", luxonTime, " is ", duration, " or ", getDurationAsString(duration));

  return <span title={getDurationAsString(duration) + ' ago'}>{luxonTime.toLocaleString(DateTime.DATE_FULL)}</span>
}

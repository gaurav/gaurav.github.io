const util = require('util');

const superagent = require('superagent');

// Note: doi should not start with 'doi:'!
// TODO: filter these things out.
const doi = process.argv[2];
const mailTo = 'doi2bibjson@gaurav.ggvaidya.com';

// Helper methods.
function convertListToSingle(input) {
  if (input.length === 0) return "";
  else if(input.length === 1) return input[0];
  else return input;
}

function parseDate(date) {
  // In CrossRef, the dates are in three parts.
  const dates = date['date-parts'].map(d =>
    `${d[0].toLocaleString('en', {minimumIntegerDigits:4,useGrouping:false})}-${d[1].toLocaleString('en', {minimumIntegerDigits:2})}-${d[2].toLocaleString('en', {minimumIntegerDigits:2})}`
  );
  return convertListToSingle(dates);
}

function parseAuthors(authors) {
  return authors.map(author => {

    return {
      '@id': author.ORCID || '',
      'firstname': author.given || '',
      'lastname': author.family || '',
      'name': ((author.given || '') + ' ' + (author.family || '')).trim(),
    }
  });
}

// Request Crossref info on this website.
const url = 'https://api.crossref.org/works/' + doi + '?mailto=' + mailTo
superagent
  .get(url)
  .set('User-Agent', 'doi2bibjson.js (' + mailTo + ')')
  .set('Accept', 'application/json')
  .end((err, res) => {
    if (err) throw new Error(`Could not lookup doi '${doi}' on CrossRef via ${url}: ${err}`);

    // Response.
    const body = res.body;
    // console.log("Response body:", body);

    // The response is a JSON object. Now we just need to translate that into BibJSONish.
    const bibjson = {
      '@type': 'http://okfnlabs.org/bibjson/',
      '@id': 'https://doi.org/' + doi,
      doi,
      datePublished: parseDate(body.message.issued),
      title: convertListToSingle(body.message.title),
      authors: parseAuthors(body.message.author),
      journal: {
        name: convertListToSingle(body.message['container-title']),
        volume: body.message.volume || "",
        issue: (body.message['journal-issue'] || {}).issue || "",
        pages: body.message.page || "",
        issn: convertListToSingle(body.message.ISSN),
      }
    }

    // Display it to the user.
    process.stdout.write(JSON.stringify(bibjson, null, 2));
    process.stdout.write("\n");
  })

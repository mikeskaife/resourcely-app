/* eslint-disable no-console, no-undef, id-length, no-unused-vars */

import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err.red);
  }

  const $ = cheerio.load(markup);

  // inject reference to production stylesheet
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    if (error) {
      console.log(error.red);
      return 1;
    }
    console.log('index.html written to /dist'.green);
    return 0;
  });

  return 0;
});

/* eslint-enable no-console, no-undef, id-length, no-unused-vars */

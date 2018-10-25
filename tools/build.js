/* eslint-disable no-console, no-undef, no-unused-vars */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // ensures Babel dev config for hot reloading does not apply

console.log('Generating minfied bundle for production via Webpack...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // stop here if fatal error occurs
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // build successful
  console.log('App compiled in production mode and written to /dist'.green);

  return 0;
});

/* eslint-enable no-console, no-undef, no-unused-vars */

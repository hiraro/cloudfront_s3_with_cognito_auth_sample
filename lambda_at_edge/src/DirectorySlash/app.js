'use strict';

module.exports.lambda_handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const viewer_uri = request.uri;

  // Complement directory index file name
  const origin_uri = viewer_uri.replace(/\/$/, '\/index.html');

  console.log(`Viewer URI: ${viewer_uri}`);
  console.log(`Origin URI: ${origin_uri}`);

  request.uri = origin_uri;

  callback(null, request);
};

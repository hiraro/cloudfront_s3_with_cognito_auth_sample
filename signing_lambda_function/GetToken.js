'use strict';

const AWS = require('aws-sdk');
const moment = require('moment');

const CF_SIGNING_KEY = process.env.CF_SIGNING_KEY.replace(/\\n/g, '\n');
const CF_SIGNING_KEYPAIR_ID = process.env.CF_SIGNING_KEYPAIR_ID;
const CF_CUSTOM_POLICY_ALLOW_RESOURCE = process.env.CF_CUSTOM_POLICY_ALLOW_RESOURCE;
const CF_SIGN_EXPIRY_SEC = process.env.CF_SIGN_EXPIRY_SEC;
const API_CORS_ORIGIN = process.env.API_CORS_ORIGIN;

function generateSignedCookie() {
  const signer = new AWS.CloudFront.Signer(
    CF_SIGNING_KEYPAIR_ID,
    CF_SIGNING_KEY);

  const custom_policy = {
    "Statement": [{
      "Resource": CF_CUSTOM_POLICY_ALLOW_RESOURCE,
      "Condition": {
        "DateLessThan": {
          "AWS:EpochTime": parseInt(moment().add(CF_SIGN_EXPIRY_SEC, 'second').format("X")),
        }
      }
    }]
  };

  console.dir(JSON.stringify(custom_policy));

  return signer.getSignedCookie({
    policy: JSON.stringify(custom_policy),
  });
}

module.exports.handle = async (event, context, callback) => {
  try {
    const signed_cookie_obj = generateSignedCookie();

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": API_CORS_ORIGIN,
        "Access-Control-Allow-Credentials": true,
        'content-type': 'application/json',
      },
      body: JSON.stringify(signed_cookie_obj),
    });
  } catch (e) {
    console.error(e.toString());

    callback(e, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": API_CORS_ORIGIN,
        "Access-Control-Allow-Credentials": true,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        message: e.toString(),
      }),
    });
  }
};

/* eslint-disable */

const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const rename = require("gulp-rename");
const AWS = require('aws-sdk');
const parallelize = require("concurrent-transform");

const s3_path_prefix="private";

gulp.task('publish', function () {

  const publisher = awspublish.create({
    region: 'ap-northeast-1',
    params: {
      Bucket: 'test-cognito-auth',
    },
    credentials: new AWS.SharedIniFileCredentials({
      profile: "develop"
    })
  });

  gulp.src('./dist/**/*')
    .pipe(rename(function (path) {
      path.dirname = `${s3_path_prefix}/${path.dirname}`;
    }))
    .pipe(parallelize(publisher.publish(), 5))
    .pipe(awspublish.reporter());
});

gulp.task('sync', function () {

  const publisher = awspublish.create({
    region: 'ap-northeast-1',
    params: {
      Bucket: 'test-cognito-auth',
    },
    credentials: new AWS.SharedIniFileCredentials({
      profile: "develop"
    })
  });

  gulp.src('./dist/**/*')
    .pipe(rename(function (path) {
      path.dirname = `${s3_path_prefix}/${path.dirname}`;
    }))
    .pipe(publisher.publish())
    .pipe(publisher.sync(s3_path_prefix))
    .pipe(awspublish.reporter());
});

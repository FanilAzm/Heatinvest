const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
  'node_modules/slick-carousel/slick/slick.min.js'
];

module.exports = function vendors(cb) {
  return gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/static/js/'));
};

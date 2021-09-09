const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () => {
  return src('jerry/**/*.scss').pipe(sass()).pipe(dest('css'));
};

const watchTask = () => {
  watch(['jerry/**/*.scss'], buildStyles);
};

exports.default = series(buildStyles, watchTask);

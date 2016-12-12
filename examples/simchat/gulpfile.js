const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  gulp.src("src/**/*.js")
   .pipe(babel())
   .pipe(gulp.dest("dist"));

   gulp.src("public/src/**/*.js")
   .pipe(babel())
   .pipe(gulp.dest("public/dist"));
});

const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      cleanCSS     = require('gulp-clean-css'),
      browserSync  = require('browser-sync').create();
      concat       = require('gulp-concat'),
      uglify       = require('gulp-uglify'),
      cssnano      = require('gulp-cssnano'),
      rename       = require('gulp-rename'),
      del          = require('del'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      realFavicon  = require('gulp-real-favicon');
      fs           = require('fs');

const paths = {
  styles: {
    src:  'app/catalog/view/theme/fancy.shop/sass/stylesheet.sass',
    dest: 'app/catalog/view/theme/fancy.shop/css'
  },
  scripts: {
    src:  'app/catalog/view/theme/fancy.shop/js/**/*.js',
    dest: 'app/catalog/view/theme/fancy.shop/js'
  },
  twig: {
    src:  'app/catalog/view/theme/fancy.shop/template/**/*.twig'
  }
}

function reload() {
  browserSync.reload();
}

function style() {
  /* Компиляция stylesheet.sass */
  console.log('\n' + '* Компиляция stylesheet.sass *');
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(concat('stylesheet.min.css'))
      .pipe(cssnano())
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.reload({ stream: true }))
  );
}

function script() {
  /* Объединение и сжатие скриптов */
  console.log('\n' + '* Объединение и сжатие скриптов *');
  return (
    gulp
      .src(paths.scripts.src)
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.scripts.dest))
  );
}

function watch() {
  /* Отслеживание php/wtig/sass */
  console.log('\n' + '* Отслеживание php/wtig/sass *');
  browserSync.init({
    proxy:  'opencart-dev',
    notify: false
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.twig.src).on('change', browserSync.reload);
  gulp.watch(paths.scripts.src, reload);
}

exports.style   = style;
exports.script  = script;
exports.watch   = watch;
exports.default = watch;
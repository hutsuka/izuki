const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

const paths = {
  scss: "scss/**/*.scss",
  css: "css",
};

function compileSass() {
  return src(paths.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(dest(paths.css))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "src",
    },
    notify: false,
    open: false,
  });

  watch(paths.scss, compileSass);
  watch("src/**/*.html").on("change", browserSync.reload);
}

exports.default = series(compileSass, serve);

let gulp        = require('gulp');
let browserSync = require('browser-sync');
let reload      = browserSync.reload;

// start server
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./example/",
        },
        startPath: 'index.html',
        browser: ["google chrome"],
    });
});

gulp.task('rebuild', () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  gulp.watch([`**/*.js`], ['rebuild']);
  gulp.watch([`**/*.html`], ['rebuild']);
  gulp.watch([`**/*.css`], ['rebuild']);
});

// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['browser-sync', 'rebuild', 'watch']);

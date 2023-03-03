const { src, dest, watch, series, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

task('sass', () => {
    return src(['Styles/Scss/*.scss', 'Styles/Scss/Components/**/**.scss'])
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(prefix('last 4 versions'))
        .pipe(dest('Styles/Css'))
})

task('watch', () => {
    watch([
        'Styles/Scss/*.scss',
        'Styles/Scss/Components/**/**.scss',
    ],
    series('sass')
    )
})
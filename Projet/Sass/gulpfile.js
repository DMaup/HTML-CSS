/* 
Gulp est un automatiseur de tache
on va pouvoir créer plusieurs tache utile au développement
*/
// Etape 1: npm install gulp (-g pour installer la cmd gulp)
// Etape 2: créer le fichier gulpfile.js
// on recupère gulp précédemment installé avec npm
// npm = node package manager
// gulp = automatiseur de tache
// browser-sync = server de développement
// cleanCSS = minifier de css
// sourcemap = créer un mapping du fichier d'origine
// csscomb = miseen forme automatique du code CSS
// rename = renomme un fichier en sortie du minifier
// sass = preprocessing css
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', function(){
    browserSync.init({
        server: './'
    });
    gulp.watch("./Scss/**/*.scss", ["sass"]);
    gulp.watch(["./index.html","./style.css"]).on("change",browserSync.reload);
});
// on va créer la tache de remise en forme du CSS
gulp.task('sass', function(){
    return gulp.src('./Scss/style.scss')
    .pipe(sourcemaps.init()) //le sourcemaps se genere sur la base du fichier spécifié en src
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write()) // le sourcemaps s'ecrit dans le fichier minifié pour faire référence au fichier origine
    .pipe(gulp.dest('./'));
});

'use strict';

var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
//var sass = require('gulp-sass');
//sass.compiler = require('node-sass');

function css() {
    return src('src/*.scss')
        .pipe ( sass() ) 
        .pipe ( sass().on('error', sass.logError))
        .pipe (dest ( 'dist/css') ) 
} ;

exports.default = function () {
    watch('src/*.scss', css);
    watch('src/modules/*.scss', css);
};
//exports { _default as default };
//exports.default = css;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//gulp-oload-plugins可以取代gulp類型的宣告
const autoprefixer = require('autoprefixer');
//autoprefixer屬於postcss不屬於gulp故不能省略
// var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var minimist = require('minimist');
var gulpSequence = require('gulp-sequence');

var envOptions = {
    string:'env',
    default: { env: 'develop' }
};
var options = minimist(process.argv.slice(2),envOptions);
console.log(options);

gulp.task('clean', function () {
    return gulp.src(['./.tmp','./public'], { read: false })
        .pipe($.clean());
});

gulp.task('copy', function() {
    return gulp.src(['./source/**/**', '!source/stylesheets/**/**','!plan & design'])
        .pipe($.plumber())
        .pipe(gulp.dest('./public/'))  
        .pipe(browserSync.reload({
            stream: true
        }));  
})

gulp.task('sass', function () {
    var processors = [
        autoprefixer({ 
            browsers: ['last 5 version','> 5%','ie 8'] })
        //autoprefixer可下各種條件來支援各種條件的瀏覽器
    ];
    return gulp.src(['./source/stylesheets/**/*.sass', './source/stylesheets/**/*.scss'])
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested',
            includePaths: ['./node_modules/bootstrap/scss']
        }).on('error', $.sass.logError))
        //編譯完成CSS
        .pipe($.postcss(processors)) 
        //安插在sass()執行之後
        .pipe($.if(options.env === 'production', $.cleanCss()))
        //有用gulp-load套件時minify-css要改成駝峰
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/stylesheets'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('babel', () => {
    return gulp.src('./source/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['env']
    }))
    .pipe($.concat('all.js'))
    .pipe($.if(options.env === 'production', $.uglify({
        compress:{
            drop_console: true
        }
    })))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// gulp.task('bower', function () {
//     return gulp.src(mainBowerFiles())
//         .pipe(gulp.dest('./.tmp/vendor'))
// });

gulp.task('vendorJs', function(){
    return gulp.src([
        // './node_modules/jquery/dist/jquery.slim.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ])
    .pipe($.concat('vendor.js'))
    // .pipe($.if(options.env === 'production', $.uglify()))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('browserSync', function () {
    browserSync.init({
        server: { baseDir: './public' },
        reloadDebounce: 2000
    })
});

gulp.task('imageMin', () =>
    gulp.src('./source/images/*')
        .pipe($.if(options.env === 'production', $.imagemin()))
        .pipe(gulp.dest('./public/images'))
);

gulp.task('watch', function () {
    gulp.watch(['./source/stylesheets/**/*.sass', './source/stylesheets/**/*.scss'], ['sass']);
    gulp.watch(['./source/**/**', '!/source/stylesheets/**/**', '!/source/js/**/**'], ['copy']);
    gulp.watch('./source/js/**/*.js', ['babel']);
});

gulp.task('deploy', function () {
    return gulp.src('./public/**/*')
        .pipe($.ghPages());
});

gulp.task('build', gulpSequence('clean', 'copy', 'sass', 'babel', 'vendorJs', 'imageMin'));
gulp.task('default', ['copy','sass','babel','vendorJs','browserSync','watch']);
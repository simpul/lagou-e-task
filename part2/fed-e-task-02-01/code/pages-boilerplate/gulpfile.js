// 实现这个项目的构建任务
const { src, dest, parallel, series, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const loadPlugins = require('gulp-load-plugins');
const del = require('del');
const bs = require('browser-sync').create();

const plugins = loadPlugins();

const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'Weibo',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'Github',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}

const scripts = () => {
  return src('assets/scripts/*.js', { base: 'src', cwd: 'src' })
    .pipe(plugins.babel({ presets: [require('@babel/preset-env')] }))
    .pipe(dest('.temp'))
};

const styles = () => {
  return src('assets/styles/*.scss', { base: 'src', cwd: 'src' })
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('.temp'))
};

const pages = () => {
  return src('**/*.html', { base: 'src', cwd: 'src' })
    .pipe(plugins.swig({ data, defaults: { cache: false } }))
    .pipe(dest('.temp'))
};

const images = () => {
  return src('assets/images/**', { base: 'src', cwd: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
};

const fonts = () => {
  return src('assets/fonts/**', { base: 'src', cwd: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
};

const extra = () => {
  return src('**', { base: 'public', cwd: 'public' })
    .pipe(dest('dist'))
};

const clean = () => {
  return del(['.temp', '.dist'])
};

const serve = () => {
  watch('assets/scripts/*.js', { cwd: 'src' }, scripts);
  watch('assets/styles/*.scss', { cwd: 'src' }, styles);
  watch('**/*.html', { cwd: 'src' }, pages);

  watch(['assets/images/**', 'assets/fonts/**'], { cwd: 'src' }, bs.reload);
  watch('**', { cwd: 'public' }, bs.reload);

  bs.init({
    notify: false,
    port: 3000,
    files: '.temp/**',
    server: {
      baseDir: ['.temp', 'src', 'public'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });
};

const useref = () => {
  return src('**/*.html', { base: '.temp', cwd: '.temp' })
    .pipe(plugins.useref({ searchPath: ['.temp', '.'] }))
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    })))
    .pipe(dest('dist'))
};

const compile = parallel(scripts, styles, pages);

const build = series(clean, parallel(series(compile, useref), images, fonts, extra));

const develop = series(compile, serve);


module.exports = {
  build,
  develop,
  clean,
}
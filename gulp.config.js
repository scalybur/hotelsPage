'use strict';

module.exports = function () {
    const pkg = require('./package.json');

    const server = './server/';
    const src = './src/';
    const scssfolder = `${src }client/sass/`;
    const mainscss = `${scssfolder }styles.sass`;
    const build = './build/';
    const appFolder = `${src}client/app/`;
    const index = `${src }client/index.html`;

    const config = {
        projectName: pkg.name,
        appFolder,
        app: `${appFolder }app.module.js`,
        scssfolder,
        mainscss,
        angularRootApp: `${appFolder}core/`,
        build,
        index,
        src,
        images: `${src }client/img/`,
        fonts: `${scssfolder }fonts/`,
        vendorfolder: `${src }client/vendor/`,
        templateCache: {
            file: 'app.templates.js',
            options: {
                module: 'hotelsResultModule',
                moduleSystem: "IIFE"
            }
        },
        jsOrder: ['**/app.module.js', '**/*.module.js', '**/*.js'],
        files: {
            sass: `${src}**/*.sass`,
            js: [`${src}**/*.js`, `!${src}**/*.templates.js`],
            html: `${src}**/*.html`,
            jade: `${src}**/*.jade`

        }
    };

    return config;
};

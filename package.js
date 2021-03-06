/* eslint-disable no-undef */
Package.describe({
    name: 'socialize:cloudinary',
    summary: 'Upload files to Cloudinary',
    version: '1.0.0',
    git: 'https://github.com/copleykj/socialize-cloudinary',
});

Package.on_use(function _(api) {
    api.versionsFrom('1.3');

    api.use(['meteor', 'ecmascript', 'mongo', 'check'], ['client', 'server']);

    api.mainModule('server/server.js', 'server');

    api.mainModule('client/client.js', 'client');
});

Package.describe({
  "name": 'sewdn:sly',
  "summary": 'sly carousel for meteor http://darsa.in/sly/',
  "homepage": "https://github.com/Sewdn/meteor-sly",
  "git": "https://github.com/Sewdn/meteor-sly.git",
  "author": "Sewdn",
  "version": "1.6.1"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/dist/sly.js',
  ], 'client' );

});
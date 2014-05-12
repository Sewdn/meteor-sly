Package.describe({
  summary: "SLY slider/navigation component"
});

Package.on_use(function (api) {
  api.add_files('lib/dist/sly.js', 'client');
});
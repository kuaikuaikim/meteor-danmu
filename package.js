//jQuery.danmu.js (//github.com/chiruom/danmu/) - Licensed under the MIT license
Package.describe({
  summary: "video danmu plugin for meteor",
  "version": "0.0.1",
  "git": "https://github.com/quickj/meteor-danmu.git",
  "name": "jquick:video-danmu"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0.3");
  api.use('jquery', 'client');
  api.addFiles([
    'jquery.danmu.js',
  ],'client');
});

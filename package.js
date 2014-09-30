Package.describe({
  summary: "A pattern to display application errors to the user",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  
  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');
  api.use('anuragphadke19:errors', 'client');
  api.addFiles('errors-tests.js', 'client');
});



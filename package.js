Package.describe({
  summary: "A light utility to parse and manipulate forms"
});

Package.on_use(function (api) {

  // make sure jQuery is loaded on client
  api.use(["jquery"], "client");

  // load parse form lib onto client
  api.add_files("parse-form.js", ["client"]);

  // export global contructor
  api.export('ParseForm', 'client');
});


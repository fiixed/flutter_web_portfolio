define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const project_model = Object.create(dart.library);
  const CT = Object.create(null);
  const image$ = dart.privateName(project_model, "Project.image");
  const name$ = dart.privateName(project_model, "Project.name");
  const description$ = dart.privateName(project_model, "Project.description");
  const link$ = dart.privateName(project_model, "Project.link");
  project_model.Project = class Project extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      this[description$] = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      this[link$] = value;
    }
  };
  (project_model.Project.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let link = opts && 'link' in opts ? opts.link : null;
    this[image$] = image;
    this[name$] = name;
    this[description$] = description;
    this[link$] = link;
    ;
  }).prototype = project_model.Project.prototype;
  dart.addTypeTests(project_model.Project);
  dart.setLibraryUri(project_model.Project, "package:andrew_bell/models/project_model.dart");
  dart.setFieldSignature(project_model.Project, () => ({
    __proto__: dart.getFields(project_model.Project.__proto__),
    image: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    description: dart.fieldType(core.String),
    link: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/andrew_bell/models/project_model", {
    "package:andrew_bell/models/project_model.dart": project_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["project_model.dart"],"names":[],"mappings":";;;;;;;;;;;;IAGS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QACiB;QAAqB;QAAoB;QAAkB;IAA3D;IAAqB;IAAoB;IAAkB;;EAAM","file":"project_model.ddc.js"}');
  // Exports:
  return {
    models__project_model: project_model
  };
});

//# sourceMappingURL=project_model.ddc.js.map

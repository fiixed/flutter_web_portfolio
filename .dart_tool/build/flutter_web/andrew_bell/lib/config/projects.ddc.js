define(['dart_sdk', 'packages/andrew_bell/models/project_model'], function(dart_sdk, packages__andrew_bell__models__project_model) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const project_model = packages__andrew_bell__models__project_model.models__project_model;
  const projects = Object.create(dart.library);
  let JSArrayOfProject = () => (JSArrayOfProject = dart.constFn(_interceptors.JSArray$(project_model.Project)))();
  const CT = Object.create(null);
  dart.defineLazy(projects, {
    /*projects.projects*/get projects() {
      return JSArrayOfProject().of([new project_model.Project.new({name: "Video Diary", image: "assets/works/video_diary.png", description: "Record your personal thoughts and daily life.  Built using Flutter", link: "https://play.google.com/store/apps/details?id=com.fiixed.video_diary"}), new project_model.Project.new({name: "Invest Austin", image: "assets/works/invest_austin.png", description: "Gain a sneak-peek into Austin's future, as it extends the current landscape using in-context AR. \n\nClick to watch me present the app at the global Unite 17 conference", link: "https://www.youtube.com/watch?v=QDQsg1hPa38"}), new project_model.Project.new({name: "AgView", image: "assets/works/agview.png", description: "Easy-to-use interface for digitally entering animal health certificate data for all species", link: "https://apps.apple.com/tn/app/agview/id1401972444"}), new project_model.Project.new({name: "Sirius Kickoff", image: "assets/works/sirius_kickoff.png", description: "The Sirius Kickoff conference mobile companion application is for the Sirius Kickoff conference.", link: "https://apps.apple.com/in/app/sirius-kickoff/id1076884994"}), new project_model.Project.new({name: "Sirius Madness", image: "assets/works/sirius_madness.png", description: "The Sirius Madness conference mobile companion application is for the Sirius Madness conference. ", link: "https://apps.apple.com/in/app/sirius-madness/id1090833498"}), new project_model.Project.new({name: "Davis Vision", image: "assets/works/davis_vision.png", description: "The Davis Vision mobile app has a number of industry-leading features to manage your vision care benefit while you are on-the-go. ", link: "https://davisvision.com/app/"}), new project_model.Project.new({name: "Tram Tracker", image: "assets/works/tram_tracker.png", description: "tramTRACKER – Melbourne’s official tram app for real-time tram arrival information.", link: "https://play.google.com/store/apps/details?id=com.yarratrams.tramtracker&hl=en_US"})]);
    }
  });
  dart.trackLibraries("packages/andrew_bell/config/projects", {
    "package:andrew_bell/config/projects.dart": projects
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["projects.dart"],"names":[],"mappings":";;;;;;;;;;;MAGoB,iBAAQ;YAAG,wBAC7B,qCACU,mEAGF,4EACE,0EACV,qCACU,uEAGF,kLACE,iDACV,qCACU,yDAGF,qGACE,uDACV,qCACU,yEAGF,0GACE,+DACV,qCACU,yEAGF,2GACE,+DACV,qCACU,qEAGF,4IACE,kCACV,qCACU,qEAGF,6FAEA","file":"projects.ddc.js"}');
  // Exports:
  return {
    config__projects: projects
  };
});

//# sourceMappingURL=projects.ddc.js.map

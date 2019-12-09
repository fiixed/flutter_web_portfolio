define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const resume_tab = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/tabs/resume_tab.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  resume_tab.ResumeTab = class ResumeTab extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (resume_tab.ResumeTab.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    resume_tab.ResumeTab.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resume_tab.ResumeTab.prototype;
  dart.addTypeTests(resume_tab.ResumeTab);
  dart.setMethodSignature(resume_tab.ResumeTab, () => ({
    __proto__: dart.getMethods(resume_tab.ResumeTab.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resume_tab.ResumeTab, "package:andrew_bell/tabs/resume_tab.dart");
  dart.trackLibraries("packages/andrew_bell/tabs/resume_tab", {
    "package:andrew_bell/tabs/resume_tab.dart": resume_tab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["resume_tab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO;IAGT;;;QAPqB;;AAAQ,wDAAW,GAAG;;EAAC","file":"resume_tab.ddc.js"}');
  // Exports:
  return {
    tabs__resume_tab: resume_tab
  };
});

//# sourceMappingURL=resume_tab.ddc.js.map

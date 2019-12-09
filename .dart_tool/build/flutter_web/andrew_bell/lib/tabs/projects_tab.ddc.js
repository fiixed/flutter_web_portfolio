define(['dart_sdk', 'packages/andrew_bell/widgets/responsive_widget', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/andrew_bell/config/projects', 'packages/andrew_bell/widgets/project_widget'], function(dart_sdk, packages__andrew_bell__widgets__responsive_widget, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__andrew_bell__config__projects, packages__andrew_bell__widgets__project_widget) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const responsive_widget = packages__andrew_bell__widgets__responsive_widget.widgets__responsive_widget;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const projects = packages__andrew_bell__config__projects.config__projects;
  const project_widget = packages__andrew_bell__widgets__project_widget.widgets__project_widget;
  const projects_tab = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToProjectWidget = () => (intToProjectWidget = dart.constFn(dart.fnType(project_widget.ProjectWidget, [core.int])))();
  let BuildContextAndintToProjectWidget = () => (BuildContextAndintToProjectWidget = dart.constFn(dart.fnType(project_widget.ProjectWidget, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "_project",
        [_Location_column]: 65,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "_bottomPadding",
        [_Location_column]: 74,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/tabs/projects_tab.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childAspectRatio",
        [_Location_column]: 11,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/tabs/projects_tab.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "_project",
        [_Location_column]: 23,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "_bottomPadding",
        [_Location_column]: 62,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/tabs/projects_tab.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/tabs/projects_tab.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeScreen",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "smallScreen",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/tabs/projects_tab.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C9;
  let C5;
  let C4;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C19;
  let C18;
  projects_tab.ProjectsTab = class ProjectsTab extends framework.StatelessWidget {
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new scroll_view.GridView.count({padding: new edge_insets.EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 32.0), crossAxisCount: 3, childAspectRatio: dart.notNull(media_query.MediaQuery.of(context).size.width) / (dart.notNull(media_query.MediaQuery.of(context).size.height) / 1.3), children: ListOfWidget().generate(projects.projects[$length], dart.fn(index => new project_widget.ProjectWidget.new(projects.projects[$_get](index), 0.0, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), intToProjectWidget())), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), smallScreen: new scroll_view.ListView.builder({itemCount: projects.projects[$length], itemBuilder: dart.fn((context, index) => new project_widget.ProjectWidget.new(projects.projects[$_get](index), index === dart.notNull(projects.projects[$length]) - 1 ? 16.0 : 0.0, {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), BuildContextAndintToProjectWidget()), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
  };
  (projects_tab.ProjectsTab.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    projects_tab.ProjectsTab.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = projects_tab.ProjectsTab.prototype;
  dart.addTypeTests(projects_tab.ProjectsTab);
  dart.setMethodSignature(projects_tab.ProjectsTab, () => ({
    __proto__: dart.getMethods(projects_tab.ProjectsTab.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(projects_tab.ProjectsTab, "package:andrew_bell/tabs/projects_tab.dart");
  dart.trackLibraries("packages/andrew_bell/tabs/projects_tab", {
    "package:andrew_bell/tabs/projects_tab.dart": projects_tab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["projects_tab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,0DACiB,yCACE,oCAAS,MAAM,MAAM,MAAM,uBAC/B,qBACoC,aAAvB,AAAY,AAAK,0BAAd,OAAO,iBACC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,gBAC3B,wBACX,AAAS,4BAAQ,QAAC,SAAU,qCAAc,AAAQ,yBAAC,KAAK,GAAG,yJAE7C,6CACP,AAAS,yCACP,SAAC,SAAS,UAAU,qCAC7B,AAAQ,yBAAC,KAAK,GAAI,AAAM,KAAD,KAAoB,aAAhB,AAAS,8BAAS,IAAI,OAAO;IAEpE;;;;;;EACF","file":"projects_tab.ddc.js"}');
  // Exports:
  return {
    tabs__projects_tab: projects_tab
  };
});

//# sourceMappingURL=projects_tab.ddc.js.map

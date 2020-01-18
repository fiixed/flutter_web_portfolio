define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const theme_inherited_widget = Object.create(dart.library);
  const $_equals = dartx._equals;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 53,
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
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/andrew_bell/widgets/theme_inherited_widget.dart"
      });
    }
  });
  const data$ = dart.privateName(theme_inherited_widget, "ThemeSwitcher.data");
  theme_inherited_widget.ThemeSwitcher = class ThemeSwitcher extends framework.InheritedWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static of(context) {
      return theme_inherited_widget.ThemeSwitcher.as(context.inheritFromWidgetOfExactType(dart.wrapType(theme_inherited_widget.ThemeSwitcher))).data;
    }
    updateShouldNotify(old) {
      theme_inherited_widget.ThemeSwitcher._check(old);
      return !this[$_equals](old);
    }
  };
  (theme_inherited_widget.ThemeSwitcher.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/andrew_bell/widgets/theme_inherited_widget.dart", 10, 16, "child != null");
    theme_inherited_widget.ThemeSwitcher.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = theme_inherited_widget.ThemeSwitcher.prototype;
  dart.addTypeTests(theme_inherited_widget.ThemeSwitcher);
  dart.setMethodSignature(theme_inherited_widget.ThemeSwitcher, () => ({
    __proto__: dart.getMethods(theme_inherited_widget.ThemeSwitcher.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(theme_inherited_widget.ThemeSwitcher, "package:andrew_bell/widgets/theme_inherited_widget.dart");
  dart.setFieldSignature(theme_inherited_widget.ThemeSwitcher, () => ({
    __proto__: dart.getFields(theme_inherited_widget.ThemeSwitcher.__proto__),
    data: dart.finalFieldType(theme_inherited_widget._ThemeSwitcherWidgetState)
  }));
  const initialDarkModeOn$ = dart.privateName(theme_inherited_widget, "ThemeSwitcherWidget.initialDarkModeOn");
  const child$ = dart.privateName(theme_inherited_widget, "ThemeSwitcherWidget.child");
  theme_inherited_widget.ThemeSwitcherWidget = class ThemeSwitcherWidget extends framework.StatefulWidget {
    get initialDarkModeOn() {
      return this[initialDarkModeOn$];
    }
    set initialDarkModeOn(value) {
      super.initialDarkModeOn = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new theme_inherited_widget._ThemeSwitcherWidgetState.new();
    }
  };
  (theme_inherited_widget.ThemeSwitcherWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialDarkModeOn = opts && 'initialDarkModeOn' in opts ? opts.initialDarkModeOn : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialDarkModeOn$] = initialDarkModeOn;
    this[child$] = child;
    if (!(initialDarkModeOn != null)) dart.assertFailed(null, "org-dartlang-app:///packages/andrew_bell/widgets/theme_inherited_widget.dart", 30, 16, "initialDarkModeOn != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/andrew_bell/widgets/theme_inherited_widget.dart", 31, 16, "child != null");
    theme_inherited_widget.ThemeSwitcherWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = theme_inherited_widget.ThemeSwitcherWidget.prototype;
  dart.addTypeTests(theme_inherited_widget.ThemeSwitcherWidget);
  dart.setMethodSignature(theme_inherited_widget.ThemeSwitcherWidget, () => ({
    __proto__: dart.getMethods(theme_inherited_widget.ThemeSwitcherWidget.__proto__),
    createState: dart.fnType(theme_inherited_widget._ThemeSwitcherWidgetState, [])
  }));
  dart.setLibraryUri(theme_inherited_widget.ThemeSwitcherWidget, "package:andrew_bell/widgets/theme_inherited_widget.dart");
  dart.setFieldSignature(theme_inherited_widget.ThemeSwitcherWidget, () => ({
    __proto__: dart.getFields(theme_inherited_widget.ThemeSwitcherWidget.__proto__),
    initialDarkModeOn: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  theme_inherited_widget._ThemeSwitcherWidgetState = class _ThemeSwitcherWidgetState extends framework.State$(theme_inherited_widget.ThemeSwitcherWidget) {
    switchDarkMode() {
      this.setState(dart.fn(() => {
        this.isDarkModeOn = !dart.test(this.isDarkModeOn);
      }, VoidToNull()));
    }
    build(context) {
      let t0;
      this.isDarkModeOn = (t0 = this.isDarkModeOn, t0 == null ? this.widget.initialDarkModeOn : t0);
      return new theme_inherited_widget.ThemeSwitcher.new({data: this, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (theme_inherited_widget._ThemeSwitcherWidgetState.new = function() {
    this.isDarkModeOn = null;
    theme_inherited_widget._ThemeSwitcherWidgetState.__proto__.new.call(this);
    ;
  }).prototype = theme_inherited_widget._ThemeSwitcherWidgetState.prototype;
  dart.addTypeTests(theme_inherited_widget._ThemeSwitcherWidgetState);
  dart.setMethodSignature(theme_inherited_widget._ThemeSwitcherWidgetState, () => ({
    __proto__: dart.getMethods(theme_inherited_widget._ThemeSwitcherWidgetState.__proto__),
    switchDarkMode: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(theme_inherited_widget._ThemeSwitcherWidgetState, "package:andrew_bell/widgets/theme_inherited_widget.dart");
  dart.setFieldSignature(theme_inherited_widget._ThemeSwitcherWidgetState, () => ({
    __proto__: dart.getFields(theme_inherited_widget._ThemeSwitcherWidgetState.__proto__),
    isDarkModeOn: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/andrew_bell/widgets/theme_inherited_widget", {
    "package:andrew_bell/widgets/theme_inherited_widget.dart": theme_inherited_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["theme_inherited_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGkC;;;;;;cASiB;AAC/C,YACA,AACK,yCAFG,AAAQ,OAAD,8BAA8B;IAG/C;;kDAGsC;AACpC,YAAY,EAAL,eAAQ,GAAG;IACpB;;;QAfM;QACW;QACE;;IADF;UAEJ,AAAM,KAAD,IAAI;AAChB,wEAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;IAexB;;;;;;IACE;;;;;;;AAQ8B;IAA2B;;;QAN7C;QAAU;QAAwB;;IAAxB;IAAwB;UAC9C,AAAkB,iBAAD,IAAI;UACrB,AAAM,KAAD,IAAI;AAChB,8EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;AAajB,MAFF,cAAS;AACqB,QAA5B,oBAAe,WAAC;;IAEpB;UAG0B;;AAC+B,MAAvD,qBAA4B,8BAAb,OAAgB,AAAO;AACtC,YAAO,qDACC,aACC,AAAO;IAElB;;;IAfK;;;EAgBP","file":"theme_inherited_widget.ddc.js"}');
  // Exports:
  return {
    widgets__theme_inherited_widget: theme_inherited_widget
  };
});

//# sourceMappingURL=theme_inherited_widget.ddc.js.map

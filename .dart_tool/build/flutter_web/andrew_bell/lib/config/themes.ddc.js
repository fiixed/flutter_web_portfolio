define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const theme = packages__flutter__material.src__material__theme;
  const color_scheme = packages__flutter__material.src__material__color_scheme;
  const app_bar_theme = packages__flutter__material.src__material__app_bar_theme;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const themes = Object.create(dart.library);
  const CT = Object.create(null);
  themes.darkTheme = function darkTheme(context) {
    return theme_data.ThemeData.new({fontFamily: "GoogleSansRegular", primarySwatch: colors.Colors.blue, primaryColor: colors.Colors.black, accentColor: colors.Colors.blue, disabledColor: colors.Colors.grey, cardColor: new ui.Color.new(4280230180), canvasColor: colors.Colors.black, brightness: ui.Brightness.dark, buttonTheme: theme.Theme.of(framework.BuildContext._check(context)).buttonTheme.copyWith({colorScheme: new color_scheme.ColorScheme.dark(), buttonColor: colors.Colors.blue, splashColor: colors.Colors.black}), appBarTheme: new app_bar_theme.AppBarTheme.new({elevation: 0.0})});
  };
  themes.lightTheme = function lightTheme(context) {
    return theme_data.ThemeData.new({fontFamily: "GoogleSansRegular", primarySwatch: colors.Colors.blue, primaryColor: colors.Colors.white, accentColor: colors.Colors.blue, disabledColor: colors.Colors.grey, cardColor: colors.Colors.white, canvasColor: colors.Colors.white, brightness: ui.Brightness.light, buttonTheme: theme.Theme.of(framework.BuildContext._check(context)).buttonTheme.copyWith({colorScheme: new color_scheme.ColorScheme.light(), buttonColor: colors.Colors.blue, splashColor: colors.Colors.white}), appBarTheme: new app_bar_theme.AppBarTheme.new({elevation: 0.0})});
  };
  dart.trackLibraries("packages/andrew_bell/config/themes", {
    "package:andrew_bell/config/themes.dart": themes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["themes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;wCACU;AACR,UAAO,uCACO,oCACU,kCACD,kCACD,mCACE,+BACX,iBAAM,0BACG,iCACG,iCACJ,AAAY,AAAY,6CAArB,OAAO,sCACA,kDACL,iCACA,oCACX,8CACA;EAGjB;0CACW;AACT,UAAO,uCACQ,oCACS,kCACD,kCACD,mCACE,+BACJ,kCACE,iCACG,kCACJ,AAAY,AAAY,6CAArB,OAAO,sCACA,mDACL,iCACA,oCACX,8CACA;EAGjB","file":"themes.ddc.js"}');
  // Exports:
  return {
    config__themes: themes
  };
});

//# sourceMappingURL=themes.ddc.js.map

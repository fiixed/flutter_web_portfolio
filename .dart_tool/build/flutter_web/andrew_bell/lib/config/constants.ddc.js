define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const constants = Object.create(dart.library);
  const CT = Object.create(null);
  constants.Constants = class Constants extends core.Object {};
  (constants.Constants.new = function() {
    ;
  }).prototype = constants.Constants.prototype;
  dart.addTypeTests(constants.Constants);
  dart.setLibraryUri(constants.Constants, "package:andrew_bell/config/constants.dart");
  dart.defineLazy(constants.Constants, {
    /*constants.Constants.PROFILE_LINKEDIN*/get PROFILE_LINKEDIN() {
      return "https://www.linkedin.com/in/andrewrbell/";
    },
    /*constants.Constants.PROFILE_GITHUB*/get PROFILE_GITHUB() {
      return "https://github.com/fiixed/";
    }
  });
  dart.trackLibraries("packages/andrew_bell/config/constants", {
    "package:andrew_bell/config/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;;;EAGA;;;;MAFe,oCAAgB;;;MAChB,kCAAc","file":"constants.ddc.js"}');
  // Exports:
  return {
    config__constants: constants
  };
});

//# sourceMappingURL=constants.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assets = Object.create(dart.library);
  const CT = Object.create(null);
  assets.Assets = class Assets extends core.Object {};
  (assets.Assets.new = function() {
    ;
  }).prototype = assets.Assets.prototype;
  dart.addTypeTests(assets.Assets);
  dart.setLibraryUri(assets.Assets, "package:andrew_bell/config/assets.dart");
  dart.defineLazy(assets.Assets, {
    /*assets.Assets.moon*/get moon() {
      return "assets/moon.png";
    },
    /*assets.Assets.avatar*/get avatar() {
      return "assets/avatar.jpg";
    },
    /*assets.Assets.facebook*/get facebook() {
      return "assets/facebook.png";
    },
    /*assets.Assets.github*/get github() {
      return "assets/github.png";
    },
    /*assets.Assets.instagram*/get instagram() {
      return "assets/instagram.png";
    },
    /*assets.Assets.linkedin*/get linkedin() {
      return "assets/linkedin.png";
    },
    /*assets.Assets.medium*/get medium() {
      return "assets/medium.png";
    },
    /*assets.Assets.twitter*/get twitter() {
      return "assets/twitter.png";
    },
    /*assets.Assets.video_diary*/get video_diary() {
      return "assets/works/video_diary.png";
    },
    /*assets.Assets.agview*/get agview() {
      return "assets/works/agview.png";
    },
    /*assets.Assets.sirius_kickoff*/get sirius_kickoff() {
      return "assets/works/sirius_kickoff.png";
    },
    /*assets.Assets.sirius_madness*/get sirius_madness() {
      return "assets/works/sirius_madness.png";
    },
    /*assets.Assets.davis_vision*/get davis_vision() {
      return "assets/works/davis_vision.png";
    },
    /*assets.Assets.tram_tracker*/get tram_tracker() {
      return "assets/works/tram_tracker.png";
    },
    /*assets.Assets.invest_austin*/get invest_austin() {
      return "assets/works/invest_austin.png";
    }
  });
  dart.trackLibraries("packages/andrew_bell/config/assets", {
    "package:andrew_bell/config/assets.dart": assets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["assets.dart"],"names":[],"mappings":";;;;;;;;;;EAgBA;;;;MAfe,kBAAI;;;MACJ,oBAAM;;;MACN,sBAAQ;;;MACR,oBAAM;;;MACN,uBAAS;;;MACT,sBAAQ;;;MACR,oBAAM;;;MACN,qBAAO;;;MACP,yBAAW;;;MACX,oBAAM;;;MACN,4BAAc;;;MACd,4BAAc;;;MACd,0BAAY;;;MACZ,0BAAY;;;MACZ,2BAAa","file":"assets.ddc.js"}');
  // Exports:
  return {
    config__assets: assets
  };
});

//# sourceMappingURL=assets.ddc.js.map

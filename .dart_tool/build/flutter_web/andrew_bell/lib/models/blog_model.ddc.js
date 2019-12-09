define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const blog_model = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $map = dartx.map;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfTags = () => (JSArrayOfTags = dart.constFn(_interceptors.JSArray$(blog_model.Tags)))();
  let TagsToMapOfString$dynamic = () => (TagsToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [blog_model.Tags])))();
  let JSArrayOfEntries = () => (JSArrayOfEntries = dart.constFn(_interceptors.JSArray$(blog_model.Entries)))();
  let EntriesToMapOfString$dynamic = () => (EntriesToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [blog_model.Entries])))();
  let JSArrayOfAlts = () => (JSArrayOfAlts = dart.constFn(_interceptors.JSArray$(blog_model.Alts)))();
  let AltsToMapOfString$dynamic = () => (AltsToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [blog_model.Alts])))();
  let JSArrayOfParagraphs = () => (JSArrayOfParagraphs = dart.constFn(_interceptors.JSArray$(blog_model.Paragraphs)))();
  let JSArrayOfSections = () => (JSArrayOfSections = dart.constFn(_interceptors.JSArray$(blog_model.Sections)))();
  let ParagraphsToMapOfString$dynamic = () => (ParagraphsToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [blog_model.Paragraphs])))();
  let SectionsToMapOfString$dynamic = () => (SectionsToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [blog_model.Sections])))();
  const CT = Object.create(null);
  const id$ = dart.privateName(blog_model, "Blog.id");
  const versionId$ = dart.privateName(blog_model, "Blog.versionId");
  const creatorId$ = dart.privateName(blog_model, "Blog.creatorId");
  const homeCollectionId$ = dart.privateName(blog_model, "Blog.homeCollectionId");
  const title$ = dart.privateName(blog_model, "Blog.title");
  const detectedLanguage$ = dart.privateName(blog_model, "Blog.detectedLanguage");
  const latestVersion$ = dart.privateName(blog_model, "Blog.latestVersion");
  const latestPublishedVersion$ = dart.privateName(blog_model, "Blog.latestPublishedVersion");
  const hasUnpublishedEdits$ = dart.privateName(blog_model, "Blog.hasUnpublishedEdits");
  const latestRev$ = dart.privateName(blog_model, "Blog.latestRev");
  const createdAt$ = dart.privateName(blog_model, "Blog.createdAt");
  const updatedAt$ = dart.privateName(blog_model, "Blog.updatedAt");
  const acceptedAt$ = dart.privateName(blog_model, "Blog.acceptedAt");
  const firstPublishedAt$ = dart.privateName(blog_model, "Blog.firstPublishedAt");
  const latestPublishedAt$ = dart.privateName(blog_model, "Blog.latestPublishedAt");
  const vote$ = dart.privateName(blog_model, "Blog.vote");
  const experimentalCss$ = dart.privateName(blog_model, "Blog.experimentalCss");
  const displayAuthor$ = dart.privateName(blog_model, "Blog.displayAuthor");
  const content$ = dart.privateName(blog_model, "Blog.content");
  const virtuals$ = dart.privateName(blog_model, "Blog.virtuals");
  const coverless$ = dart.privateName(blog_model, "Blog.coverless");
  const slug$ = dart.privateName(blog_model, "Blog.slug");
  const translationSourcePostId$ = dart.privateName(blog_model, "Blog.translationSourcePostId");
  const translationSourceCreatorId$ = dart.privateName(blog_model, "Blog.translationSourceCreatorId");
  const isApprovedTranslation$ = dart.privateName(blog_model, "Blog.isApprovedTranslation");
  const inResponseToPostId$ = dart.privateName(blog_model, "Blog.inResponseToPostId");
  const inResponseToRemovedAt$ = dart.privateName(blog_model, "Blog.inResponseToRemovedAt");
  const isTitleSynthesized$ = dart.privateName(blog_model, "Blog.isTitleSynthesized");
  const allowResponses$ = dart.privateName(blog_model, "Blog.allowResponses");
  const importedUrl$ = dart.privateName(blog_model, "Blog.importedUrl");
  const importedPublishedAt$ = dart.privateName(blog_model, "Blog.importedPublishedAt");
  const visibility$ = dart.privateName(blog_model, "Blog.visibility");
  const uniqueSlug$ = dart.privateName(blog_model, "Blog.uniqueSlug");
  const previewContent$ = dart.privateName(blog_model, "Blog.previewContent");
  const license$ = dart.privateName(blog_model, "Blog.license");
  const inResponseToMediaResourceId$ = dart.privateName(blog_model, "Blog.inResponseToMediaResourceId");
  const canonicalUrl$ = dart.privateName(blog_model, "Blog.canonicalUrl");
  const approvedHomeCollectionId$ = dart.privateName(blog_model, "Blog.approvedHomeCollectionId");
  const newsletterId$ = dart.privateName(blog_model, "Blog.newsletterId");
  const suggestionReason$ = dart.privateName(blog_model, "Blog.suggestionReason");
  const webCanonicalUrl$ = dart.privateName(blog_model, "Blog.webCanonicalUrl");
  const mediumUrl$ = dart.privateName(blog_model, "Blog.mediumUrl");
  const migrationId$ = dart.privateName(blog_model, "Blog.migrationId");
  const notifyFollowers$ = dart.privateName(blog_model, "Blog.notifyFollowers");
  const notifyTwitter$ = dart.privateName(blog_model, "Blog.notifyTwitter");
  const notifyFacebook$ = dart.privateName(blog_model, "Blog.notifyFacebook");
  const responseHiddenOnParentPostAt$ = dart.privateName(blog_model, "Blog.responseHiddenOnParentPostAt");
  const isSeries$ = dart.privateName(blog_model, "Blog.isSeries");
  const isSubscriptionLocked$ = dart.privateName(blog_model, "Blog.isSubscriptionLocked");
  const seriesLastAppendedAt$ = dart.privateName(blog_model, "Blog.seriesLastAppendedAt");
  const audioVersionDurationSec$ = dart.privateName(blog_model, "Blog.audioVersionDurationSec");
  const sequenceId$ = dart.privateName(blog_model, "Blog.sequenceId");
  const isEligibleForRevenue$ = dart.privateName(blog_model, "Blog.isEligibleForRevenue");
  const isBlockedFromHightower$ = dart.privateName(blog_model, "Blog.isBlockedFromHightower");
  const deletedAt$ = dart.privateName(blog_model, "Blog.deletedAt");
  const lockedPostSource$ = dart.privateName(blog_model, "Blog.lockedPostSource");
  const hightowerMinimumGuaranteeStartsAt$ = dart.privateName(blog_model, "Blog.hightowerMinimumGuaranteeStartsAt");
  const hightowerMinimumGuaranteeEndsAt$ = dart.privateName(blog_model, "Blog.hightowerMinimumGuaranteeEndsAt");
  const featureLockRequestAcceptedAt$ = dart.privateName(blog_model, "Blog.featureLockRequestAcceptedAt");
  const mongerRequestType$ = dart.privateName(blog_model, "Blog.mongerRequestType");
  const layerCake$ = dart.privateName(blog_model, "Blog.layerCake");
  const socialTitle$ = dart.privateName(blog_model, "Blog.socialTitle");
  const socialDek$ = dart.privateName(blog_model, "Blog.socialDek");
  const editorialPreviewTitle$ = dart.privateName(blog_model, "Blog.editorialPreviewTitle");
  const editorialPreviewDek$ = dart.privateName(blog_model, "Blog.editorialPreviewDek");
  const curationEligibleAt$ = dart.privateName(blog_model, "Blog.curationEligibleAt");
  const isProxyPost$ = dart.privateName(blog_model, "Blog.isProxyPost");
  const proxyPostFaviconUrl$ = dart.privateName(blog_model, "Blog.proxyPostFaviconUrl");
  const proxyPostProviderName$ = dart.privateName(blog_model, "Blog.proxyPostProviderName");
  const proxyPostType$ = dart.privateName(blog_model, "Blog.proxyPostType");
  const isSuspended$ = dart.privateName(blog_model, "Blog.isSuspended");
  const isLimitedState$ = dart.privateName(blog_model, "Blog.isLimitedState");
  const type$ = dart.privateName(blog_model, "Blog.type");
  blog_model.Blog = class Blog extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get versionId() {
      return this[versionId$];
    }
    set versionId(value) {
      this[versionId$] = value;
    }
    get creatorId() {
      return this[creatorId$];
    }
    set creatorId(value) {
      this[creatorId$] = value;
    }
    get homeCollectionId() {
      return this[homeCollectionId$];
    }
    set homeCollectionId(value) {
      this[homeCollectionId$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get detectedLanguage() {
      return this[detectedLanguage$];
    }
    set detectedLanguage(value) {
      this[detectedLanguage$] = value;
    }
    get latestVersion() {
      return this[latestVersion$];
    }
    set latestVersion(value) {
      this[latestVersion$] = value;
    }
    get latestPublishedVersion() {
      return this[latestPublishedVersion$];
    }
    set latestPublishedVersion(value) {
      this[latestPublishedVersion$] = value;
    }
    get hasUnpublishedEdits() {
      return this[hasUnpublishedEdits$];
    }
    set hasUnpublishedEdits(value) {
      this[hasUnpublishedEdits$] = value;
    }
    get latestRev() {
      return this[latestRev$];
    }
    set latestRev(value) {
      this[latestRev$] = value;
    }
    get createdAt() {
      return this[createdAt$];
    }
    set createdAt(value) {
      this[createdAt$] = value;
    }
    get updatedAt() {
      return this[updatedAt$];
    }
    set updatedAt(value) {
      this[updatedAt$] = value;
    }
    get acceptedAt() {
      return this[acceptedAt$];
    }
    set acceptedAt(value) {
      this[acceptedAt$] = value;
    }
    get firstPublishedAt() {
      return this[firstPublishedAt$];
    }
    set firstPublishedAt(value) {
      this[firstPublishedAt$] = value;
    }
    get latestPublishedAt() {
      return this[latestPublishedAt$];
    }
    set latestPublishedAt(value) {
      this[latestPublishedAt$] = value;
    }
    get vote() {
      return this[vote$];
    }
    set vote(value) {
      this[vote$] = value;
    }
    get experimentalCss() {
      return this[experimentalCss$];
    }
    set experimentalCss(value) {
      this[experimentalCss$] = value;
    }
    get displayAuthor() {
      return this[displayAuthor$];
    }
    set displayAuthor(value) {
      this[displayAuthor$] = value;
    }
    get content() {
      return this[content$];
    }
    set content(value) {
      this[content$] = value;
    }
    get virtuals() {
      return this[virtuals$];
    }
    set virtuals(value) {
      this[virtuals$] = value;
    }
    get coverless() {
      return this[coverless$];
    }
    set coverless(value) {
      this[coverless$] = value;
    }
    get slug() {
      return this[slug$];
    }
    set slug(value) {
      this[slug$] = value;
    }
    get translationSourcePostId() {
      return this[translationSourcePostId$];
    }
    set translationSourcePostId(value) {
      this[translationSourcePostId$] = value;
    }
    get translationSourceCreatorId() {
      return this[translationSourceCreatorId$];
    }
    set translationSourceCreatorId(value) {
      this[translationSourceCreatorId$] = value;
    }
    get isApprovedTranslation() {
      return this[isApprovedTranslation$];
    }
    set isApprovedTranslation(value) {
      this[isApprovedTranslation$] = value;
    }
    get inResponseToPostId() {
      return this[inResponseToPostId$];
    }
    set inResponseToPostId(value) {
      this[inResponseToPostId$] = value;
    }
    get inResponseToRemovedAt() {
      return this[inResponseToRemovedAt$];
    }
    set inResponseToRemovedAt(value) {
      this[inResponseToRemovedAt$] = value;
    }
    get isTitleSynthesized() {
      return this[isTitleSynthesized$];
    }
    set isTitleSynthesized(value) {
      this[isTitleSynthesized$] = value;
    }
    get allowResponses() {
      return this[allowResponses$];
    }
    set allowResponses(value) {
      this[allowResponses$] = value;
    }
    get importedUrl() {
      return this[importedUrl$];
    }
    set importedUrl(value) {
      this[importedUrl$] = value;
    }
    get importedPublishedAt() {
      return this[importedPublishedAt$];
    }
    set importedPublishedAt(value) {
      this[importedPublishedAt$] = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      this[visibility$] = value;
    }
    get uniqueSlug() {
      return this[uniqueSlug$];
    }
    set uniqueSlug(value) {
      this[uniqueSlug$] = value;
    }
    get previewContent() {
      return this[previewContent$];
    }
    set previewContent(value) {
      this[previewContent$] = value;
    }
    get license() {
      return this[license$];
    }
    set license(value) {
      this[license$] = value;
    }
    get inResponseToMediaResourceId() {
      return this[inResponseToMediaResourceId$];
    }
    set inResponseToMediaResourceId(value) {
      this[inResponseToMediaResourceId$] = value;
    }
    get canonicalUrl() {
      return this[canonicalUrl$];
    }
    set canonicalUrl(value) {
      this[canonicalUrl$] = value;
    }
    get approvedHomeCollectionId() {
      return this[approvedHomeCollectionId$];
    }
    set approvedHomeCollectionId(value) {
      this[approvedHomeCollectionId$] = value;
    }
    get newsletterId() {
      return this[newsletterId$];
    }
    set newsletterId(value) {
      this[newsletterId$] = value;
    }
    get suggestionReason() {
      return this[suggestionReason$];
    }
    set suggestionReason(value) {
      this[suggestionReason$] = value;
    }
    get webCanonicalUrl() {
      return this[webCanonicalUrl$];
    }
    set webCanonicalUrl(value) {
      this[webCanonicalUrl$] = value;
    }
    get mediumUrl() {
      return this[mediumUrl$];
    }
    set mediumUrl(value) {
      this[mediumUrl$] = value;
    }
    get migrationId() {
      return this[migrationId$];
    }
    set migrationId(value) {
      this[migrationId$] = value;
    }
    get notifyFollowers() {
      return this[notifyFollowers$];
    }
    set notifyFollowers(value) {
      this[notifyFollowers$] = value;
    }
    get notifyTwitter() {
      return this[notifyTwitter$];
    }
    set notifyTwitter(value) {
      this[notifyTwitter$] = value;
    }
    get notifyFacebook() {
      return this[notifyFacebook$];
    }
    set notifyFacebook(value) {
      this[notifyFacebook$] = value;
    }
    get responseHiddenOnParentPostAt() {
      return this[responseHiddenOnParentPostAt$];
    }
    set responseHiddenOnParentPostAt(value) {
      this[responseHiddenOnParentPostAt$] = value;
    }
    get isSeries() {
      return this[isSeries$];
    }
    set isSeries(value) {
      this[isSeries$] = value;
    }
    get isSubscriptionLocked() {
      return this[isSubscriptionLocked$];
    }
    set isSubscriptionLocked(value) {
      this[isSubscriptionLocked$] = value;
    }
    get seriesLastAppendedAt() {
      return this[seriesLastAppendedAt$];
    }
    set seriesLastAppendedAt(value) {
      this[seriesLastAppendedAt$] = value;
    }
    get audioVersionDurationSec() {
      return this[audioVersionDurationSec$];
    }
    set audioVersionDurationSec(value) {
      this[audioVersionDurationSec$] = value;
    }
    get sequenceId() {
      return this[sequenceId$];
    }
    set sequenceId(value) {
      this[sequenceId$] = value;
    }
    get isEligibleForRevenue() {
      return this[isEligibleForRevenue$];
    }
    set isEligibleForRevenue(value) {
      this[isEligibleForRevenue$] = value;
    }
    get isBlockedFromHightower() {
      return this[isBlockedFromHightower$];
    }
    set isBlockedFromHightower(value) {
      this[isBlockedFromHightower$] = value;
    }
    get deletedAt() {
      return this[deletedAt$];
    }
    set deletedAt(value) {
      this[deletedAt$] = value;
    }
    get lockedPostSource() {
      return this[lockedPostSource$];
    }
    set lockedPostSource(value) {
      this[lockedPostSource$] = value;
    }
    get hightowerMinimumGuaranteeStartsAt() {
      return this[hightowerMinimumGuaranteeStartsAt$];
    }
    set hightowerMinimumGuaranteeStartsAt(value) {
      this[hightowerMinimumGuaranteeStartsAt$] = value;
    }
    get hightowerMinimumGuaranteeEndsAt() {
      return this[hightowerMinimumGuaranteeEndsAt$];
    }
    set hightowerMinimumGuaranteeEndsAt(value) {
      this[hightowerMinimumGuaranteeEndsAt$] = value;
    }
    get featureLockRequestAcceptedAt() {
      return this[featureLockRequestAcceptedAt$];
    }
    set featureLockRequestAcceptedAt(value) {
      this[featureLockRequestAcceptedAt$] = value;
    }
    get mongerRequestType() {
      return this[mongerRequestType$];
    }
    set mongerRequestType(value) {
      this[mongerRequestType$] = value;
    }
    get layerCake() {
      return this[layerCake$];
    }
    set layerCake(value) {
      this[layerCake$] = value;
    }
    get socialTitle() {
      return this[socialTitle$];
    }
    set socialTitle(value) {
      this[socialTitle$] = value;
    }
    get socialDek() {
      return this[socialDek$];
    }
    set socialDek(value) {
      this[socialDek$] = value;
    }
    get editorialPreviewTitle() {
      return this[editorialPreviewTitle$];
    }
    set editorialPreviewTitle(value) {
      this[editorialPreviewTitle$] = value;
    }
    get editorialPreviewDek() {
      return this[editorialPreviewDek$];
    }
    set editorialPreviewDek(value) {
      this[editorialPreviewDek$] = value;
    }
    get curationEligibleAt() {
      return this[curationEligibleAt$];
    }
    set curationEligibleAt(value) {
      this[curationEligibleAt$] = value;
    }
    get isProxyPost() {
      return this[isProxyPost$];
    }
    set isProxyPost(value) {
      this[isProxyPost$] = value;
    }
    get proxyPostFaviconUrl() {
      return this[proxyPostFaviconUrl$];
    }
    set proxyPostFaviconUrl(value) {
      this[proxyPostFaviconUrl$] = value;
    }
    get proxyPostProviderName() {
      return this[proxyPostProviderName$];
    }
    set proxyPostProviderName(value) {
      this[proxyPostProviderName$] = value;
    }
    get proxyPostType() {
      return this[proxyPostType$];
    }
    set proxyPostType(value) {
      this[proxyPostType$] = value;
    }
    get isSuspended() {
      return this[isSuspended$];
    }
    set isSuspended(value) {
      this[isSuspended$] = value;
    }
    get isLimitedState() {
      return this[isLimitedState$];
    }
    set isLimitedState(value) {
      this[isLimitedState$] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("id", this.id);
      data[$_set]("versionId", this.versionId);
      data[$_set]("creatorId", this.creatorId);
      data[$_set]("homeCollectionId", this.homeCollectionId);
      data[$_set]("title", this.title);
      data[$_set]("detectedLanguage", this.detectedLanguage);
      data[$_set]("latestVersion", this.latestVersion);
      data[$_set]("latestPublishedVersion", this.latestPublishedVersion);
      data[$_set]("hasUnpublishedEdits", this.hasUnpublishedEdits);
      data[$_set]("latestRev", this.latestRev);
      data[$_set]("createdAt", this.createdAt);
      data[$_set]("updatedAt", this.updatedAt);
      data[$_set]("acceptedAt", this.acceptedAt);
      data[$_set]("firstPublishedAt", this.firstPublishedAt);
      data[$_set]("latestPublishedAt", this.latestPublishedAt);
      data[$_set]("vote", this.vote);
      data[$_set]("experimentalCss", this.experimentalCss);
      data[$_set]("displayAuthor", this.displayAuthor);
      if (this.content != null) {
        data[$_set]("content", this.content.toJson());
      }
      if (this.virtuals != null) {
        data[$_set]("virtuals", this.virtuals.toJson());
      }
      data[$_set]("coverless", this.coverless);
      data[$_set]("slug", this.slug);
      data[$_set]("translationSourcePostId", this.translationSourcePostId);
      data[$_set]("translationSourceCreatorId", this.translationSourceCreatorId);
      data[$_set]("isApprovedTranslation", this.isApprovedTranslation);
      data[$_set]("inResponseToPostId", this.inResponseToPostId);
      data[$_set]("inResponseToRemovedAt", this.inResponseToRemovedAt);
      data[$_set]("isTitleSynthesized", this.isTitleSynthesized);
      data[$_set]("allowResponses", this.allowResponses);
      data[$_set]("importedUrl", this.importedUrl);
      data[$_set]("importedPublishedAt", this.importedPublishedAt);
      data[$_set]("visibility", this.visibility);
      data[$_set]("uniqueSlug", this.uniqueSlug);
      if (this.previewContent != null) {
        data[$_set]("previewContent", this.previewContent.toJson());
      }
      data[$_set]("license", this.license);
      data[$_set]("inResponseToMediaResourceId", this.inResponseToMediaResourceId);
      data[$_set]("canonicalUrl", this.canonicalUrl);
      data[$_set]("approvedHomeCollectionId", this.approvedHomeCollectionId);
      data[$_set]("newsletterId", this.newsletterId);
      if (this.suggestionReason != null) {
        data[$_set]("suggestionReason", this.suggestionReason.toJson());
      }
      data[$_set]("webCanonicalUrl", this.webCanonicalUrl);
      data[$_set]("mediumUrl", this.mediumUrl);
      data[$_set]("migrationId", this.migrationId);
      data[$_set]("notifyFollowers", this.notifyFollowers);
      data[$_set]("notifyTwitter", this.notifyTwitter);
      data[$_set]("notifyFacebook", this.notifyFacebook);
      data[$_set]("responseHiddenOnParentPostAt", this.responseHiddenOnParentPostAt);
      data[$_set]("isSeries", this.isSeries);
      data[$_set]("isSubscriptionLocked", this.isSubscriptionLocked);
      data[$_set]("seriesLastAppendedAt", this.seriesLastAppendedAt);
      data[$_set]("audioVersionDurationSec", this.audioVersionDurationSec);
      data[$_set]("sequenceId", this.sequenceId);
      data[$_set]("isEligibleForRevenue", this.isEligibleForRevenue);
      data[$_set]("isBlockedFromHightower", this.isBlockedFromHightower);
      data[$_set]("deletedAt", this.deletedAt);
      data[$_set]("lockedPostSource", this.lockedPostSource);
      data[$_set]("hightowerMinimumGuaranteeStartsAt", this.hightowerMinimumGuaranteeStartsAt);
      data[$_set]("hightowerMinimumGuaranteeEndsAt", this.hightowerMinimumGuaranteeEndsAt);
      data[$_set]("featureLockRequestAcceptedAt", this.featureLockRequestAcceptedAt);
      data[$_set]("mongerRequestType", this.mongerRequestType);
      data[$_set]("layerCake", this.layerCake);
      data[$_set]("socialTitle", this.socialTitle);
      data[$_set]("socialDek", this.socialDek);
      data[$_set]("editorialPreviewTitle", this.editorialPreviewTitle);
      data[$_set]("editorialPreviewDek", this.editorialPreviewDek);
      data[$_set]("curationEligibleAt", this.curationEligibleAt);
      data[$_set]("isProxyPost", this.isProxyPost);
      data[$_set]("proxyPostFaviconUrl", this.proxyPostFaviconUrl);
      data[$_set]("proxyPostProviderName", this.proxyPostProviderName);
      data[$_set]("proxyPostType", this.proxyPostType);
      data[$_set]("isSuspended", this.isSuspended);
      data[$_set]("isLimitedState", this.isLimitedState);
      data[$_set]("type", this.type);
      return data;
    }
  };
  (blog_model.Blog.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let versionId = opts && 'versionId' in opts ? opts.versionId : null;
    let creatorId = opts && 'creatorId' in opts ? opts.creatorId : null;
    let homeCollectionId = opts && 'homeCollectionId' in opts ? opts.homeCollectionId : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let detectedLanguage = opts && 'detectedLanguage' in opts ? opts.detectedLanguage : null;
    let latestVersion = opts && 'latestVersion' in opts ? opts.latestVersion : null;
    let latestPublishedVersion = opts && 'latestPublishedVersion' in opts ? opts.latestPublishedVersion : null;
    let hasUnpublishedEdits = opts && 'hasUnpublishedEdits' in opts ? opts.hasUnpublishedEdits : null;
    let latestRev = opts && 'latestRev' in opts ? opts.latestRev : null;
    let createdAt = opts && 'createdAt' in opts ? opts.createdAt : null;
    let updatedAt = opts && 'updatedAt' in opts ? opts.updatedAt : null;
    let acceptedAt = opts && 'acceptedAt' in opts ? opts.acceptedAt : null;
    let firstPublishedAt = opts && 'firstPublishedAt' in opts ? opts.firstPublishedAt : null;
    let latestPublishedAt = opts && 'latestPublishedAt' in opts ? opts.latestPublishedAt : null;
    let vote = opts && 'vote' in opts ? opts.vote : null;
    let experimentalCss = opts && 'experimentalCss' in opts ? opts.experimentalCss : null;
    let displayAuthor = opts && 'displayAuthor' in opts ? opts.displayAuthor : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let virtuals = opts && 'virtuals' in opts ? opts.virtuals : null;
    let coverless = opts && 'coverless' in opts ? opts.coverless : null;
    let slug = opts && 'slug' in opts ? opts.slug : null;
    let translationSourcePostId = opts && 'translationSourcePostId' in opts ? opts.translationSourcePostId : null;
    let translationSourceCreatorId = opts && 'translationSourceCreatorId' in opts ? opts.translationSourceCreatorId : null;
    let isApprovedTranslation = opts && 'isApprovedTranslation' in opts ? opts.isApprovedTranslation : null;
    let inResponseToPostId = opts && 'inResponseToPostId' in opts ? opts.inResponseToPostId : null;
    let inResponseToRemovedAt = opts && 'inResponseToRemovedAt' in opts ? opts.inResponseToRemovedAt : null;
    let isTitleSynthesized = opts && 'isTitleSynthesized' in opts ? opts.isTitleSynthesized : null;
    let allowResponses = opts && 'allowResponses' in opts ? opts.allowResponses : null;
    let importedUrl = opts && 'importedUrl' in opts ? opts.importedUrl : null;
    let importedPublishedAt = opts && 'importedPublishedAt' in opts ? opts.importedPublishedAt : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : null;
    let uniqueSlug = opts && 'uniqueSlug' in opts ? opts.uniqueSlug : null;
    let previewContent = opts && 'previewContent' in opts ? opts.previewContent : null;
    let license = opts && 'license' in opts ? opts.license : null;
    let inResponseToMediaResourceId = opts && 'inResponseToMediaResourceId' in opts ? opts.inResponseToMediaResourceId : null;
    let canonicalUrl = opts && 'canonicalUrl' in opts ? opts.canonicalUrl : null;
    let approvedHomeCollectionId = opts && 'approvedHomeCollectionId' in opts ? opts.approvedHomeCollectionId : null;
    let newsletterId = opts && 'newsletterId' in opts ? opts.newsletterId : null;
    let suggestionReason = opts && 'suggestionReason' in opts ? opts.suggestionReason : null;
    let webCanonicalUrl = opts && 'webCanonicalUrl' in opts ? opts.webCanonicalUrl : null;
    let mediumUrl = opts && 'mediumUrl' in opts ? opts.mediumUrl : null;
    let migrationId = opts && 'migrationId' in opts ? opts.migrationId : null;
    let notifyFollowers = opts && 'notifyFollowers' in opts ? opts.notifyFollowers : null;
    let notifyTwitter = opts && 'notifyTwitter' in opts ? opts.notifyTwitter : null;
    let notifyFacebook = opts && 'notifyFacebook' in opts ? opts.notifyFacebook : null;
    let responseHiddenOnParentPostAt = opts && 'responseHiddenOnParentPostAt' in opts ? opts.responseHiddenOnParentPostAt : null;
    let isSeries = opts && 'isSeries' in opts ? opts.isSeries : null;
    let isSubscriptionLocked = opts && 'isSubscriptionLocked' in opts ? opts.isSubscriptionLocked : null;
    let seriesLastAppendedAt = opts && 'seriesLastAppendedAt' in opts ? opts.seriesLastAppendedAt : null;
    let audioVersionDurationSec = opts && 'audioVersionDurationSec' in opts ? opts.audioVersionDurationSec : null;
    let sequenceId = opts && 'sequenceId' in opts ? opts.sequenceId : null;
    let isEligibleForRevenue = opts && 'isEligibleForRevenue' in opts ? opts.isEligibleForRevenue : null;
    let isBlockedFromHightower = opts && 'isBlockedFromHightower' in opts ? opts.isBlockedFromHightower : null;
    let deletedAt = opts && 'deletedAt' in opts ? opts.deletedAt : null;
    let lockedPostSource = opts && 'lockedPostSource' in opts ? opts.lockedPostSource : null;
    let hightowerMinimumGuaranteeStartsAt = opts && 'hightowerMinimumGuaranteeStartsAt' in opts ? opts.hightowerMinimumGuaranteeStartsAt : null;
    let hightowerMinimumGuaranteeEndsAt = opts && 'hightowerMinimumGuaranteeEndsAt' in opts ? opts.hightowerMinimumGuaranteeEndsAt : null;
    let featureLockRequestAcceptedAt = opts && 'featureLockRequestAcceptedAt' in opts ? opts.featureLockRequestAcceptedAt : null;
    let mongerRequestType = opts && 'mongerRequestType' in opts ? opts.mongerRequestType : null;
    let layerCake = opts && 'layerCake' in opts ? opts.layerCake : null;
    let socialTitle = opts && 'socialTitle' in opts ? opts.socialTitle : null;
    let socialDek = opts && 'socialDek' in opts ? opts.socialDek : null;
    let editorialPreviewTitle = opts && 'editorialPreviewTitle' in opts ? opts.editorialPreviewTitle : null;
    let editorialPreviewDek = opts && 'editorialPreviewDek' in opts ? opts.editorialPreviewDek : null;
    let curationEligibleAt = opts && 'curationEligibleAt' in opts ? opts.curationEligibleAt : null;
    let isProxyPost = opts && 'isProxyPost' in opts ? opts.isProxyPost : null;
    let proxyPostFaviconUrl = opts && 'proxyPostFaviconUrl' in opts ? opts.proxyPostFaviconUrl : null;
    let proxyPostProviderName = opts && 'proxyPostProviderName' in opts ? opts.proxyPostProviderName : null;
    let proxyPostType = opts && 'proxyPostType' in opts ? opts.proxyPostType : null;
    let isSuspended = opts && 'isSuspended' in opts ? opts.isSuspended : null;
    let isLimitedState = opts && 'isLimitedState' in opts ? opts.isLimitedState : null;
    let type = opts && 'type' in opts ? opts.type : null;
    this[id$] = id;
    this[versionId$] = versionId;
    this[creatorId$] = creatorId;
    this[homeCollectionId$] = homeCollectionId;
    this[title$] = title;
    this[detectedLanguage$] = detectedLanguage;
    this[latestVersion$] = latestVersion;
    this[latestPublishedVersion$] = latestPublishedVersion;
    this[hasUnpublishedEdits$] = hasUnpublishedEdits;
    this[latestRev$] = latestRev;
    this[createdAt$] = createdAt;
    this[updatedAt$] = updatedAt;
    this[acceptedAt$] = acceptedAt;
    this[firstPublishedAt$] = firstPublishedAt;
    this[latestPublishedAt$] = latestPublishedAt;
    this[vote$] = vote;
    this[experimentalCss$] = experimentalCss;
    this[displayAuthor$] = displayAuthor;
    this[content$] = content;
    this[virtuals$] = virtuals;
    this[coverless$] = coverless;
    this[slug$] = slug;
    this[translationSourcePostId$] = translationSourcePostId;
    this[translationSourceCreatorId$] = translationSourceCreatorId;
    this[isApprovedTranslation$] = isApprovedTranslation;
    this[inResponseToPostId$] = inResponseToPostId;
    this[inResponseToRemovedAt$] = inResponseToRemovedAt;
    this[isTitleSynthesized$] = isTitleSynthesized;
    this[allowResponses$] = allowResponses;
    this[importedUrl$] = importedUrl;
    this[importedPublishedAt$] = importedPublishedAt;
    this[visibility$] = visibility;
    this[uniqueSlug$] = uniqueSlug;
    this[previewContent$] = previewContent;
    this[license$] = license;
    this[inResponseToMediaResourceId$] = inResponseToMediaResourceId;
    this[canonicalUrl$] = canonicalUrl;
    this[approvedHomeCollectionId$] = approvedHomeCollectionId;
    this[newsletterId$] = newsletterId;
    this[suggestionReason$] = suggestionReason;
    this[webCanonicalUrl$] = webCanonicalUrl;
    this[mediumUrl$] = mediumUrl;
    this[migrationId$] = migrationId;
    this[notifyFollowers$] = notifyFollowers;
    this[notifyTwitter$] = notifyTwitter;
    this[notifyFacebook$] = notifyFacebook;
    this[responseHiddenOnParentPostAt$] = responseHiddenOnParentPostAt;
    this[isSeries$] = isSeries;
    this[isSubscriptionLocked$] = isSubscriptionLocked;
    this[seriesLastAppendedAt$] = seriesLastAppendedAt;
    this[audioVersionDurationSec$] = audioVersionDurationSec;
    this[sequenceId$] = sequenceId;
    this[isEligibleForRevenue$] = isEligibleForRevenue;
    this[isBlockedFromHightower$] = isBlockedFromHightower;
    this[deletedAt$] = deletedAt;
    this[lockedPostSource$] = lockedPostSource;
    this[hightowerMinimumGuaranteeStartsAt$] = hightowerMinimumGuaranteeStartsAt;
    this[hightowerMinimumGuaranteeEndsAt$] = hightowerMinimumGuaranteeEndsAt;
    this[featureLockRequestAcceptedAt$] = featureLockRequestAcceptedAt;
    this[mongerRequestType$] = mongerRequestType;
    this[layerCake$] = layerCake;
    this[socialTitle$] = socialTitle;
    this[socialDek$] = socialDek;
    this[editorialPreviewTitle$] = editorialPreviewTitle;
    this[editorialPreviewDek$] = editorialPreviewDek;
    this[curationEligibleAt$] = curationEligibleAt;
    this[isProxyPost$] = isProxyPost;
    this[proxyPostFaviconUrl$] = proxyPostFaviconUrl;
    this[proxyPostProviderName$] = proxyPostProviderName;
    this[proxyPostType$] = proxyPostType;
    this[isSuspended$] = isSuspended;
    this[isLimitedState$] = isLimitedState;
    this[type$] = type;
    ;
  }).prototype = blog_model.Blog.prototype;
  (blog_model.Blog.fromJson = function(json) {
    this[type$] = null;
    this[isLimitedState$] = null;
    this[isSuspended$] = null;
    this[proxyPostType$] = null;
    this[proxyPostProviderName$] = null;
    this[proxyPostFaviconUrl$] = null;
    this[isProxyPost$] = null;
    this[curationEligibleAt$] = null;
    this[editorialPreviewDek$] = null;
    this[editorialPreviewTitle$] = null;
    this[socialDek$] = null;
    this[socialTitle$] = null;
    this[layerCake$] = null;
    this[mongerRequestType$] = null;
    this[featureLockRequestAcceptedAt$] = null;
    this[hightowerMinimumGuaranteeEndsAt$] = null;
    this[hightowerMinimumGuaranteeStartsAt$] = null;
    this[lockedPostSource$] = null;
    this[deletedAt$] = null;
    this[isBlockedFromHightower$] = null;
    this[isEligibleForRevenue$] = null;
    this[sequenceId$] = null;
    this[audioVersionDurationSec$] = null;
    this[seriesLastAppendedAt$] = null;
    this[isSubscriptionLocked$] = null;
    this[isSeries$] = null;
    this[responseHiddenOnParentPostAt$] = null;
    this[notifyFacebook$] = null;
    this[notifyTwitter$] = null;
    this[notifyFollowers$] = null;
    this[migrationId$] = null;
    this[mediumUrl$] = null;
    this[webCanonicalUrl$] = null;
    this[suggestionReason$] = null;
    this[newsletterId$] = null;
    this[approvedHomeCollectionId$] = null;
    this[canonicalUrl$] = null;
    this[inResponseToMediaResourceId$] = null;
    this[license$] = null;
    this[previewContent$] = null;
    this[uniqueSlug$] = null;
    this[visibility$] = null;
    this[importedPublishedAt$] = null;
    this[importedUrl$] = null;
    this[allowResponses$] = null;
    this[isTitleSynthesized$] = null;
    this[inResponseToRemovedAt$] = null;
    this[inResponseToPostId$] = null;
    this[isApprovedTranslation$] = null;
    this[translationSourceCreatorId$] = null;
    this[translationSourcePostId$] = null;
    this[slug$] = null;
    this[coverless$] = null;
    this[virtuals$] = null;
    this[content$] = null;
    this[displayAuthor$] = null;
    this[experimentalCss$] = null;
    this[vote$] = null;
    this[latestPublishedAt$] = null;
    this[firstPublishedAt$] = null;
    this[acceptedAt$] = null;
    this[updatedAt$] = null;
    this[createdAt$] = null;
    this[latestRev$] = null;
    this[hasUnpublishedEdits$] = null;
    this[latestPublishedVersion$] = null;
    this[latestVersion$] = null;
    this[detectedLanguage$] = null;
    this[title$] = null;
    this[homeCollectionId$] = null;
    this[creatorId$] = null;
    this[versionId$] = null;
    this[id$] = null;
    this.id = core.String._check(json[$_get]("id"));
    this.versionId = core.String._check(json[$_get]("versionId"));
    this.creatorId = core.String._check(json[$_get]("creatorId"));
    this.homeCollectionId = core.String._check(json[$_get]("homeCollectionId"));
    this.title = core.String._check(json[$_get]("title"));
    this.detectedLanguage = core.String._check(json[$_get]("detectedLanguage"));
    this.latestVersion = core.String._check(json[$_get]("latestVersion"));
    this.latestPublishedVersion = core.String._check(json[$_get]("latestPublishedVersion"));
    this.hasUnpublishedEdits = core.bool._check(json[$_get]("hasUnpublishedEdits"));
    this.latestRev = core.int._check(json[$_get]("latestRev"));
    this.createdAt = core.int._check(json[$_get]("createdAt"));
    this.updatedAt = core.int._check(json[$_get]("updatedAt"));
    this.acceptedAt = core.int._check(json[$_get]("acceptedAt"));
    this.firstPublishedAt = core.int._check(json[$_get]("firstPublishedAt"));
    this.latestPublishedAt = core.int._check(json[$_get]("latestPublishedAt"));
    this.vote = core.bool._check(json[$_get]("vote"));
    this.experimentalCss = core.String._check(json[$_get]("experimentalCss"));
    this.displayAuthor = core.String._check(json[$_get]("displayAuthor"));
    this.content = json[$_get]("content") != null ? new blog_model.Content.fromJson(MapOfString$dynamic()._check(json[$_get]("content"))) : null;
    this.virtuals = json[$_get]("virtuals") != null ? new blog_model.Virtuals.fromJson(MapOfString$dynamic()._check(json[$_get]("virtuals"))) : null;
    this.coverless = core.bool._check(json[$_get]("coverless"));
    this.slug = core.String._check(json[$_get]("slug"));
    this.translationSourcePostId = core.String._check(json[$_get]("translationSourcePostId"));
    this.translationSourceCreatorId = core.String._check(json[$_get]("translationSourceCreatorId"));
    this.isApprovedTranslation = core.bool._check(json[$_get]("isApprovedTranslation"));
    this.inResponseToPostId = core.String._check(json[$_get]("inResponseToPostId"));
    this.inResponseToRemovedAt = core.int._check(json[$_get]("inResponseToRemovedAt"));
    this.isTitleSynthesized = core.bool._check(json[$_get]("isTitleSynthesized"));
    this.allowResponses = core.bool._check(json[$_get]("allowResponses"));
    this.importedUrl = core.String._check(json[$_get]("importedUrl"));
    this.importedPublishedAt = core.int._check(json[$_get]("importedPublishedAt"));
    this.visibility = core.int._check(json[$_get]("visibility"));
    this.uniqueSlug = core.String._check(json[$_get]("uniqueSlug"));
    this.previewContent = json[$_get]("previewContent") != null ? new blog_model.PreviewContent.fromJson(MapOfString$dynamic()._check(json[$_get]("previewContent"))) : null;
    this.license = core.int._check(json[$_get]("license"));
    this.inResponseToMediaResourceId = core.String._check(json[$_get]("inResponseToMediaResourceId"));
    this.canonicalUrl = core.String._check(json[$_get]("canonicalUrl"));
    this.approvedHomeCollectionId = core.String._check(json[$_get]("approvedHomeCollectionId"));
    this.newsletterId = core.String._check(json[$_get]("newsletterId"));
    this.suggestionReason = json[$_get]("suggestionReason") != null ? new blog_model.SuggestionReason.fromJson(MapOfString$dynamic()._check(json[$_get]("suggestionReason"))) : null;
    this.webCanonicalUrl = core.String._check(json[$_get]("webCanonicalUrl"));
    this.mediumUrl = core.String._check(json[$_get]("mediumUrl"));
    this.migrationId = core.String._check(json[$_get]("migrationId"));
    this.notifyFollowers = core.bool._check(json[$_get]("notifyFollowers"));
    this.notifyTwitter = core.bool._check(json[$_get]("notifyTwitter"));
    this.notifyFacebook = core.bool._check(json[$_get]("notifyFacebook"));
    this.responseHiddenOnParentPostAt = core.int._check(json[$_get]("responseHiddenOnParentPostAt"));
    this.isSeries = core.bool._check(json[$_get]("isSeries"));
    this.isSubscriptionLocked = core.bool._check(json[$_get]("isSubscriptionLocked"));
    this.seriesLastAppendedAt = core.int._check(json[$_get]("seriesLastAppendedAt"));
    this.audioVersionDurationSec = core.int._check(json[$_get]("audioVersionDurationSec"));
    this.sequenceId = core.String._check(json[$_get]("sequenceId"));
    this.isEligibleForRevenue = core.bool._check(json[$_get]("isEligibleForRevenue"));
    this.isBlockedFromHightower = core.bool._check(json[$_get]("isBlockedFromHightower"));
    this.deletedAt = core.int._check(json[$_get]("deletedAt"));
    this.lockedPostSource = core.int._check(json[$_get]("lockedPostSource"));
    this.hightowerMinimumGuaranteeStartsAt = core.int._check(json[$_get]("hightowerMinimumGuaranteeStartsAt"));
    this.hightowerMinimumGuaranteeEndsAt = core.int._check(json[$_get]("hightowerMinimumGuaranteeEndsAt"));
    this.featureLockRequestAcceptedAt = core.int._check(json[$_get]("featureLockRequestAcceptedAt"));
    this.mongerRequestType = core.int._check(json[$_get]("mongerRequestType"));
    this.layerCake = core.int._check(json[$_get]("layerCake"));
    this.socialTitle = core.String._check(json[$_get]("socialTitle"));
    this.socialDek = core.String._check(json[$_get]("socialDek"));
    this.editorialPreviewTitle = core.String._check(json[$_get]("editorialPreviewTitle"));
    this.editorialPreviewDek = core.String._check(json[$_get]("editorialPreviewDek"));
    this.curationEligibleAt = core.int._check(json[$_get]("curationEligibleAt"));
    this.isProxyPost = core.bool._check(json[$_get]("isProxyPost"));
    this.proxyPostFaviconUrl = core.String._check(json[$_get]("proxyPostFaviconUrl"));
    this.proxyPostProviderName = core.String._check(json[$_get]("proxyPostProviderName"));
    this.proxyPostType = core.int._check(json[$_get]("proxyPostType"));
    this.isSuspended = core.bool._check(json[$_get]("isSuspended"));
    this.isLimitedState = core.bool._check(json[$_get]("isLimitedState"));
    this.type = core.String._check(json[$_get]("type"));
  }).prototype = blog_model.Blog.prototype;
  dart.addTypeTests(blog_model.Blog);
  dart.setMethodSignature(blog_model.Blog, () => ({
    __proto__: dart.getMethods(blog_model.Blog.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Blog, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Blog, () => ({
    __proto__: dart.getFields(blog_model.Blog.__proto__),
    id: dart.fieldType(core.String),
    versionId: dart.fieldType(core.String),
    creatorId: dart.fieldType(core.String),
    homeCollectionId: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    detectedLanguage: dart.fieldType(core.String),
    latestVersion: dart.fieldType(core.String),
    latestPublishedVersion: dart.fieldType(core.String),
    hasUnpublishedEdits: dart.fieldType(core.bool),
    latestRev: dart.fieldType(core.int),
    createdAt: dart.fieldType(core.int),
    updatedAt: dart.fieldType(core.int),
    acceptedAt: dart.fieldType(core.int),
    firstPublishedAt: dart.fieldType(core.int),
    latestPublishedAt: dart.fieldType(core.int),
    vote: dart.fieldType(core.bool),
    experimentalCss: dart.fieldType(core.String),
    displayAuthor: dart.fieldType(core.String),
    content: dart.fieldType(blog_model.Content),
    virtuals: dart.fieldType(blog_model.Virtuals),
    coverless: dart.fieldType(core.bool),
    slug: dart.fieldType(core.String),
    translationSourcePostId: dart.fieldType(core.String),
    translationSourceCreatorId: dart.fieldType(core.String),
    isApprovedTranslation: dart.fieldType(core.bool),
    inResponseToPostId: dart.fieldType(core.String),
    inResponseToRemovedAt: dart.fieldType(core.int),
    isTitleSynthesized: dart.fieldType(core.bool),
    allowResponses: dart.fieldType(core.bool),
    importedUrl: dart.fieldType(core.String),
    importedPublishedAt: dart.fieldType(core.int),
    visibility: dart.fieldType(core.int),
    uniqueSlug: dart.fieldType(core.String),
    previewContent: dart.fieldType(blog_model.PreviewContent),
    license: dart.fieldType(core.int),
    inResponseToMediaResourceId: dart.fieldType(core.String),
    canonicalUrl: dart.fieldType(core.String),
    approvedHomeCollectionId: dart.fieldType(core.String),
    newsletterId: dart.fieldType(core.String),
    suggestionReason: dart.fieldType(blog_model.SuggestionReason),
    webCanonicalUrl: dart.fieldType(core.String),
    mediumUrl: dart.fieldType(core.String),
    migrationId: dart.fieldType(core.String),
    notifyFollowers: dart.fieldType(core.bool),
    notifyTwitter: dart.fieldType(core.bool),
    notifyFacebook: dart.fieldType(core.bool),
    responseHiddenOnParentPostAt: dart.fieldType(core.int),
    isSeries: dart.fieldType(core.bool),
    isSubscriptionLocked: dart.fieldType(core.bool),
    seriesLastAppendedAt: dart.fieldType(core.int),
    audioVersionDurationSec: dart.fieldType(core.int),
    sequenceId: dart.fieldType(core.String),
    isEligibleForRevenue: dart.fieldType(core.bool),
    isBlockedFromHightower: dart.fieldType(core.bool),
    deletedAt: dart.fieldType(core.int),
    lockedPostSource: dart.fieldType(core.int),
    hightowerMinimumGuaranteeStartsAt: dart.fieldType(core.int),
    hightowerMinimumGuaranteeEndsAt: dart.fieldType(core.int),
    featureLockRequestAcceptedAt: dart.fieldType(core.int),
    mongerRequestType: dart.fieldType(core.int),
    layerCake: dart.fieldType(core.int),
    socialTitle: dart.fieldType(core.String),
    socialDek: dart.fieldType(core.String),
    editorialPreviewTitle: dart.fieldType(core.String),
    editorialPreviewDek: dart.fieldType(core.String),
    curationEligibleAt: dart.fieldType(core.int),
    isProxyPost: dart.fieldType(core.bool),
    proxyPostFaviconUrl: dart.fieldType(core.String),
    proxyPostProviderName: dart.fieldType(core.String),
    proxyPostType: dart.fieldType(core.int),
    isSuspended: dart.fieldType(core.bool),
    isLimitedState: dart.fieldType(core.bool),
    type: dart.fieldType(core.String)
  }));
  const subtitle$ = dart.privateName(blog_model, "Content.subtitle");
  const postDisplay$ = dart.privateName(blog_model, "Content.postDisplay");
  blog_model.Content = class Content extends core.Object {
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      this[subtitle$] = value;
    }
    get postDisplay() {
      return this[postDisplay$];
    }
    set postDisplay(value) {
      this[postDisplay$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("subtitle", this.subtitle);
      if (this.postDisplay != null) {
        data[$_set]("postDisplay", this.postDisplay.toJson());
      }
      return data;
    }
  };
  (blog_model.Content.new = function(opts) {
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let postDisplay = opts && 'postDisplay' in opts ? opts.postDisplay : null;
    this[subtitle$] = subtitle;
    this[postDisplay$] = postDisplay;
    ;
  }).prototype = blog_model.Content.prototype;
  (blog_model.Content.fromJson = function(json) {
    this[postDisplay$] = null;
    this[subtitle$] = null;
    this.subtitle = core.String._check(json[$_get]("subtitle"));
    this.postDisplay = json[$_get]("postDisplay") != null ? new blog_model.PostDisplay.fromJson(MapOfString$dynamic()._check(json[$_get]("postDisplay"))) : null;
  }).prototype = blog_model.Content.prototype;
  dart.addTypeTests(blog_model.Content);
  dart.setMethodSignature(blog_model.Content, () => ({
    __proto__: dart.getMethods(blog_model.Content.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Content, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Content, () => ({
    __proto__: dart.getFields(blog_model.Content.__proto__),
    subtitle: dart.fieldType(core.String),
    postDisplay: dart.fieldType(blog_model.PostDisplay)
  }));
  const coverless$0 = dart.privateName(blog_model, "PostDisplay.coverless");
  blog_model.PostDisplay = class PostDisplay extends core.Object {
    get coverless() {
      return this[coverless$0];
    }
    set coverless(value) {
      this[coverless$0] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("coverless", this.coverless);
      return data;
    }
  };
  (blog_model.PostDisplay.new = function(opts) {
    let coverless = opts && 'coverless' in opts ? opts.coverless : null;
    this[coverless$0] = coverless;
    ;
  }).prototype = blog_model.PostDisplay.prototype;
  (blog_model.PostDisplay.fromJson = function(json) {
    this[coverless$0] = null;
    this.coverless = core.bool._check(json[$_get]("coverless"));
  }).prototype = blog_model.PostDisplay.prototype;
  dart.addTypeTests(blog_model.PostDisplay);
  dart.setMethodSignature(blog_model.PostDisplay, () => ({
    __proto__: dart.getMethods(blog_model.PostDisplay.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.PostDisplay, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.PostDisplay, () => ({
    __proto__: dart.getFields(blog_model.PostDisplay.__proto__),
    coverless: dart.fieldType(core.bool)
  }));
  const allowNotes$ = dart.privateName(blog_model, "Virtuals.allowNotes");
  const previewImage$ = dart.privateName(blog_model, "Virtuals.previewImage");
  const wordCount$ = dart.privateName(blog_model, "Virtuals.wordCount");
  const imageCount$ = dart.privateName(blog_model, "Virtuals.imageCount");
  const readingTime$ = dart.privateName(blog_model, "Virtuals.readingTime");
  const subtitle$0 = dart.privateName(blog_model, "Virtuals.subtitle");
  const usersBySocialRecommends$ = dart.privateName(blog_model, "Virtuals.usersBySocialRecommends");
  const noIndex$ = dart.privateName(blog_model, "Virtuals.noIndex");
  const recommends$ = dart.privateName(blog_model, "Virtuals.recommends");
  const isBookmarked$ = dart.privateName(blog_model, "Virtuals.isBookmarked");
  const tags$ = dart.privateName(blog_model, "Virtuals.tags");
  const socialRecommendsCount$ = dart.privateName(blog_model, "Virtuals.socialRecommendsCount");
  const responsesCreatedCount$ = dart.privateName(blog_model, "Virtuals.responsesCreatedCount");
  const links$ = dart.privateName(blog_model, "Virtuals.links");
  const isLockedPreviewOnly$ = dart.privateName(blog_model, "Virtuals.isLockedPreviewOnly");
  const metaDescription$ = dart.privateName(blog_model, "Virtuals.metaDescription");
  const totalClapCount$ = dart.privateName(blog_model, "Virtuals.totalClapCount");
  const sectionCount$ = dart.privateName(blog_model, "Virtuals.sectionCount");
  const readingList$ = dart.privateName(blog_model, "Virtuals.readingList");
  const topics$ = dart.privateName(blog_model, "Virtuals.topics");
  blog_model.Virtuals = class Virtuals extends core.Object {
    get allowNotes() {
      return this[allowNotes$];
    }
    set allowNotes(value) {
      this[allowNotes$] = value;
    }
    get previewImage() {
      return this[previewImage$];
    }
    set previewImage(value) {
      this[previewImage$] = value;
    }
    get wordCount() {
      return this[wordCount$];
    }
    set wordCount(value) {
      this[wordCount$] = value;
    }
    get imageCount() {
      return this[imageCount$];
    }
    set imageCount(value) {
      this[imageCount$] = value;
    }
    get readingTime() {
      return this[readingTime$];
    }
    set readingTime(value) {
      this[readingTime$] = value;
    }
    get subtitle() {
      return this[subtitle$0];
    }
    set subtitle(value) {
      this[subtitle$0] = value;
    }
    get usersBySocialRecommends() {
      return this[usersBySocialRecommends$];
    }
    set usersBySocialRecommends(value) {
      this[usersBySocialRecommends$] = value;
    }
    get noIndex() {
      return this[noIndex$];
    }
    set noIndex(value) {
      this[noIndex$] = value;
    }
    get recommends() {
      return this[recommends$];
    }
    set recommends(value) {
      this[recommends$] = value;
    }
    get isBookmarked() {
      return this[isBookmarked$];
    }
    set isBookmarked(value) {
      this[isBookmarked$] = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      this[tags$] = value;
    }
    get socialRecommendsCount() {
      return this[socialRecommendsCount$];
    }
    set socialRecommendsCount(value) {
      this[socialRecommendsCount$] = value;
    }
    get responsesCreatedCount() {
      return this[responsesCreatedCount$];
    }
    set responsesCreatedCount(value) {
      this[responsesCreatedCount$] = value;
    }
    get links() {
      return this[links$];
    }
    set links(value) {
      this[links$] = value;
    }
    get isLockedPreviewOnly() {
      return this[isLockedPreviewOnly$];
    }
    set isLockedPreviewOnly(value) {
      this[isLockedPreviewOnly$] = value;
    }
    get metaDescription() {
      return this[metaDescription$];
    }
    set metaDescription(value) {
      this[metaDescription$] = value;
    }
    get totalClapCount() {
      return this[totalClapCount$];
    }
    set totalClapCount(value) {
      this[totalClapCount$] = value;
    }
    get sectionCount() {
      return this[sectionCount$];
    }
    set sectionCount(value) {
      this[sectionCount$] = value;
    }
    get readingList() {
      return this[readingList$];
    }
    set readingList(value) {
      this[readingList$] = value;
    }
    get topics() {
      return this[topics$];
    }
    set topics(value) {
      this[topics$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("allowNotes", this.allowNotes);
      if (this.previewImage != null) {
        data[$_set]("previewImage", this.previewImage.toJson());
      }
      data[$_set]("wordCount", this.wordCount);
      data[$_set]("imageCount", this.imageCount);
      data[$_set]("readingTime", this.readingTime);
      data[$_set]("subtitle", this.subtitle);
      if (this.usersBySocialRecommends != null) {
        data[$_set]("usersBySocialRecommends", this.usersBySocialRecommends[$toList]());
      }
      data[$_set]("noIndex", this.noIndex);
      data[$_set]("recommends", this.recommends);
      data[$_set]("isBookmarked", this.isBookmarked);
      if (this.tags != null) {
        data[$_set]("tags", this.tags[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), TagsToMapOfString$dynamic()))[$toList]());
      }
      data[$_set]("socialRecommendsCount", this.socialRecommendsCount);
      data[$_set]("responsesCreatedCount", this.responsesCreatedCount);
      if (this.links != null) {
        data[$_set]("links", this.links.toJson());
      }
      data[$_set]("isLockedPreviewOnly", this.isLockedPreviewOnly);
      data[$_set]("metaDescription", this.metaDescription);
      data[$_set]("totalClapCount", this.totalClapCount);
      data[$_set]("sectionCount", this.sectionCount);
      data[$_set]("readingList", this.readingList);
      if (this.topics != null) {
        data[$_set]("topics", this.topics[$toList]());
      }
      return data;
    }
  };
  (blog_model.Virtuals.new = function(opts) {
    let allowNotes = opts && 'allowNotes' in opts ? opts.allowNotes : null;
    let previewImage = opts && 'previewImage' in opts ? opts.previewImage : null;
    let wordCount = opts && 'wordCount' in opts ? opts.wordCount : null;
    let imageCount = opts && 'imageCount' in opts ? opts.imageCount : null;
    let readingTime = opts && 'readingTime' in opts ? opts.readingTime : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let usersBySocialRecommends = opts && 'usersBySocialRecommends' in opts ? opts.usersBySocialRecommends : null;
    let noIndex = opts && 'noIndex' in opts ? opts.noIndex : null;
    let recommends = opts && 'recommends' in opts ? opts.recommends : null;
    let isBookmarked = opts && 'isBookmarked' in opts ? opts.isBookmarked : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let socialRecommendsCount = opts && 'socialRecommendsCount' in opts ? opts.socialRecommendsCount : null;
    let responsesCreatedCount = opts && 'responsesCreatedCount' in opts ? opts.responsesCreatedCount : null;
    let links = opts && 'links' in opts ? opts.links : null;
    let isLockedPreviewOnly = opts && 'isLockedPreviewOnly' in opts ? opts.isLockedPreviewOnly : null;
    let metaDescription = opts && 'metaDescription' in opts ? opts.metaDescription : null;
    let totalClapCount = opts && 'totalClapCount' in opts ? opts.totalClapCount : null;
    let sectionCount = opts && 'sectionCount' in opts ? opts.sectionCount : null;
    let readingList = opts && 'readingList' in opts ? opts.readingList : null;
    let topics = opts && 'topics' in opts ? opts.topics : null;
    this[allowNotes$] = allowNotes;
    this[previewImage$] = previewImage;
    this[wordCount$] = wordCount;
    this[imageCount$] = imageCount;
    this[readingTime$] = readingTime;
    this[subtitle$0] = subtitle;
    this[usersBySocialRecommends$] = usersBySocialRecommends;
    this[noIndex$] = noIndex;
    this[recommends$] = recommends;
    this[isBookmarked$] = isBookmarked;
    this[tags$] = tags;
    this[socialRecommendsCount$] = socialRecommendsCount;
    this[responsesCreatedCount$] = responsesCreatedCount;
    this[links$] = links;
    this[isLockedPreviewOnly$] = isLockedPreviewOnly;
    this[metaDescription$] = metaDescription;
    this[totalClapCount$] = totalClapCount;
    this[sectionCount$] = sectionCount;
    this[readingList$] = readingList;
    this[topics$] = topics;
    ;
  }).prototype = blog_model.Virtuals.prototype;
  (blog_model.Virtuals.fromJson = function(json) {
    this[topics$] = null;
    this[readingList$] = null;
    this[sectionCount$] = null;
    this[totalClapCount$] = null;
    this[metaDescription$] = null;
    this[isLockedPreviewOnly$] = null;
    this[links$] = null;
    this[responsesCreatedCount$] = null;
    this[socialRecommendsCount$] = null;
    this[tags$] = null;
    this[isBookmarked$] = null;
    this[recommends$] = null;
    this[noIndex$] = null;
    this[usersBySocialRecommends$] = null;
    this[subtitle$0] = null;
    this[readingTime$] = null;
    this[imageCount$] = null;
    this[wordCount$] = null;
    this[previewImage$] = null;
    this[allowNotes$] = null;
    this.allowNotes = core.bool._check(json[$_get]("allowNotes"));
    this.previewImage = json[$_get]("previewImage") != null ? new blog_model.PreviewImage.fromJson(MapOfString$dynamic()._check(json[$_get]("previewImage"))) : null;
    this.wordCount = core.int._check(json[$_get]("wordCount"));
    this.imageCount = core.int._check(json[$_get]("imageCount"));
    this.readingTime = core.double._check(json[$_get]("readingTime"));
    this.subtitle = core.String._check(json[$_get]("subtitle"));
    if (json[$_get]("usersBySocialRecommends") != null) {
      this.usersBySocialRecommends = JSArrayOfString().of([]);
      dart.dsend(json[$_get]("usersBySocialRecommends"), 'forEach', [dart.fn(v => {
          this.usersBySocialRecommends[$add](core.String._check(v));
        }, dynamicToNull())]);
    }
    this.noIndex = core.bool._check(json[$_get]("noIndex"));
    this.recommends = core.int._check(json[$_get]("recommends"));
    this.isBookmarked = core.bool._check(json[$_get]("isBookmarked"));
    if (json[$_get]("tags") != null) {
      this.tags = JSArrayOfTags().of([]);
      dart.dsend(json[$_get]("tags"), 'forEach', [dart.fn(v => {
          this.tags[$add](new blog_model.Tags.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
    this.socialRecommendsCount = core.int._check(json[$_get]("socialRecommendsCount"));
    this.responsesCreatedCount = core.int._check(json[$_get]("responsesCreatedCount"));
    this.links = json[$_get]("links") != null ? new blog_model.Links.fromJson(MapOfString$dynamic()._check(json[$_get]("links"))) : null;
    this.isLockedPreviewOnly = core.bool._check(json[$_get]("isLockedPreviewOnly"));
    this.metaDescription = core.String._check(json[$_get]("metaDescription"));
    this.totalClapCount = core.int._check(json[$_get]("totalClapCount"));
    this.sectionCount = core.int._check(json[$_get]("sectionCount"));
    this.readingList = core.int._check(json[$_get]("readingList"));
    if (json[$_get]("topics") != null) {
      this.topics = JSArrayOfString().of([]);
      dart.dsend(json[$_get]("topics"), 'forEach', [dart.fn(v => {
          this.topics[$add](core.String._check(v));
        }, dynamicToNull())]);
    }
  }).prototype = blog_model.Virtuals.prototype;
  dart.addTypeTests(blog_model.Virtuals);
  dart.setMethodSignature(blog_model.Virtuals, () => ({
    __proto__: dart.getMethods(blog_model.Virtuals.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Virtuals, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Virtuals, () => ({
    __proto__: dart.getFields(blog_model.Virtuals.__proto__),
    allowNotes: dart.fieldType(core.bool),
    previewImage: dart.fieldType(blog_model.PreviewImage),
    wordCount: dart.fieldType(core.int),
    imageCount: dart.fieldType(core.int),
    readingTime: dart.fieldType(core.double),
    subtitle: dart.fieldType(core.String),
    usersBySocialRecommends: dart.fieldType(core.List$(core.String)),
    noIndex: dart.fieldType(core.bool),
    recommends: dart.fieldType(core.int),
    isBookmarked: dart.fieldType(core.bool),
    tags: dart.fieldType(core.List$(blog_model.Tags)),
    socialRecommendsCount: dart.fieldType(core.int),
    responsesCreatedCount: dart.fieldType(core.int),
    links: dart.fieldType(blog_model.Links),
    isLockedPreviewOnly: dart.fieldType(core.bool),
    metaDescription: dart.fieldType(core.String),
    totalClapCount: dart.fieldType(core.int),
    sectionCount: dart.fieldType(core.int),
    readingList: dart.fieldType(core.int),
    topics: dart.fieldType(core.List$(core.String))
  }));
  const imageId$ = dart.privateName(blog_model, "PreviewImage.imageId");
  const filter$ = dart.privateName(blog_model, "PreviewImage.filter");
  const backgroundSize$ = dart.privateName(blog_model, "PreviewImage.backgroundSize");
  const originalWidth$ = dart.privateName(blog_model, "PreviewImage.originalWidth");
  const originalHeight$ = dart.privateName(blog_model, "PreviewImage.originalHeight");
  const strategy$ = dart.privateName(blog_model, "PreviewImage.strategy");
  const height$ = dart.privateName(blog_model, "PreviewImage.height");
  const width$ = dart.privateName(blog_model, "PreviewImage.width");
  blog_model.PreviewImage = class PreviewImage extends core.Object {
    get imageId() {
      return this[imageId$];
    }
    set imageId(value) {
      this[imageId$] = value;
    }
    get filter() {
      return this[filter$];
    }
    set filter(value) {
      this[filter$] = value;
    }
    get backgroundSize() {
      return this[backgroundSize$];
    }
    set backgroundSize(value) {
      this[backgroundSize$] = value;
    }
    get originalWidth() {
      return this[originalWidth$];
    }
    set originalWidth(value) {
      this[originalWidth$] = value;
    }
    get originalHeight() {
      return this[originalHeight$];
    }
    set originalHeight(value) {
      this[originalHeight$] = value;
    }
    get strategy() {
      return this[strategy$];
    }
    set strategy(value) {
      this[strategy$] = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      this[height$] = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("imageId", this.imageId);
      data[$_set]("filter", this.filter);
      data[$_set]("backgroundSize", this.backgroundSize);
      data[$_set]("originalWidth", this.originalWidth);
      data[$_set]("originalHeight", this.originalHeight);
      data[$_set]("strategy", this.strategy);
      data[$_set]("height", this.height);
      data[$_set]("width", this.width);
      return data;
    }
  };
  (blog_model.PreviewImage.new = function(opts) {
    let imageId = opts && 'imageId' in opts ? opts.imageId : null;
    let filter = opts && 'filter' in opts ? opts.filter : null;
    let backgroundSize = opts && 'backgroundSize' in opts ? opts.backgroundSize : null;
    let originalWidth = opts && 'originalWidth' in opts ? opts.originalWidth : null;
    let originalHeight = opts && 'originalHeight' in opts ? opts.originalHeight : null;
    let strategy = opts && 'strategy' in opts ? opts.strategy : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let width = opts && 'width' in opts ? opts.width : null;
    this[imageId$] = imageId;
    this[filter$] = filter;
    this[backgroundSize$] = backgroundSize;
    this[originalWidth$] = originalWidth;
    this[originalHeight$] = originalHeight;
    this[strategy$] = strategy;
    this[height$] = height;
    this[width$] = width;
    ;
  }).prototype = blog_model.PreviewImage.prototype;
  (blog_model.PreviewImage.fromJson = function(json) {
    this[width$] = null;
    this[height$] = null;
    this[strategy$] = null;
    this[originalHeight$] = null;
    this[originalWidth$] = null;
    this[backgroundSize$] = null;
    this[filter$] = null;
    this[imageId$] = null;
    this.imageId = core.String._check(json[$_get]("imageId"));
    this.filter = core.String._check(json[$_get]("filter"));
    this.backgroundSize = core.String._check(json[$_get]("backgroundSize"));
    this.originalWidth = core.int._check(json[$_get]("originalWidth"));
    this.originalHeight = core.int._check(json[$_get]("originalHeight"));
    this.strategy = core.String._check(json[$_get]("strategy"));
    this.height = core.int._check(json[$_get]("height"));
    this.width = core.int._check(json[$_get]("width"));
  }).prototype = blog_model.PreviewImage.prototype;
  dart.addTypeTests(blog_model.PreviewImage);
  dart.setMethodSignature(blog_model.PreviewImage, () => ({
    __proto__: dart.getMethods(blog_model.PreviewImage.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.PreviewImage, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.PreviewImage, () => ({
    __proto__: dart.getFields(blog_model.PreviewImage.__proto__),
    imageId: dart.fieldType(core.String),
    filter: dart.fieldType(core.String),
    backgroundSize: dart.fieldType(core.String),
    originalWidth: dart.fieldType(core.int),
    originalHeight: dart.fieldType(core.int),
    strategy: dart.fieldType(core.String),
    height: dart.fieldType(core.int),
    width: dart.fieldType(core.int)
  }));
  const slug$0 = dart.privateName(blog_model, "Tags.slug");
  const name$ = dart.privateName(blog_model, "Tags.name");
  const postCount$ = dart.privateName(blog_model, "Tags.postCount");
  const metadata$ = dart.privateName(blog_model, "Tags.metadata");
  const type$0 = dart.privateName(blog_model, "Tags.type");
  blog_model.Tags = class Tags extends core.Object {
    get slug() {
      return this[slug$0];
    }
    set slug(value) {
      this[slug$0] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get postCount() {
      return this[postCount$];
    }
    set postCount(value) {
      this[postCount$] = value;
    }
    get metadata() {
      return this[metadata$];
    }
    set metadata(value) {
      this[metadata$] = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      this[type$0] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("slug", this.slug);
      data[$_set]("name", this.name);
      data[$_set]("postCount", this.postCount);
      if (this.metadata != null) {
        data[$_set]("metadata", this.metadata.toJson());
      }
      data[$_set]("type", this.type);
      return data;
    }
  };
  (blog_model.Tags.new = function(opts) {
    let slug = opts && 'slug' in opts ? opts.slug : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let postCount = opts && 'postCount' in opts ? opts.postCount : null;
    let metadata = opts && 'metadata' in opts ? opts.metadata : null;
    let type = opts && 'type' in opts ? opts.type : null;
    this[slug$0] = slug;
    this[name$] = name;
    this[postCount$] = postCount;
    this[metadata$] = metadata;
    this[type$0] = type;
    ;
  }).prototype = blog_model.Tags.prototype;
  (blog_model.Tags.fromJson = function(json) {
    this[type$0] = null;
    this[metadata$] = null;
    this[postCount$] = null;
    this[name$] = null;
    this[slug$0] = null;
    this.slug = core.String._check(json[$_get]("slug"));
    this.name = core.String._check(json[$_get]("name"));
    this.postCount = core.int._check(json[$_get]("postCount"));
    this.metadata = json[$_get]("metadata") != null ? new blog_model.Metadata.fromJson(MapOfString$dynamic()._check(json[$_get]("metadata"))) : null;
    this.type = core.String._check(json[$_get]("type"));
  }).prototype = blog_model.Tags.prototype;
  dart.addTypeTests(blog_model.Tags);
  dart.setMethodSignature(blog_model.Tags, () => ({
    __proto__: dart.getMethods(blog_model.Tags.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Tags, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Tags, () => ({
    __proto__: dart.getFields(blog_model.Tags.__proto__),
    slug: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    postCount: dart.fieldType(core.int),
    metadata: dart.fieldType(blog_model.Metadata),
    type: dart.fieldType(core.String)
  }));
  const postCount$0 = dart.privateName(blog_model, "Metadata.postCount");
  const coverImage$ = dart.privateName(blog_model, "Metadata.coverImage");
  blog_model.Metadata = class Metadata extends core.Object {
    get postCount() {
      return this[postCount$0];
    }
    set postCount(value) {
      this[postCount$0] = value;
    }
    get coverImage() {
      return this[coverImage$];
    }
    set coverImage(value) {
      this[coverImage$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("postCount", this.postCount);
      if (this.coverImage != null) {
        data[$_set]("coverImage", this.coverImage.toJson());
      }
      return data;
    }
  };
  (blog_model.Metadata.new = function(opts) {
    let postCount = opts && 'postCount' in opts ? opts.postCount : null;
    let coverImage = opts && 'coverImage' in opts ? opts.coverImage : null;
    this[postCount$0] = postCount;
    this[coverImage$] = coverImage;
    ;
  }).prototype = blog_model.Metadata.prototype;
  (blog_model.Metadata.fromJson = function(json) {
    this[coverImage$] = null;
    this[postCount$0] = null;
    this.postCount = core.int._check(json[$_get]("postCount"));
    this.coverImage = json[$_get]("coverImage") != null ? new blog_model.CoverImage.fromJson(MapOfString$dynamic()._check(json[$_get]("coverImage"))) : null;
  }).prototype = blog_model.Metadata.prototype;
  dart.addTypeTests(blog_model.Metadata);
  dart.setMethodSignature(blog_model.Metadata, () => ({
    __proto__: dart.getMethods(blog_model.Metadata.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Metadata, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Metadata, () => ({
    __proto__: dart.getFields(blog_model.Metadata.__proto__),
    postCount: dart.fieldType(core.int),
    coverImage: dart.fieldType(blog_model.CoverImage)
  }));
  const id$0 = dart.privateName(blog_model, "CoverImage.id");
  const originalWidth$0 = dart.privateName(blog_model, "CoverImage.originalWidth");
  const originalHeight$0 = dart.privateName(blog_model, "CoverImage.originalHeight");
  const isFeatured$ = dart.privateName(blog_model, "CoverImage.isFeatured");
  blog_model.CoverImage = class CoverImage extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      this[id$0] = value;
    }
    get originalWidth() {
      return this[originalWidth$0];
    }
    set originalWidth(value) {
      this[originalWidth$0] = value;
    }
    get originalHeight() {
      return this[originalHeight$0];
    }
    set originalHeight(value) {
      this[originalHeight$0] = value;
    }
    get isFeatured() {
      return this[isFeatured$];
    }
    set isFeatured(value) {
      this[isFeatured$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("id", this.id);
      data[$_set]("originalWidth", this.originalWidth);
      data[$_set]("originalHeight", this.originalHeight);
      data[$_set]("isFeatured", this.isFeatured);
      return data;
    }
  };
  (blog_model.CoverImage.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let originalWidth = opts && 'originalWidth' in opts ? opts.originalWidth : null;
    let originalHeight = opts && 'originalHeight' in opts ? opts.originalHeight : null;
    let isFeatured = opts && 'isFeatured' in opts ? opts.isFeatured : null;
    this[id$0] = id;
    this[originalWidth$0] = originalWidth;
    this[originalHeight$0] = originalHeight;
    this[isFeatured$] = isFeatured;
    ;
  }).prototype = blog_model.CoverImage.prototype;
  (blog_model.CoverImage.fromJson = function(json) {
    this[isFeatured$] = null;
    this[originalHeight$0] = null;
    this[originalWidth$0] = null;
    this[id$0] = null;
    this.id = core.String._check(json[$_get]("id"));
    this.originalWidth = core.int._check(json[$_get]("originalWidth"));
    this.originalHeight = core.int._check(json[$_get]("originalHeight"));
    this.isFeatured = core.bool._check(json[$_get]("isFeatured"));
  }).prototype = blog_model.CoverImage.prototype;
  dart.addTypeTests(blog_model.CoverImage);
  dart.setMethodSignature(blog_model.CoverImage, () => ({
    __proto__: dart.getMethods(blog_model.CoverImage.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.CoverImage, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.CoverImage, () => ({
    __proto__: dart.getFields(blog_model.CoverImage.__proto__),
    id: dart.fieldType(core.String),
    originalWidth: dart.fieldType(core.int),
    originalHeight: dart.fieldType(core.int),
    isFeatured: dart.fieldType(core.bool)
  }));
  const entries$ = dart.privateName(blog_model, "Links.entries");
  const version$ = dart.privateName(blog_model, "Links.version");
  const generatedAt$ = dart.privateName(blog_model, "Links.generatedAt");
  blog_model.Links = class Links extends core.Object {
    get entries() {
      return this[entries$];
    }
    set entries(value) {
      this[entries$] = value;
    }
    get version() {
      return this[version$];
    }
    set version(value) {
      this[version$] = value;
    }
    get generatedAt() {
      return this[generatedAt$];
    }
    set generatedAt(value) {
      this[generatedAt$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.entries != null) {
        data[$_set]("entries", this.entries[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), EntriesToMapOfString$dynamic()))[$toList]());
      }
      data[$_set]("version", this.version);
      data[$_set]("generatedAt", this.generatedAt);
      return data;
    }
  };
  (blog_model.Links.new = function(opts) {
    let entries = opts && 'entries' in opts ? opts.entries : null;
    let version = opts && 'version' in opts ? opts.version : null;
    let generatedAt = opts && 'generatedAt' in opts ? opts.generatedAt : null;
    this[entries$] = entries;
    this[version$] = version;
    this[generatedAt$] = generatedAt;
    ;
  }).prototype = blog_model.Links.prototype;
  (blog_model.Links.fromJson = function(json) {
    this[generatedAt$] = null;
    this[version$] = null;
    this[entries$] = null;
    if (json[$_get]("entries") != null) {
      this.entries = JSArrayOfEntries().of([]);
      dart.dsend(json[$_get]("entries"), 'forEach', [dart.fn(v => {
          this.entries[$add](new blog_model.Entries.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
    this.version = core.String._check(json[$_get]("version"));
    this.generatedAt = core.int._check(json[$_get]("generatedAt"));
  }).prototype = blog_model.Links.prototype;
  dart.addTypeTests(blog_model.Links);
  dart.setMethodSignature(blog_model.Links, () => ({
    __proto__: dart.getMethods(blog_model.Links.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Links, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Links, () => ({
    __proto__: dart.getFields(blog_model.Links.__proto__),
    entries: dart.fieldType(core.List$(blog_model.Entries)),
    version: dart.fieldType(core.String),
    generatedAt: dart.fieldType(core.int)
  }));
  const url$ = dart.privateName(blog_model, "Entries.url");
  const alts$ = dart.privateName(blog_model, "Entries.alts");
  const httpStatus$ = dart.privateName(blog_model, "Entries.httpStatus");
  blog_model.Entries = class Entries extends core.Object {
    get url() {
      return this[url$];
    }
    set url(value) {
      this[url$] = value;
    }
    get alts() {
      return this[alts$];
    }
    set alts(value) {
      this[alts$] = value;
    }
    get httpStatus() {
      return this[httpStatus$];
    }
    set httpStatus(value) {
      this[httpStatus$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("url", this.url);
      if (this.alts != null) {
        data[$_set]("alts", this.alts[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), AltsToMapOfString$dynamic()))[$toList]());
      }
      data[$_set]("httpStatus", this.httpStatus);
      return data;
    }
  };
  (blog_model.Entries.new = function(opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    let alts = opts && 'alts' in opts ? opts.alts : null;
    let httpStatus = opts && 'httpStatus' in opts ? opts.httpStatus : null;
    this[url$] = url;
    this[alts$] = alts;
    this[httpStatus$] = httpStatus;
    ;
  }).prototype = blog_model.Entries.prototype;
  (blog_model.Entries.fromJson = function(json) {
    this[httpStatus$] = null;
    this[alts$] = null;
    this[url$] = null;
    this.url = core.String._check(json[$_get]("url"));
    if (json[$_get]("alts") != null) {
      this.alts = JSArrayOfAlts().of([]);
      dart.dsend(json[$_get]("alts"), 'forEach', [dart.fn(v => {
          this.alts[$add](new blog_model.Alts.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
    this.httpStatus = core.int._check(json[$_get]("httpStatus"));
  }).prototype = blog_model.Entries.prototype;
  dart.addTypeTests(blog_model.Entries);
  dart.setMethodSignature(blog_model.Entries, () => ({
    __proto__: dart.getMethods(blog_model.Entries.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Entries, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Entries, () => ({
    __proto__: dart.getFields(blog_model.Entries.__proto__),
    url: dart.fieldType(core.String),
    alts: dart.fieldType(core.List$(blog_model.Alts)),
    httpStatus: dart.fieldType(core.int)
  }));
  const type$1 = dart.privateName(blog_model, "Alts.type");
  const url$0 = dart.privateName(blog_model, "Alts.url");
  blog_model.Alts = class Alts extends core.Object {
    get type() {
      return this[type$1];
    }
    set type(value) {
      this[type$1] = value;
    }
    get url() {
      return this[url$0];
    }
    set url(value) {
      this[url$0] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("type", this.type);
      data[$_set]("url", this.url);
      return data;
    }
  };
  (blog_model.Alts.new = function(opts) {
    let type = opts && 'type' in opts ? opts.type : null;
    let url = opts && 'url' in opts ? opts.url : null;
    this[type$1] = type;
    this[url$0] = url;
    ;
  }).prototype = blog_model.Alts.prototype;
  (blog_model.Alts.fromJson = function(json) {
    this[url$0] = null;
    this[type$1] = null;
    this.type = core.int._check(json[$_get]("type"));
    this.url = core.String._check(json[$_get]("url"));
  }).prototype = blog_model.Alts.prototype;
  dart.addTypeTests(blog_model.Alts);
  dart.setMethodSignature(blog_model.Alts, () => ({
    __proto__: dart.getMethods(blog_model.Alts.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Alts, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Alts, () => ({
    __proto__: dart.getFields(blog_model.Alts.__proto__),
    type: dart.fieldType(core.int),
    url: dart.fieldType(core.String)
  }));
  const bodyModel$ = dart.privateName(blog_model, "PreviewContent.bodyModel");
  const isFullContent$ = dart.privateName(blog_model, "PreviewContent.isFullContent");
  const subtitle$1 = dart.privateName(blog_model, "PreviewContent.subtitle");
  blog_model.PreviewContent = class PreviewContent extends core.Object {
    get bodyModel() {
      return this[bodyModel$];
    }
    set bodyModel(value) {
      this[bodyModel$] = value;
    }
    get isFullContent() {
      return this[isFullContent$];
    }
    set isFullContent(value) {
      this[isFullContent$] = value;
    }
    get subtitle() {
      return this[subtitle$1];
    }
    set subtitle(value) {
      this[subtitle$1] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.bodyModel != null) {
        data[$_set]("bodyModel", this.bodyModel.toJson());
      }
      data[$_set]("isFullContent", this.isFullContent);
      data[$_set]("subtitle", this.subtitle);
      return data;
    }
  };
  (blog_model.PreviewContent.new = function(opts) {
    let bodyModel = opts && 'bodyModel' in opts ? opts.bodyModel : null;
    let isFullContent = opts && 'isFullContent' in opts ? opts.isFullContent : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    this[bodyModel$] = bodyModel;
    this[isFullContent$] = isFullContent;
    this[subtitle$1] = subtitle;
    ;
  }).prototype = blog_model.PreviewContent.prototype;
  (blog_model.PreviewContent.fromJson = function(json) {
    this[subtitle$1] = null;
    this[isFullContent$] = null;
    this[bodyModel$] = null;
    this.bodyModel = json[$_get]("bodyModel") != null ? new blog_model.BodyModel.fromJson(MapOfString$dynamic()._check(json[$_get]("bodyModel"))) : null;
    this.isFullContent = core.bool._check(json[$_get]("isFullContent"));
    this.subtitle = core.String._check(json[$_get]("subtitle"));
  }).prototype = blog_model.PreviewContent.prototype;
  dart.addTypeTests(blog_model.PreviewContent);
  dart.setMethodSignature(blog_model.PreviewContent, () => ({
    __proto__: dart.getMethods(blog_model.PreviewContent.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.PreviewContent, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.PreviewContent, () => ({
    __proto__: dart.getFields(blog_model.PreviewContent.__proto__),
    bodyModel: dart.fieldType(blog_model.BodyModel),
    isFullContent: dart.fieldType(core.bool),
    subtitle: dart.fieldType(core.String)
  }));
  const paragraphs$ = dart.privateName(blog_model, "BodyModel.paragraphs");
  const sections$ = dart.privateName(blog_model, "BodyModel.sections");
  blog_model.BodyModel = class BodyModel extends core.Object {
    get paragraphs() {
      return this[paragraphs$];
    }
    set paragraphs(value) {
      this[paragraphs$] = value;
    }
    get sections() {
      return this[sections$];
    }
    set sections(value) {
      this[sections$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.paragraphs != null) {
        data[$_set]("paragraphs", this.paragraphs[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), ParagraphsToMapOfString$dynamic()))[$toList]());
      }
      if (this.sections != null) {
        data[$_set]("sections", this.sections[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), SectionsToMapOfString$dynamic()))[$toList]());
      }
      return data;
    }
  };
  (blog_model.BodyModel.new = function(opts) {
    let paragraphs = opts && 'paragraphs' in opts ? opts.paragraphs : null;
    let sections = opts && 'sections' in opts ? opts.sections : null;
    this[paragraphs$] = paragraphs;
    this[sections$] = sections;
    ;
  }).prototype = blog_model.BodyModel.prototype;
  (blog_model.BodyModel.fromJson = function(json) {
    this[sections$] = null;
    this[paragraphs$] = null;
    if (json[$_get]("paragraphs") != null) {
      this.paragraphs = JSArrayOfParagraphs().of([]);
      dart.dsend(json[$_get]("paragraphs"), 'forEach', [dart.fn(v => {
          this.paragraphs[$add](new blog_model.Paragraphs.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
    if (json[$_get]("sections") != null) {
      this.sections = JSArrayOfSections().of([]);
      dart.dsend(json[$_get]("sections"), 'forEach', [dart.fn(v => {
          this.sections[$add](new blog_model.Sections.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
  }).prototype = blog_model.BodyModel.prototype;
  dart.addTypeTests(blog_model.BodyModel);
  dart.setMethodSignature(blog_model.BodyModel, () => ({
    __proto__: dart.getMethods(blog_model.BodyModel.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.BodyModel, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.BodyModel, () => ({
    __proto__: dart.getFields(blog_model.BodyModel.__proto__),
    paragraphs: dart.fieldType(core.List$(blog_model.Paragraphs)),
    sections: dart.fieldType(core.List$(blog_model.Sections))
  }));
  const name$0 = dart.privateName(blog_model, "Paragraphs.name");
  const type$2 = dart.privateName(blog_model, "Paragraphs.type");
  const text$ = dart.privateName(blog_model, "Paragraphs.text");
  const layout$ = dart.privateName(blog_model, "Paragraphs.layout");
  const metadata$0 = dart.privateName(blog_model, "Paragraphs.metadata");
  const markups$ = dart.privateName(blog_model, "Paragraphs.markups");
  const alignment$ = dart.privateName(blog_model, "Paragraphs.alignment");
  blog_model.Paragraphs = class Paragraphs extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get type() {
      return this[type$2];
    }
    set type(value) {
      this[type$2] = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    get layout() {
      return this[layout$];
    }
    set layout(value) {
      this[layout$] = value;
    }
    get metadata() {
      return this[metadata$0];
    }
    set metadata(value) {
      this[metadata$0] = value;
    }
    get markups() {
      return this[markups$];
    }
    set markups(value) {
      this[markups$] = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      this[alignment$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("name", this.name);
      data[$_set]("type", this.type);
      data[$_set]("text", this.text);
      data[$_set]("layout", this.layout);
      if (this.metadata != null) {
        data[$_set]("metadata", this.metadata.toJson());
      }
      if (this.markups != null) {
        data[$_set]("markups", this.markups[$toList]());
      }
      data[$_set]("alignment", this.alignment);
      return data;
    }
  };
  (blog_model.Paragraphs.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let layout = opts && 'layout' in opts ? opts.layout : null;
    let metadata = opts && 'metadata' in opts ? opts.metadata : null;
    let markups = opts && 'markups' in opts ? opts.markups : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    this[name$0] = name;
    this[type$2] = type;
    this[text$] = text;
    this[layout$] = layout;
    this[metadata$0] = metadata;
    this[markups$] = markups;
    this[alignment$] = alignment;
    ;
  }).prototype = blog_model.Paragraphs.prototype;
  (blog_model.Paragraphs.fromJson = function(json) {
    this[alignment$] = null;
    this[markups$] = null;
    this[metadata$0] = null;
    this[layout$] = null;
    this[text$] = null;
    this[type$2] = null;
    this[name$0] = null;
    this.name = core.String._check(json[$_get]("name"));
    this.type = core.int._check(json[$_get]("type"));
    this.text = core.String._check(json[$_get]("text"));
    this.layout = core.int._check(json[$_get]("layout"));
    this.metadata = json[$_get]("metadata") != null ? new blog_model.Metadata.fromJson(MapOfString$dynamic()._check(json[$_get]("metadata"))) : null;
    if (json[$_get]("markups") != null) {
      this.markups = JSArrayOfString().of([]);
      dart.dsend(json[$_get]("markups"), 'forEach', [dart.fn(v => {
          this.markups[$add](core.String._check(v));
        }, dynamicToNull())]);
    }
    this.alignment = core.int._check(json[$_get]("alignment"));
  }).prototype = blog_model.Paragraphs.prototype;
  dart.addTypeTests(blog_model.Paragraphs);
  dart.setMethodSignature(blog_model.Paragraphs, () => ({
    __proto__: dart.getMethods(blog_model.Paragraphs.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Paragraphs, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Paragraphs, () => ({
    __proto__: dart.getFields(blog_model.Paragraphs.__proto__),
    name: dart.fieldType(core.String),
    type: dart.fieldType(core.int),
    text: dart.fieldType(core.String),
    layout: dart.fieldType(core.int),
    metadata: dart.fieldType(blog_model.Metadata),
    markups: dart.fieldType(core.List$(core.String)),
    alignment: dart.fieldType(core.int)
  }));
  const startIndex$ = dart.privateName(blog_model, "Sections.startIndex");
  blog_model.Sections = class Sections extends core.Object {
    get startIndex() {
      return this[startIndex$];
    }
    set startIndex(value) {
      this[startIndex$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("startIndex", this.startIndex);
      return data;
    }
  };
  (blog_model.Sections.new = function(opts) {
    let startIndex = opts && 'startIndex' in opts ? opts.startIndex : null;
    this[startIndex$] = startIndex;
    ;
  }).prototype = blog_model.Sections.prototype;
  (blog_model.Sections.fromJson = function(json) {
    this[startIndex$] = null;
    this.startIndex = core.int._check(json[$_get]("startIndex"));
  }).prototype = blog_model.Sections.prototype;
  dart.addTypeTests(blog_model.Sections);
  dart.setMethodSignature(blog_model.Sections, () => ({
    __proto__: dart.getMethods(blog_model.Sections.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.Sections, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.Sections, () => ({
    __proto__: dart.getFields(blog_model.Sections.__proto__),
    startIndex: dart.fieldType(core.int)
  }));
  const reason$ = dart.privateName(blog_model, "SuggestionReason.reason");
  blog_model.SuggestionReason = class SuggestionReason extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      this[reason$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("reason", this.reason);
      return data;
    }
  };
  (blog_model.SuggestionReason.new = function(opts) {
    let reason = opts && 'reason' in opts ? opts.reason : null;
    this[reason$] = reason;
    ;
  }).prototype = blog_model.SuggestionReason.prototype;
  (blog_model.SuggestionReason.fromJson = function(json) {
    this[reason$] = null;
    this.reason = core.int._check(json[$_get]("reason"));
  }).prototype = blog_model.SuggestionReason.prototype;
  dart.addTypeTests(blog_model.SuggestionReason);
  dart.setMethodSignature(blog_model.SuggestionReason, () => ({
    __proto__: dart.getMethods(blog_model.SuggestionReason.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(blog_model.SuggestionReason, "package:andrew_bell/models/blog_model.dart");
  dart.setFieldSignature(blog_model.SuggestionReason, () => ({
    __proto__: dart.getFields(blog_model.SuggestionReason.__proto__),
    reason: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/andrew_bell/models/blog_model", {
    "package:andrew_bell/models/blog_model.dart": blog_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;IACD;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACC;;;;;;IACE;;;;;;IACA;;;;;;IACC;;;;;;IACC;;;;;;IACJ;;;;;;IACE;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;IACE;;;;;;IACH;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;IACH;;;;;;IACA;;;;;;IACG;;;;;;IACQ;;;;;;IACX;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACU;;;;;;IACV;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;IACD;;;;;;IACC;;;;;;IACA;;;;;;IACD;;;;;;IACA;;;;;;IACG;;;;;;IACF;;;;;;IACA;;;;;;IACD;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACH;;;;;;IACC;;;;;;IACE;;;;;;IACA;;;;;;IACH;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;;AAkKsB,iBAAW;AAClB,MAApB,AAAI,IAAA,QAAC,MAAa;AACgB,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACS,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACuB,MAAhD,AAAI,IAAA,QAAC,oBAA2B;AACN,MAA1B,AAAI,IAAA,QAAC,SAAgB;AAC2B,MAAhD,AAAI,IAAA,QAAC,oBAA2B;AACU,MAA1C,AAAI,IAAA,QAAC,iBAAwB;AAC+B,MAA5D,AAAI,IAAA,QAAC,0BAAiC;AACgB,MAAtD,AAAI,IAAA,QAAC,uBAA8B;AACD,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACS,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACS,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACW,MAApC,AAAI,IAAA,QAAC,cAAqB;AACsB,MAAhD,AAAI,IAAA,QAAC,oBAA2B;AACkB,MAAlD,AAAI,IAAA,QAAC,qBAA4B;AACT,MAAxB,AAAI,IAAA,QAAC,QAAe;AAC0B,MAA9C,AAAI,IAAA,QAAC,mBAA0B;AACW,MAA1C,AAAI,IAAA,QAAC,iBAAwB;AAC7B,UAAS,gBAAW;AACqB,QAAvC,AAAI,IAAA,QAAC,WAAkB,AAAQ;;AAEjC,UAAS,iBAAY;AACsB,QAAzC,AAAI,IAAA,QAAC,YAAmB,AAAS;;AAED,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACD,MAAxB,AAAI,IAAA,QAAC,QAAe;AAC0C,MAA9D,AAAI,IAAA,QAAC,2BAAkC;AAC6B,MAApE,AAAI,IAAA,QAAC,8BAAqC;AACgB,MAA1D,AAAI,IAAA,QAAC,yBAAgC;AACe,MAApD,AAAI,IAAA,QAAC,sBAA6B;AACwB,MAA1D,AAAI,IAAA,QAAC,yBAAgC;AACe,MAApD,AAAI,IAAA,QAAC,sBAA6B;AACU,MAA5C,AAAI,IAAA,QAAC,kBAAyB;AACQ,MAAtC,AAAI,IAAA,QAAC,eAAsB;AAC2B,MAAtD,AAAI,IAAA,QAAC,uBAA8B;AACC,MAApC,AAAI,IAAA,QAAC,cAAqB;AACU,MAApC,AAAI,IAAA,QAAC,cAAqB;AAC1B,UAAS,uBAAkB;AAC4B,QAArD,AAAI,IAAA,QAAC,kBAAyB,AAAe;;AAEjB,MAA9B,AAAI,IAAA,QAAC,WAAkB;AAC+C,MAAtE,AAAI,IAAA,QAAC,+BAAsC;AACH,MAAxC,AAAI,IAAA,QAAC,gBAAuB;AACoC,MAAhE,AAAI,IAAA,QAAC,4BAAmC;AACA,MAAxC,AAAI,IAAA,QAAC,gBAAuB;AAC5B,UAAS,yBAAoB;AAC8B,QAAzD,AAAI,IAAA,QAAC,oBAA2B,AAAiB;;AAEL,MAA9C,AAAI,IAAA,QAAC,mBAA0B;AACG,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACa,MAAtC,AAAI,IAAA,QAAC,eAAsB;AACmB,MAA9C,AAAI,IAAA,QAAC,mBAA0B;AACW,MAA1C,AAAI,IAAA,QAAC,iBAAwB;AACe,MAA5C,AAAI,IAAA,QAAC,kBAAyB;AAC0C,MAAxE,AAAI,IAAA,QAAC,gCAAuC;AACZ,MAAhC,AAAI,IAAA,QAAC,YAAmB;AACgC,MAAxD,AAAI,IAAA,QAAC,wBAA+B;AACoB,MAAxD,AAAI,IAAA,QAAC,wBAA+B;AAC0B,MAA9D,AAAI,IAAA,QAAC,2BAAkC;AACH,MAApC,AAAI,IAAA,QAAC,cAAqB;AAC8B,MAAxD,AAAI,IAAA,QAAC,wBAA+B;AACwB,MAA5D,AAAI,IAAA,QAAC,0BAAiC;AACJ,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACuB,MAAhD,AAAI,IAAA,QAAC,oBAA2B;AAEU,MAD1C,AAAI,IAAA,QAAC,qCACI;AAE+B,MADxC,AAAI,IAAA,QAAC,mCACI;AAC+D,MAAxE,AAAI,IAAA,QAAC,gCAAuC;AACM,MAAlD,AAAI,IAAA,QAAC,qBAA4B;AACC,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACa,MAAtC,AAAI,IAAA,QAAC,eAAsB;AACO,MAAlC,AAAI,IAAA,QAAC,aAAoB;AACiC,MAA1D,AAAI,IAAA,QAAC,yBAAgC;AACiB,MAAtD,AAAI,IAAA,QAAC,uBAA8B;AACiB,MAApD,AAAI,IAAA,QAAC,sBAA6B;AACI,MAAtC,AAAI,IAAA,QAAC,eAAsB;AAC2B,MAAtD,AAAI,IAAA,QAAC,uBAA8B;AACuB,MAA1D,AAAI,IAAA,QAAC,yBAAgC;AACK,MAA1C,AAAI,IAAA,QAAC,iBAAwB;AACS,MAAtC,AAAI,IAAA,QAAC,eAAsB;AACiB,MAA5C,AAAI,IAAA,QAAC,kBAAyB;AACN,MAAxB,AAAI,IAAA,QAAC,QAAe;AACpB,YAAO,KAAI;IACb;;;QApPU;QACC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAxED;IACC;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAM;uCAEkB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAClB,cAAf,mBAAK,AAAI,IAAA,QAAC;AACmB,qBAA7B,mBAAY,AAAI,IAAA,QAAC;AACY,qBAA7B,mBAAY,AAAI,IAAA,QAAC;AAC0B,4BAA3C,mBAAmB,AAAI,IAAA,QAAC;AACH,iBAArB,mBAAQ,AAAI,IAAA,QAAC;AAC8B,4BAA3C,mBAAmB,AAAI,IAAA,QAAC;AACa,yBAArC,mBAAgB,AAAI,IAAA,QAAC;AACkC,kCAAvD,mBAAyB,AAAI,IAAA,QAAC;AACmB,+BAAjD,iBAAsB,AAAI,IAAA,QAAC;AACE,qBAA7B,gBAAY,AAAI,IAAA,QAAC;AACY,qBAA7B,gBAAY,AAAI,IAAA,QAAC;AACY,qBAA7B,gBAAY,AAAI,IAAA,QAAC;AACc,sBAA/B,gBAAa,AAAI,IAAA,QAAC;AACyB,4BAA3C,gBAAmB,AAAI,IAAA,QAAC;AACqB,6BAA7C,gBAAoB,AAAI,IAAA,QAAC;AACN,gBAAnB,iBAAO,AAAI,IAAA,QAAC;AAC6B,2BAAzC,mBAAkB,AAAI,IAAA,QAAC;AACc,yBAArC,mBAAgB,AAAI,IAAA,Q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","file":"blog_model.ddc.js"}');
  // Exports:
  return {
    models__blog_model: blog_model
  };
});

//# sourceMappingURL=blog_model.ddc.js.map

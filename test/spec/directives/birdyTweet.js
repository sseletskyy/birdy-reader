//noinspection JSLint,JSHint
'use strict';

describe('Directive: birdyTweet', function () {

  // load the directive's module
  //noinspection NestedFunctionCallJS
  beforeEach(module('birdyApp'));

  var element,
    scope,
    tweet;

  //noinspection NestedFunctionCallJS
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  describe('Display tweet without image', function () {
    //noinspection NestedFunctionCallJS
    beforeEach(inject(function ($rootScope, $compile) {
      //noinspection JSLint
      tweet = {
        created_at: 'Sun Nov 02 03:56:12 +0000 2014', id: 528757440783736832, id_str: '528757440783736832',
        text: 'The more fuzzy stuff you wear the more he\'ll think you\'re an actual teddy bear.',
        source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>', truncated: false, in_reply_to_status_id: undefined, in_reply_to_status_id_str: undefined, in_reply_to_user_id: undefined, in_reply_to_user_id_str: undefined, in_reply_to_screen_name: undefined,
        user: {id: 21447363, id_str: '21447363', name: 'KATY PERRY ', screen_name: 'katyperry', location: '', profile_location: undefined, description: 'CURRENTLY BEAMING ON THE PRISMATIC WORLD TOUR 2014!', url: 'http://t.co/TUWZkUWWhw',
          entities: {url: {urls: [
            {url: 'http://t.co/TUWZkUWWhw', expanded_url: 'http://www.katyperry.com', display_url: 'katyperry.com', indices: [0, 22]}
          ]},
            description: {urls: []}}, protected: false, followers_count: 59272183, friends_count: 158, listed_count: 143509, created_at: 'Fri Feb 20 23:45:56 +0000 2009', favourites_count: 1183, utc_offset: -32400, time_zone: 'Alaska', geo_enabled: false, verified: true, statuses_count: 6155, lang: 'en', contributors_enabled: false, is_translator: false, is_translation_enabled: true, profile_background_color: 'CECFBC', profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000168797027/kSZ-ewZo.jpeg', profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000168797027/kSZ-ewZo.jpeg', profile_background_tile: false, profile_image_url: 'http://pbs.twimg.com/profile_images/423542935368380416/ryEG2fNO_normal.jpeg', profile_image_url_https: 'https://pbs.twimg.com/profile_images/423542935368380416/ryEG2fNO_normal.jpeg', profile_banner_url: 'https://pbs.twimg.com/profile_banners/21447363/1401576937', profile_link_color: 'D55732', profile_sidebar_border_color: 'FFFFFF', profile_sidebar_fill_color: '78C0A8', profile_text_color: '5E412F', profile_use_background_image: true, default_profile: false, default_profile_image: false, following: false, follow_request_sent: false, notifications: false}, geo: undefined, coordinates: undefined, place: undefined, contributors: undefined, retweet_count: 5226, favorite_count: 10230, entities: {hashtags: [], symbols: [], user_mentions: [], urls: []}, favorited: false, retweeted: false, lang: 'en'};

      scope = $rootScope;
//      scope    = $rootScope.$new();
      scope.tweet = tweet;
      element = angular.element('<div birdy-tweet ng-model="tweet"></div>');
      $compile(element)(scope);
      scope.$digest();
    }));

    it('should have child div with class panel-heading', function () {
      //noinspection NestedFunctionCallJS,NestedFunctionCallJS,NestedFunctionCallJS
      expect(element.find('div').eq(0).attr('class')).toContain('panel-heading');
    });

    it('should display time in div.panel-heading', function () {
      var time = element.find('div').eq(0);
//      console.log('scope.value', scope.tweet);
      //noinspection NestedFunctionCallJS
      expect(time.text()).toBe(tweet.created_at);
    });

    it('should display NO MEDIA in div.panel-body', function () {
      var body = element.find('div').eq(1).find('div');//.eq(0).find('div');//.eq(0);//.find('div');//.eq(0);//.find('div');//.find('h4');
      //noinspection NestedFunctionCallJS
      console.log('body',body.html());
      expect(body.text()).toContain('NO MEDIA');
    });

    it('should display twitter text in .panel-body > .row > .col-xs-8', function () {
//                            .panel-body  .row    .col-xs-8
      var textDiv = element.find('div').eq(2).find('div').eq(3).find('p').eq(0);//.find('div').eq(0);
      //noinspection NestedFunctionCallJS
      expect(textDiv.text()).toContain(tweet.text);
    });

    it('should display favorite count in footer', function () {
      var footerDiv = element.find('div').eq(7);
      var codeDiv = footerDiv.find('small').eq(0).find('code').eq(0);
      //noinspection NestedFunctionCallJS
      expect(codeDiv.text()).toContain(tweet.favorite_count);
    });

    it('should display retweet count in footer', function () {
      var footerDiv = element.find('div').eq(7);
      var codeDiv = footerDiv.find('small').eq(0).find('code').eq(1);
      expect(codeDiv.text()).toContain(tweet.retweet_count);
    });
  });
  describe('Display tweet with image', function () {
    //noinspection NestedFunctionCallJS
    beforeEach(inject(function ($rootScope, $compile) {
      tweet = {created_at: 'Sat Nov 01 20:41:10 +0000 2014', id: 528647961262030848, id_str: '528647961262030848', text: 'hi http://t.co/ihlaO8XyUF', source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>', truncated: false, in_reply_to_status_id: undefined, in_reply_to_status_id_str: undefined, in_reply_to_user_id: undefined, in_reply_to_user_id_str: undefined, in_reply_to_screen_name: undefined, user: {id: 21447363, id_str: '21447363', name: 'KATY PERRY ', screen_name: 'katyperry', location: '', profile_location: undefined, description: 'CURRENTLY✨BEAMING✨ON THE PRISMATIC WORLD TOUR 2014!', url: 'http://t.co/TUWZkUWWhw', entities: {url: {urls: [
        {url: 'http://t.co/TUWZkUWWhw', expanded_url: 'http://www.katyperry.com', display_url: 'katyperry.com', indices: [0, 22]}
      ]}, description: {urls: []}}, protected: false, followers_count: 59272183, friends_count: 158, listed_count: 143509, created_at: 'Fri Feb 20 23:45:56 +0000 2009', favourites_count: 1183, utc_offset: -32400, time_zone: 'Alaska', geo_enabled: false, verified: true, statuses_count: 6155, lang: 'en', contributors_enabled: false, is_translator: false, is_translation_enabled: true, profile_background_color: 'CECFBC', profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000168797027/kSZ-ewZo.jpeg', profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000168797027/kSZ-ewZo.jpeg', profile_background_tile: false, profile_image_url: 'http://pbs.twimg.com/profile_images/423542935368380416/ryEG2fNO_normal.jpeg', profile_image_url_https: 'https://pbs.twimg.com/profile_images/423542935368380416/ryEG2fNO_normal.jpeg', profile_banner_url: 'https://pbs.twimg.com/profile_banners/21447363/1401576937', profile_link_color: 'D55732', profile_sidebar_border_color: 'FFFFFF', profile_sidebar_fill_color: '78C0A8', profile_text_color: '5E412F', profile_use_background_image: true, default_profile: false, default_profile_image: false, following: false, follow_request_sent: false, notifications: false}, geo: undefined, coordinates: undefined, place: undefined, contributors: undefined, retweet_count: 19277, favorite_count: 35599, entities: {hashtags: [], symbols: [], user_mentions: [], urls: [], media: [
        {id: 528647960708382720, id_str: '528647960708382720', indices: [3, 25], media_url: 'http://pbs.twimg.com/media/B1YihPVCAAAiZ7e.jpg', media_url_https: 'https://pbs.twimg.com/media/B1YihPVCAAAiZ7e.jpg', url: 'http://t.co/ihlaO8XyUF', display_url: 'pic.twitter.com/ihlaO8XyUF', expanded_url: 'http://twitter.com/katyperry/status/528647961262030848/photo/1', type: 'photo', sizes: {medium: {w: 554, h: 560, resize: 'fit'}, thumb: {w: 150, h: 150, resize: 'crop'}, small: {w: 340, h: 343, resize: 'fit'}, large: {w: 554, h: 560, resize: 'fit'}}}
      ]}, favorited: false, retweeted: false, possibly_sensitive: false, lang: 'und'};


      scope = $rootScope;
//      scope    = $rootScope.$new();
      scope.tweet = tweet;
      element = angular.element('<div birdy-tweet ng-model="tweet"></div>');
      $compile(element)(scope);
      scope.$digest();
    }));

    it('should have child div with class panel-heading', function () {
      //noinspection NestedFunctionCallJS,NestedFunctionCallJS,NestedFunctionCallJS
      expect(element.find('div').eq(0).attr('class')).toContain('panel-heading');
    });

    it('should display time in div.panel-heading', function () {
      var time = element.find('div').eq(0);
      //noinspection NestedFunctionCallJS
      expect(time.text()).toBe(tweet.created_at);
    });

    it('should display image in div.panel-body > .row > .col-xs-4', function () {
      var img = element.find('div').eq(1).find('div').eq(0).find('div').eq(0).find('img').eq(0);
      //noinspection NestedFunctionCallJS
      expect(img.attr('src')).toContain(scope.mediaUrl);
    });
    it('should NOT display NO MEDIA in div>.panel-body > .row > .col-xs-4', function () {
      var body = element.find('div').eq(1).find('div').eq(0).find('div').eq(0);
      //noinspection NestedFunctionCallJS
      expect(body.text()).not.toContain('NO MEDIA');
    });
    it('should display twitter text in .panel-body > .row > .col-xs-8', function () {
      var textDiv = element.find('div').eq(2).find('div').eq(3).find('p').eq(0);
      //noinspection NestedFunctionCallJS
      expect(textDiv.text()).toContain(tweet.text);
    });

    it('should display favorite count in footer', function () {
      var footerDiv = element.find('div').eq(7);
      var codeDiv = footerDiv.find('small').eq(0).find('code').eq(0);
      //noinspection NestedFunctionCallJS
      expect(codeDiv.text()).toContain(tweet.favorite_count);
    });

    it('should display retweet count in footer', function () {
      var footerDiv = element.find('div').eq(7);
      var codeDiv = footerDiv.find('small').eq(0).find('code').eq(1);
      expect(codeDiv.text()).toContain(tweet.retweet_count);
    });
  });
});

'use strict';

describe('Service: twitter', function () {

  // load the service's module
  beforeEach(module('birdyApp'));

  // instantiate service
  var twitter;
  beforeEach(inject(function (_twitter_) {
    twitter = _twitter_;
  }));

  it('should exist', function () {
    expect(!!twitter).toBe(true);
  });

  it('getTweets should return aa array', function(){
    expect(twitter.getTweets()).isArray;
  });


});

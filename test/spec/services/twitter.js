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

  it('getBase64Token should return a string', function(){
     console.log('token', twitter.getBase64Token());
     expect(twitter.getBase64Token()).isString_
  });


});

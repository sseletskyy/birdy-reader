'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('birdyApp'));

  var
    $scope,
    $rootScope,
    $controller,
    $httpBackend,
    createController,
    mockTwitterService,
    tweetsUrl = 'http://127.0.0.1:9393/tweets',
    mockTwitterResponse = [
      {name: 'a'},
      {name: 'b'}
    ];
//    tweetsUrl = 'http://127.0.0.1:9393/tweets';


  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
//    $scope = $injector.get('$scope');
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
    mockTwitterService = $injector.get('twitter');
  }));

  createController = function () {
    $scope = $rootScope.$new();

    $controller('MainCtrl', {
      '$scope': $scope,
      'twitterService': mockTwitterService
    });

  };

  it('should request twitter data from server', function () {
    $httpBackend.expectGET(tweetsUrl).respond(200, mockTwitterResponse);
    createController();
    $scope.update();
    expect(!!$scope.tweets).toBe(false);
    $httpBackend.flush();
    expect(!!$scope.tweets).toBe(true);
  });
});

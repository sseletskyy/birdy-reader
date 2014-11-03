'use strict';

angular.module('birdyApp')
  .controller('MainCtrl', ['$scope', 'twitter', function ($scope, twitter) {
    $scope.title = 'Katy Perry Twitter Reader';
    $scope.update = function () {
      twitter.getTweets()
        .query()
        .$promise
        .then(function (twitterResponse) {
          $scope.tweets = twitterResponse;
        });
    };

  }]);

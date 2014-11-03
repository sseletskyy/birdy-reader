'use strict';

angular.module('birdyApp')
  .service('twitter', ['$resource', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var twitterApiUrl = 'http://127.0.0.1:9393';
    var getTweetsMethod = twitterApiUrl + '/tweets';

    return {
      getTweets: function () {
        return $resource(getTweetsMethod, {});
      }
    };

  }]);

'use strict';

angular.module('birdyApp')
  .service('twitter', function Twitter() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var consumerKey = 'bZBJRCLwyoUDy7ZERanqRnL8T';
    var consumerSecret = 'lrgtnsQrqHGuc1Q6XiGi8siTASqbp8o9opnlf1saqAPVf4GHzs';
    var getToken = function () {
      return ''.concat(consumerKey, ':', consumerSecret);
    };

    return {
      getBase64Token: function () {
        return btoa(getToken());
      }


    }

  });

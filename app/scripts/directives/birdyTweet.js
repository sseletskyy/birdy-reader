'use strict';

angular.module('birdyApp')
  .directive('birdyTweet', function () {
    return {
      template: '' +
        '<div class="panel panel-default">' +
        '   <div class="panel-heading">{{tweet.created_at}}</div>' +
        '   <div class="panel-body">' +
        '     <div class="row">' +
        '       <div class="col-xs-4">' +
        '         <div ng-switch="mediaType">' +
        '           <div class="text-center" ng-switch-when="none">' +
        '             NO MEDIA' +
        '           </div>' +
        '           <div ng-switch-when="photo">' +
        '             <img class="fit-in-row" src="{{mediaUrl}}"/>' +
        '           </div>' +
        '         </div>' +
        '       </div>' +
        '       <div class="col-xs-8">' +
        '         <p>{{tweet.text}}</p>' +
        '       </div>' +
        '     </div>' +
        '   </div>' +
        '   <div class="panel-footer">' +
        '     <small>' +
        '       Favorited ' +
        '       <code>{{tweet.favorite_count}}</code>' +
        '       | Retweeted ' +
        '       <code>{{tweet.retweet_count}}</code>' +
        '     </small>' +
        '   </div>' +
        '</div>',
      restrict: 'A',
      replace: true,
      require: 'ngModel',
      link: ['scope', 'element', 'attrs', 'ngModel', function (scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }
        ngModel.$render = function () {
          scope.tweet = ngModel.$modelValue;
          scope.mediaType = 'none';
          scope.mediaUrl = '#';

          if (scope.tweet.entities && scope.tweet.entities.media && scope.tweet.entities.media[0]) {
            scope.mediaType = scope.tweet.entities.media[0].type;
            scope.mediaUrl = scope.tweet.entities.media[0].media_url;
          }
        };
      }]

    };
  });

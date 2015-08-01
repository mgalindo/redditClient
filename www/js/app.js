(function() {
  var app = angular.module('myreddit', ['ionic', 'angularMoment'])

  app.controller('ReditCtrl', function($http, $scope) {

    $scope.stories = [];

    $http.get('http://www.reddit.com/r/Android/new/.json')
      .success(function(response) {
        console.log(response.data.children);
        angular.forEach(response.data.children, function(child) {
          $scope.stories.push(child.data);
        });

      });

    $scope.loadOlderStories = functio() {
      var params = {};
      
      $http.get('http://www.reddit.com/r/Android/new/.json', {params: params})
        .success(function(response) {
          console.log(response.data.children);
          angular.forEach(response.data.children, function(child) {
            $scope.stories.push(child.data);
          });

        });
    };

  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
})();

angular.module('app.controllers', [])

.controller('searchCtrl', function($scope, $http) {

  $scope.videos = [];

  $scope.youtubeParams = {
    key: 'AIzaSyCNoxTc2M1WvYikPfm7NhYapmWTYq9ye5A',
    type: 'video',
    maxResults: '20',
    part: 'id,snippet',
    q: '',
    order: 'relevance'
  }

  $scope.getVideos = function(query) {
    $scope.youtubeParams.q = query;
    $scope.videos = [];
    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
      angular.forEach(response.items, function(child){
        console.log (child);
        $scope.videos.push(child);
      });
    });
  };

})

.controller('myMusicCtrl', function($scope) {

})

.controller('exploreCtrl', function($scope) {

})

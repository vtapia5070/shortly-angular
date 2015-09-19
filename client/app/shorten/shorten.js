angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.shortenLinks($scope.link)
    .then(function(result){
      $scope.link.url = result;
    })
    .catch(function(error){
      console.log(error);
    });
  };
});


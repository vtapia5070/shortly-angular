angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
   Links.links()
   .then(function(result){
      $scope.data.links = result;
    })
    .catch(function(error){
      console.log(error);
    });
  };
  $scope.getLinks();

});



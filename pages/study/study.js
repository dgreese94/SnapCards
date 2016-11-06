angular.module('snapCards.study', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('studyController', function($scope, $routeParams, snapAPI) {
    $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));
});
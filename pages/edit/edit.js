angular.module('snapCards.edit', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('editController', function($scope, $routeParams, snapAPI) {
    $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));
});
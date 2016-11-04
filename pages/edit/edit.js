angular.module('snapCards.edit', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('editController', function($scope, $routeParams, snapAPI) {
    $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));

    $scope.addCard = function addCard(){
        $scope.deck.cards.push({ front:"", back:""});
    }

    $scope.saveDeck = function saveDeck(){
        snapAPI.updateDeckCards($scope.deck.id, $scope.deck.cards);
    }

});
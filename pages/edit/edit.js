angular.module('snapCards.edit', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('editController', function($scope, $routeParams, snapAPI) {
    $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));

    $scope.selectedcard = $scope.deck.cards[0];

    $scope.addCard = function addCard(){
        $scope.deck.cards.push({ front:{text:"", media:""}, back:{text:"", media:""}});
    }

    $scope.saveDeck = function saveDeck(){
        snapAPI.updateDeckCards($scope.deck.id, $scope.deck.cards);
    }

    $scope.selectCard = function selectCard( card ){
        $scope.selectedcard = card;
    }

});
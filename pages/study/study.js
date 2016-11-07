angular.module('snapCards.study', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
    .controller('studyController', function ($scope, $routeParams, snapAPI) {
        $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));
        $scope.currentCard = 0;
        $scope.isFlipped = false;
        $scope.maxCard = $scope.deck.cards.length - 1;


        $scope.prevCard = function () {
            $scope.currentCard--;
            $scope.isFlipped = false;
        };

        $scope.nextCard = function () {
            $scope.currentCard++;
            $scope.isFlipped = false;
        };

        $scope.flip = function () {
            $scope.isFlipped = !$scope.isFlipped;
        }
    });
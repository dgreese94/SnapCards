angular.module('snapCards.study', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
    .controller('studyController', function ($scope, $routeParams, snapAPI) {
        $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));
        $scope.deck.cards = $scope.deck.cards.slice(0);
        $scope.currentCard = 0;
        $scope.isFlipped = false;
        $scope.maxCard = $scope.deck.cards.length;
        $scope.originalMax = $scope.maxCard;

        $scope.missed = 0;
        $scope.correct = 0;


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

        $scope.correctCard = function() {
            $scope.correct++;
            $scope.nextCard();
        };

        $scope.missedCard = function() {
            $scope.deck.cards.push($scope.deck.cards[$scope.currentCard]);
            $scope.missed++;
            $scope.maxCard++;
            $scope.nextCard();
        };

        $scope.retry = function() {
            $scope.deck.cards = $scope.deck.cards.slice(0, $scope.originalMax);
            $scope.maxCard = $scope.originalMax;
            $scope.currentCard = 0;
            $scope.missed = 0;
            $scope.correct = 0;
        }
    });
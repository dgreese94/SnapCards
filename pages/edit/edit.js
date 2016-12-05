angular.module('snapCards.edit', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('editController', function($scope, $routeParams, $mdToast, snapAPI) {
    $scope.deck = snapAPI.getDeck(parseInt($routeParams.id, 10));

    $scope.selectedcard = $scope.deck.cards[0];
    $scope.selectedcardIndex = 0;

    $scope.addCard = function addCard(){
        $scope.deck.cards.push({ front:{text:"", media:""}, back:{text:"", media:""}});
        $scope.selectCard($scope.deck.cards.length - 1);
    }

    $scope.saveDeck = function saveDeck(){
        snapAPI.updateDeckCards($scope.deck.id, $scope.deck.cards);
    }

    $scope.selectCard = function selectCard(index){
        $scope.selectedcard = $scope.deck.cards[index];
        $scope.selectedcardIndex = index;
    }

    $scope.deleteSelected = function deleteSelected() {
        $scope.deck.cards.splice($scope.selectedcardIndex, 1);

        if($scope.deck.cards.length == 0) {
            $scope.addCard();
        }

        if($scope.selectedcardIndex === $scope.deck.cards.length) {
            $scope.selectCard($scope.selectedcardIndex - 1);
        } else {
           $scope.selectCard($scope.selectedcardIndex);
        }
    }

    $scope.save = function save(deck){
        showToast('Saved Changes to '+ deck.name +'.');
    } 

    function showToast(toasttext) {

        $mdToast.show(
          $mdToast.simple()
            .textContent(toasttext)
            .position('bottom right')
            .hideDelay(2000)
        );
    };

}).directive('autofocusOnSelect', function() {
    return {
        restrict: 'A',
        link: function(scope, elm) {
            scope.$watch('selectedcard', function() {
                elm[0].focus();
            });
        }
    };
});
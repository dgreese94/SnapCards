angular.module('snapCards.home', ['ngMaterial', 'ngRoute'])
.controller('homeController', function($scope, $location) {
    $scope.MyDecks = [{
        name: 'Presidents',
        description: 'The presidents of the United States of America.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        name: 'Geometry',
        description: 'Name the shape.',
        cards: [{}, {}, {}, {}, {}]
    }];

    $scope.PublicDecks = [{
        name: 'Presidents',
        description: 'The presidents of the United States of America.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        name: 'Periodic Table',
        description: 'Name the Element.',
        cards: [{}, {}, {}, {}, {}]
    }];

    $scope.edit = function edit(deck) {
        // alert('Edit '+deck.name);
        $scope.goTo('edit');
    };

    $scope.share = function share(deck) {
        // alert('Share '+deck.name);
        if(confirm("Are you sure you sure you want to share this deck?")){
            $scope.PublicDecks.push(deck);
            alert("Successfully Shared "+deck.name);
        }
    };

    $scope.study = function study(deck) {
        // alert('Study '+deck.name);
        $scope.goTo('study');
    };

    $scope.addNewDeck = function addNewDeck() {
        alert('Add New Deck pressed');
        //edit with new?
    };

    $scope.goTo = function goTo(pageName){
        $location.path('/'+pageName);
    };
});
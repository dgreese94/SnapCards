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
    }, {
        name: 'Geometry 2',
        description: 'Name the shape.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        name: 'French Revolution',
        description: 'French Revolution review.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        name: 'Civil War',
        description: 'American Civil War.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        name: 'Times Tables',
        description: 'Multiply up to 12.',
        cards: [{}, {}, {}, {}, {}]
    }];

    $scope.PublicDecks = [{
        name: 'Tzars',
        description: 'The Russian Tzars.',
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
            if($scope.PublicDecks.indexOf(deck)  === -1){
                $scope.PublicDecks.push(deck);
                alert("Successfully Shared "+deck.name);
            } else {
                alert("You have already shared this deck.");
            }
        }
    };

    $scope.save = function save(deck) {
        // alert('Share '+deck.name);
        if(confirm("Are you sure you sure you want to save this deck?")){
            if($scope.MyDecks.indexOf(deck)  === -1){
                $scope.MyDecks.push(deck);
                alert("Successfully Saved "+deck.name);
            } else {
                alert("You have already saved this deck.");
            }
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
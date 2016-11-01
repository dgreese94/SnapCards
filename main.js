var snapCards = angular.module('snapCards', ['ngMaterial', 'ngRoute']);

snapCards.config(function($routeProvider, $mdThemingProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    // route for the about page
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('amber')
        .accentPalette('brown');
});

snapCards.controller('AppController', function() {
    this.user = {
        name: 'Studious Sally'
    };
});

snapCards.controller('aboutController', function() {});
snapCards.controller('homeController', function($scope) {
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
        alert('Edit '+deck.name);
    };

    $scope.share = function share(deck) {
        alert('Share '+deck.name);
    };

    $scope.study = function study(deck) {
        alert('Study '+deck.name);
    };

    $scope.addNewDeck = function addNewDeck() {
        alert('Add New Deck pressed');
    };
});
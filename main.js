var snapCards = angular.module('snapCards', ['ngMaterial', 'ngRoute']);

snapCards.config(function($routeProvider, $mdThemingProvider, $mdIconProvider) {
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
    })
    // route for the edit page
    .when('/edit', {
        templateUrl: 'pages/edit.html',
        controller: 'editController'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('amber')
        .accentPalette('brown');

    $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});

snapCards.controller('AppController', function($location) {
    this.user = {
        name: 'Studious Sally'
    };

    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    this.goTo = function(pageName){
        $location.path('/'+pageName);
    }
});

snapCards.controller('aboutController', function() {});
snapCards.controller('homeController', function($scope, $location) {
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
        alert('Share '+deck.name);
    };

    $scope.study = function study(deck) {
        alert('Study '+deck.name);
    };

    $scope.addNewDeck = function addNewDeck() {
        alert('Add New Deck pressed');
    };

    $scope.goTo = function goTo(pageName){
        $location.path('/'+pageName);
    };

});
snapCards.controller('editController', function() {});
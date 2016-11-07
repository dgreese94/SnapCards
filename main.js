var snapCards = angular.module('snapCards', ['ngMaterial', 
                                             'ngRoute',
                                             'snapCards.home',
                                             'snapCards.edit',
                                             'snapCards.study',
                                             'snapCards.about',
                                             'snapCards.deckservice']);

snapCards.config(function($routeProvider, $mdThemingProvider, $mdIconProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/index.html',
        controller: 'indexController'
    })

    // route for the home page
    .when('/home', {
        templateUrl: 'pages/home/home.html',
        controller: 'homeController'
    })
    // route for the about page
    .when('/about', {
        templateUrl: 'pages/about/about.html',
        controller: 'aboutController'
    })
    // route for the edit page
    .when('/edit/:id', {
        templateUrl: 'pages/edit/edit.html',
        controller: 'editController'
    })
    // route for the edit page
    .when('/study/:id', {
        templateUrl: 'pages/study/study.html',
        controller: 'studyController'
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
        name: 'Studious Sally',
        loggedIn: false
    };

    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    this.goTo = function(pageName){
        $location.path('/'+pageName);
    };
    
    var _this = this;
    this.goHome = function() {
        if (_this.user.loggedIn) {
            $location.path('/home');
        } else {
            $location.path('/');
        }
    };
});

snapCards.controller('indexController', function() {});
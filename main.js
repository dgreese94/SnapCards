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

snapCards.controller('AppController', function($location, $scope) {
    this.user = {
        email: '',
        password: '',
        teacher: false,
        loggedIn: false
    };

    $scope.signup = false;
    $scope.isTeach = "";
    

    $scope.newAccount = function newAccount(){
        $scope.signup = true;
    };

    $scope.back = function back() {
        $scope.signup = false;
    };

    $scope.create = function create(){
        _this.user.loggedIn = true;
        _this.goHome();
    };

    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    this.goTo = function(pageName){
        $location.path('/'+pageName);
    };

    this.edit = function edit(deck) {
        $location.path('/edit/' + deck.id);
    };

    this.study = function edit(deck) {
        $location.path('/study/' + deck.id);
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

snapCards.directive('mainToolbar', function() {
    return {
        templateUrl: 'pages/header.html',
        transclude: true
    }
})

snapCards.controller('aboutController', function() {});
snapCards.controller('indexController', function() {});

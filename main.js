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

    $mdThemingProvider.definePalette('Navaho', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('amazingPaletteName')

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');

    $mdThemingProvider.theme('dark', 'default')
        .primaryPalette('blue')
        .accentPalette('orange')
        .dark();

    $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});

snapCards.controller('AppController', function($location, $scope, snapAPI) {
    $scope.user = {
        email: '',
        password: '',
        teacher: false,
        loggedIn: false
    };

    $scope.signup = false;
    $scope.isTeach = '';

    $scope.newAccount = function newAccount(){
        $scope.signup = true;
    };

    $scope.back = function back() {
        $scope.signup = false;
    };

    $scope.create = function create(){
        $scope.user.loggedIn = true;
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

        if($scope.user.email !== '' && $scope.user.password !== ''){
            if ($scope.user.loggedIn) {
                snapAPI.setActiveUser($scope.user);
                $location.path('/home');
            } else {
                $scope.user = {
                    email: '',
                    password: '',
                    teacher: false,
                    loggedIn: false
                };
                $location.path('/');
            }
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

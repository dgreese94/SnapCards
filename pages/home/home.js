angular.module('snapCards.home', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('homeController', function($scope, $location, $mdDialog, snapAPI) {
    $scope.MyDecks = snapAPI.getMyDecks();

    $scope.PublicDecks = snapAPI.getPublicDecks();

    $scope.user = snapAPI.getActiveUser();

    $scope.edit = function edit(deck) {
        // alert('Edit '+deck.name);
        $location.path('/edit/'+deck.id);
    };

    $scope.share = function share(ev, deck) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to share'+deck.name+'?')
          .textContent('The deck will be made public.')
          .ariaLabel('share')
          .targetEvent(ev)
          .ok('Yes, make deck public')
          .cancel('Do not share deck');

        $mdDialog.show(confirm).then(function() {
            if($scope.PublicDecks.indexOf(deck)  === -1){
                snapAPI.shareDeck(deck);
            }
        }, function() {});
    };

    $scope.save = function save(ev, deck) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to save'+deck.name+'?')
          .textContent('The deck will be added to your deck collection.')
          .ariaLabel('save deck')
          .targetEvent(ev)
          .ok('Yes, save the deck')
          .cancel('Do not save the deck');

        $mdDialog.show(confirm).then(function() {
            if($scope.MyDecks.indexOf(deck)  === -1){
                snapAPI.saveDeck(deck);
            }
        }, function() {});
    };

    $scope.assign = function assign(ev, deck) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
          .title('To which class would you like to assign '+deck.name+ '?')
          .textContent('Type the class name or code.')
          .placeholder('Class')
          .ariaLabel('class')
          .initialValue('')
          .targetEvent(ev)
          .ok('Assign')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function(result) {
          alert("Shared "+deck.name+ ' to '+ result +'.');
        }, function() {});
    };

    $scope.study = function study(deck) {
        $location.path('/study/'+deck.id);
    };

    $scope.addNewDeck = function addNewDeck() {
        // alert('Add New Deck pressed');
        //edit with new?
        var deck = snapAPI.newDeck();

        $location.path('/edit/'+deck.id);
    };
});
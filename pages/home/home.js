angular.module('snapCards.home', ['ngMaterial', 'ngRoute', 'snapCards.deckservice'])
.controller('homeController', function($scope, $location, snapAPI) {
    $scope.MyDecks = snapAPI.getMyDecks();

    $scope.PublicDecks = snapAPI.getPublicDecks();

    $scope.edit = function edit(deck) {
        // alert('Edit '+deck.name);
        $location.path('/edit/'+deck.id);
    };

    $scope.share = function share(deck) {
        // alert('Share '+deck.name);
        if(confirm("Are you sure you sure you want to share this deck?")){
            if($scope.PublicDecks.indexOf(deck)  === -1){
                snapAPI.shareDeck(deck);
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
                snapAPI.saveDeck(deck);
                alert("Successfully Saved "+deck.name);
            } else {
                alert("You have already saved this deck.");
            }
        }
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
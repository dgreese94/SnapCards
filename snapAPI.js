angular.module('snapCards.deckservice', ['ngMaterial', 'ngRoute'])
.service('snapAPI', function() {

    var MyDecks = [{
        id: 1,
        name: 'Presidents',
        description: 'The presidents of the United States of America.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        id: 2,
        name: 'Geometry',
        description: 'Name the shape.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        id: 3,
        name: 'Geometry 2',
        description: 'Name the shape.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        id: 4,
        name: 'French Revolution',
        description: 'French Revolution review.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        id: 5,
        name: 'Civil War',
        description: 'American Civil War.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        id: 6,
        name: 'Times Tables',
        description: 'Multiply up to 12.',
        cards: [{}, {}, {}, {}, {}]
    }];

    var PublicDecks = [{
        id: 7,
        name: 'Tzars',
        description: 'The Russian Tzars.',
        cards: [{}, {}, {}, {}, {}]
    }, {
        id: 8,
        name: 'Periodic Table',
        description: 'Name the Element.',
        cards: [{}, {}, {}, {}, {}]
    }];

    this.getDeck = function( deckID ){
        var i;

        for (i in MyDecks){
            if (MyDecks[i].id === deckID){
                return MyDecks[i]
            }
        }

        for (i in PublicDecks){
            if (PublicDecks[i].id === deckID){
                return PublicDecks[i]
            }
        }

        return "No such deck";
    }

    this.getMyDecks = function(){
        return MyDecks;
    }

    this.getPublicDecks = function(){
        return PublicDecks;
    }

    this.shareDeck = function(deck){
        PublicDecks.push(deck)
    }

    this.saveDeck = function(deck){
        MyDecks.push(deck);
    }
});
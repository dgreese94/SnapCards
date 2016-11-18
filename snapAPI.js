angular.module('snapCards.deckservice', ['ngMaterial', 'ngRoute'])
.service('snapAPI', function() {

    var MyDecks = [{
        id: 1,
        name: 'Presidents',
        description: 'The presidents of the United States of America.',
        cards: [{ front:{text:"Who is the first president of the Unitied States?", media:""}, back:{text:"George Washington", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 2,
        name: 'Geometry',
        description: 'Name the shape.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 3,
        name: 'Geometry 2',
        description: 'Name the shape.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 4,
        name: 'French Revolution',
        description: 'French Revolution review.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 5,
        name: 'Civil War',
        description: 'American Civil War.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 6,
        name: 'Times Tables',
        description: 'Multiply up to 12.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }];

    var PublicDecks = [{
        id: 7,
        name: 'Tzars',
        description: 'The Russian Tzars.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 8,
        name: 'Periodic Table',
        description: 'Name the Element.',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 9,
        name: 'Colors',
        description: 'Name the Color',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}, { front:{text:"", media:""}, back:{text:"", media:""}}]
    }, {
        id: 10,
        name: 'Music Scales',
        description: '-',
        cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}]
    }];

    var current_id = 11;

    var users = [{
        email: 'teacher@school.edu',
        password: 'teacher',
        teacher: true
    },{
        email: 'student@school.edu',
        password: 'student',
        teacher: false
    }];

    var active_user = {
        email: 'student@school.edu',
        password: 'student',
        teacher: false
    }

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

    this.newDeck = function(){
        var deck = {
            id: current_id,
            name: 'Unnamed deck',
            description: '',
            cards: [{ front:{text:"", media:""}, back:{text:"", media:""}}]
        };

        current_id++;

        this.saveDeck(deck);

        return deck;
    }

    this.updateDeckCards = function(deckID, cards){
        var i;

        for (i in MyDecks){
            if (MyDecks[i].id === deckID){
                MyDecks[i].cards = cards;
                return;
            }
        }
    }

    this.setActiveUser = function( user ){
        active_user = user;
    }

    this.getActiveUser = function(){
        return active_user;
    }
});
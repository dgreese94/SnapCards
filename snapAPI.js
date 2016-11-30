angular.module('snapCards.deckservice', ['ngMaterial', 'ngRoute'])
.service('snapAPI', function() {

    var MyDecks = [{
        id: 1,
        name: 'Presidents',
        description: 'The presidents of the United States of America.',
        cards: [{ front:{text:"Who is the first president of the Unitied States?", media:""}, back:{text:"George Washington", media:""}}, { front:{text:"Who is the only president to serve more than two terms?", media:""}, back:{text:"Franklin D. Roosevelt", media:""}}, { front:{text:"Who was the youngest elected president?", media:""}, back:{text:"John F. Kennedy", media:""}}, { front:{text:"Who was the only president to resign from office?", media:""}, back:{text:"Richard Nixon", media:""}}, { front:{text:"Who was president during the start of the first world war?", media:""}, back:{text:"Woodrow Wilson", media:""}}]
    }, {
        id: 2,
        name: 'Geometry',
        description: 'Name the shape.',
        cards: [{ front:{text:"How many sides does an isosceles triangle have?", media:""}, back:{text:"Three", media:""}}, { front:{text:"What is the name of the shape with 7 sides?", media:""}, back:{text:"Heptagon", media:""}}, { front:{text:"What shape is a kite?", media:""}, back:{text:"Rhombus", media:""}}, { front:{text:"How many sides does a pentagon have?", media:""}, back:{text:"5", media:""}}, { front:{text:"What is the area of a square?", media:""}, back:{text:"Height x Width", media:""}}]
    }, {
        id: 3,
        name: 'Geography',
        description: 'Which continent are the following countries located on?.',
        cards: [{ front:{text:"Argentina", media:""}, back:{text:"South America", media:""}}, { front:{text:"Morocco", media:""}, back:{text:"Africa", media:""}}, { front:{text:"Laos", media:""}, back:{text:"Asia", media:""}}, { front:{text:"Lichtenstein", media:""}, back:{text:"Europe", media:""}}, { front:{text:"Honduras", media:""}, back:{text:"North America", media:""}}]
    }, {
        id: 4,
        name: 'Earth Science',
        description: 'Earth Science review.',
        cards: [{ front:{text:"Which direction does the sun rise from?", media:""}, back:{text:"East", media:""}}, { front:{text:"What is the closest star to the earth?", media:""}, back:{text:"The Sun", media:""}}, { front:{text:"What type of rocks come from directly from a Volcano?", media:""}, back:{text:"Igneous", media:""}}, { front:{text:"What type of rock forms from the cementation of material?", media:""}, back:{text:"Sedimentary", media:""}}, { front:{text:"What are ancient bones encased in rock called?", media:""}, back:{text:"Fossils", media:""}}]
    }, {
        id: 5,
        name: 'Civil War',
        description: 'American Civil War.',
        cards: [{ front:{text:"What year did the Civil War begin?", media:""}, back:{text:"1861", media:""}}, { front:{text:"What even signalled the start of the war?", media:""}, back:{text:"The attack on Fort Sumter", media:""}}, { front:{text:"Where did Robert E. Lee surrender?", media:""}, back:{text:"Appomattox Courthouse", media:""}}, { front:{text:"What was the era following the Civil War called?", media:""}, back:{text:"Reconstruction", media:""}}, { front:{text:"What was the Confederate States of America's number one export?", media:""}, back:{text:"Cotton", media:""}}]
    }, {
        id: 6,
        name: 'Times Tables',
        description: 'Multiply up to 12.',
        cards: [{ front:{text:"3 x 7", media:""}, back:{text:"21", media:""}}, { front:{text:"6 x 8", media:""}, back:{text:"48", media:""}}, { front:{text:" 11 x 5", media:""}, back:{text:"55", media:""}}, { front:{text:"9 x 4", media:""}, back:{text:"36", media:""}}, { front:{text:"12 x 7", media:""}, back:{text:"84", media:""}}]
    }];

    var PublicDecks = [{
        id: 7,
        name: 'SWEN444 Test 2 Study Guide',
        description: 'A guide for the upcoming SWEN444 test',
        cards: [{ front:{text:"What are three types of affordances?", media:""}, back:{text:"Cognitive, Sensory, and Physical", media:""}}, { front:{text:"True of False: Color contrast may affect comprehension", media:""}, back:{text:"True", media:""}}, { front:{text:"What is the proximity Principle?", media:""}, back:{text:"Objects that are close to each other will be seen as belonging together", media:""}}, { front:{text:"True or False: Accessibility is often a waste of time", media:""}, back:{text:"False", media:""}}, { front:{text:"What is the 80/20 rule?", media:""}, back:{text:"20% of functionality gets used 80% of the time", media:""}}]
    }, {
        id: 8,
        name: 'Periodic Table',
        description: 'Name the Element.',
        cards: [{ front:{text:"Lightest noble gas", media:""}, back:{text:"Helium", media:""}}, { front:{text:"How many valence electrons does Fluorine have?", media:""}, back:{text:"7", media:""}}, { front:{text:"What is the only metal that is liquid at room temperature?", media:""}, back:{text:"Mercury", media:""}}, { front:{text:"Which nonmetal has 2 electron shells and 4 valence electrons", media:""}, back:{text:"Carbon", media:""}}, { front:{text:"What is the symbol for gold?", media:""}, back:{text:"Au", media:""}}]
    }, {
        id: 9,
        name: 'Astronomy',
        description: 'Explore the stars',
        cards: [{ front:{text:"Third planet from the Sun", media:""}, back:{text:"Earth", media:""}}, { front:{text:"Former planet that was downgraded to dwarf planet", media:""}, back:{text:"Pluto", media:""}}, { front:{text:"Interstellar cloud of space dust and gas", media:""}, back:{text:"Nebula", media:""}}, { front:{text:"Highly magnetized, rotating neutron star that emits a beam of electromagnetic radiation", media:""}, back:{text:"Pulsar", media:""}}, { front:{text:"A system of millions or billions of stars along with gas and dust", media:""}, back:{text:"Galaxy", media:""}}]
    }];

    var current_id = 10;

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
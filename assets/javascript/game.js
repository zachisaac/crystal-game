//Crystal Game

//Variables
//Pick a random number between 19 and 120
//Random Number Variable
var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber);

//Gems worth random number between 1 and 12

//Diamond
var diamond = Math.floor(Math.random() * 12) + 1;
console.log(diamond);

//Sapphire
var sapphire = Math.floor(Math.random() * 12) + 1;
console.log(sapphire);

//Peridot
var peridot = Math.floor(Math.random() * 12) + 1;
console.log(peridot);

//Ruby
var ruby = Math.floor(Math.random() * 12) + 1;
console.log(ruby)

//Wins Variable
var wins = 0;

//Losses Variable
var losses = 0;

//Actual Number Variable
var actualNumber = 0;
console.log(actualNumber);

//Gems worth random number between 1 and 12
//Wins
//Losses
//Your total score at the moment

$(document).ready(function () {
    //Document Ready
    console.log("ready!");
    //Generate Random Number
    var randomNumber = Math.floor((Math.random() * 120) + 19);

    //Display Random Number
    $(".randomNumber").text(randomNumber);

    //Generate Random Number for each Crystal
    var diamond = Math.floor(Math.random() * 12) + 1;
    var sapphire = Math.floor(Math.random() * 12) + 1;
    var peridot = Math.floor(Math.random() * 12) + 1;
    var ruby = Math.floor(Math.random() * 12) + 1;
    //Console Log
    console.log(diamond, sapphire, peridot, ruby);

    //Wins and Losses Tracker
    var wins = 0;
    var losses = 0;
    var actualNumber = 0;

    //Reset Function
    function reset() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
        diamond = Math.floor(Math.random() * 12) + 1;
        peridot = Math.floor(Math.random() * 12) + 1;
        ruby = Math.floor(Math.random() * 12) + 1;
        actualNumber = 0;
        $(".randomNumber").text(randomNumber);
        $(".actualScore").text(actualNumber);
    }

    //Scoring Functions
    function winner() {
        alert("YOU WIN!!!");
        wins++;
        $(".win").text("Wins:" + " " + wins);
        reset();
    }
    function loser () {
        alert("You Lost");
        losses++;
        $(".lose").text("Losses:" + " " +losses);
        reset();
    }
    //Crystal Click Functions
    $(".diamond").on('click', function () {
        actualNumber = actualNumber + diamond;
        console.log("New actualNumber = " + actualNumber);
        $('.actualScore').text(actualNumber);
        if (actualNumber === randomNumber){
            winner();
        }
        else if (actualNumber > randomNumber) {
            loser();
        }
    })

    $(".sapphire").on('click', function () {
        actualNumber = actualNumber + sapphire;
        console.log("New actualNumber = " + actualNumber);
        $('.actualScore').text(actualNumber);
        if (actualNumber === randomNumber){
            winner();
        }
        else if (actualNumber > randomNumber) {
            loser();
        }
    })

    $(".peridot").on('click', function () {
        actualNumber = actualNumber + peridot;
        console.log("New actualNumber = " + actualNumber);
        $('.actualScore').text(actualNumber);
        if (actualNumber === randomNumber){
            winner();
        }
        else if (actualNumber > randomNumber) {
            loser();
        }
    })

    $(".ruby").on('click', function () {
        actualNumber = actualNumber + ruby;
        console.log("New actualNumber = " + actualNumber);
        $('.actualScore').text(actualNumber);
        if (actualNumber === randomNumber){
            winner();
        }
        else if (actualNumber > randomNumber) {
            loser();
        }
    })

});
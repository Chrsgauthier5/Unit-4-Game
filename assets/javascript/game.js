$(document).ready(function() {
    
    $("#gamename").html("Welcome to Crystal Counters!").fadeToggle(1000).fadeToggle(1000);
    $("#instructions").html("Touch the Crystals to score points, but don't exceed the Target Score!")
    $(".pointer").css( 'cursor', 'pointer' );
    
    var userScore = 0;
    var wins = 0;
    var losses = 0;
 
    function randomScore (min, max){
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
    
    var scoreTarget = randomScore(19, 120);
    do {
    var crystal1 = randomScore(1,12);
    var crystal2 = randomScore(1,12);
    var crystal3 = randomScore(1,12);
    var crystal4 = randomScore(1,12);
    }
    while (crystal2 == crystal1 || crystal3 == crystal2 || crystal3 == crystal1 || crystal4 == crystal3 || crystal4 == crystal2 || crystal4 == crystal1)
    var arrCheck = [];
    arrCheck.push(crystal1);
    console.log(arrCheck);    
        
    console.log(scoreTarget);
    console.log("crystal 1: " + crystal1);
    console.log("crystal 2: " + crystal2);
    console.log("crystal 3: " + crystal3);
    console.log("crystal 4: " + crystal4);
    
    
    $("#target-score").html("Target Score: " + scoreTarget);
    $("#user-score").html ("Current Score: " + userScore);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    
    function newGame(){
    userScore = 0;
    scoreTarget = randomScore(19, 120);
    do {
    crystal1 = randomScore(1,12);
    crystal2 = randomScore(1,12);
    crystal3 = randomScore(1,12);
    crystal4 = randomScore(1,12);
    }
    while (crystal2 == crystal1 || crystal3 == crystal2 || crystal3 == crystal1 || crystal4 == crystal3 || crystal4 == crystal2 || crystal4 == crystal1);
    

    console.log(scoreTarget);
    console.log("crystal 1: " + crystal1);
    console.log("crystal 2: " + crystal2);
    console.log("crystal 3: " + crystal3);
    console.log("crystal 4: " + crystal4);
    };
    
    $("#crystal-1").click(function(){ // when crystal is clicked..
        
        userScore = userScore + crystal1; // increment score by value of crystal 1
        if (userScore === scoreTarget){ // if score = target, increment wins
            alert ("You won!"); 
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
            
        }
        if (userScore > scoreTarget){ // if score goes over target, increment losses
            alert ("You lost!");
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
        $("#user-score").html ("Current Score: " + userScore);
        $("#target-score").html("Target Score: " + scoreTarget); 
        
    });
    
    $("#crystal-2").click(function(){
        
        userScore = userScore + crystal2;
        $("#user-score").html ("Current Score: " + userScore);
        if (userScore === scoreTarget){
            alert ("You won!");
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (userScore > scoreTarget){
            alert ("You lost!");
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
        $("#user-score").html ("Current Score: " + userScore);
        $("#target-score").html("Target Score: " + scoreTarget); 
        
    });
    
    $("#crystal-3").click(function(){
        
        userScore = userScore + crystal3;
        $("#user-score").html ("Current Score: " + userScore);
        if (userScore === scoreTarget){
            alert ("You won!");
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (userScore > scoreTarget){
            alert ("You lost!");
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
        $("#user-score").html ("Current Score: " + userScore);
        $("#target-score").html("Target Score: " + scoreTarget); 
        
    });
    
    $("#crystal-4").click(function(){
        
        userScore = userScore + crystal4;
        $("#user-score").html ("Current Score: " + userScore);
        if (userScore === scoreTarget){
            alert ("You won!");
            wins++;
            $("#wins").html("Wins: " + wins);
            newGame();
        }
        if (userScore > scoreTarget){
            alert ("You lost!");
            losses++;
            $("#losses").html("Losses: " + losses);
            newGame();
        }
        $("#user-score").html ("Current Score: " + userScore);
        $("#target-score").html("Target Score: " + scoreTarget);     
    });
    
    
    
    
    
    
    
    
    
    
    }); //DOCUMENT READY END
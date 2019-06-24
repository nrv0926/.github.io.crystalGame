//js logic
$(document).ready(function() {
    // Generates random number to guess
    var Random = Math.floor(Math.random() * 102 + 19)

    // Display random number
    $('#scoreToMatch').text(Random);

    //Generate random number for each crystal
    var crystalOne = Math.floor(Math.random() * 12 + 1)
    var crystalTwo = Math.floor(Math.random() * 12 + 1)
    var crystalThree = Math.floor(Math.random() * 12 + 1)
    var crystalFour = Math.floor(Math.random() * 12 + 1)

    // Variables to keep track of wins, losses and total
    var playerScore = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#losses').text(losses);

    // Reset game
    function reset() {
        Random = Math.floor(Math.random() * 102 + 19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        crystalOne = Math.floor(Math.random() * 12 + 1);
        crystalTwo = Math.floor(Math.random() * 12 + 1);
        crystalThree = Math.floor(Math.random() * 12 + 1);
        crystalFour = Math.floor(Math.random() * 12 + 1);
        playerScore = 0;
        $('#totalScore').text(playerScore);
    }
    // Display wins
    function winner() {
        alert("Winner Winner Chicken Dinner!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    // Display losses
    function loser() {
        alert("Try Again, You Lose!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
    // Clicking crystals
    $('#one').on('click', function() {
        playerScore = playerScore + crystalOne;
        console.log("New playerScore= " + playerScore);
        $('#totalScore').text(playerScore);
        //Win & lose conditions
        if (playerScore == Random) {
            winner();
        } else if (playerScore > Random) {
            loser();
        }
    })
    $('#two').on('click', function() {
        playerScore = playerScore + crystalTwo;
        console.log("New playerScore= " + playerScore);
        $('#totalScore').text(playerScore);
        if (playerScore == Random) {
            winner();
        } else if (playerScore > Random) {
            loser();
        }
    })
    $('#three').on('click', function() {
        playerScore = playerScore + crystalThree;
        console.log("New playerScore= " + playerScore);
        $('#totalScore').text(playerScore);

        if (playerScore == Random) {
            winner();
        } else if (playerScore > Random) {
            loser();
        }
    })
    $('#four').on('click', function() {
        playerScore = playerScore + crystalFour;
        console.log("New playerScore= " + playerScore);
        $('#totalScore').text(playerScore);

        if (playerScore == Random) {
            winner();
        } else if (playerScore > Random) {
            loser();
        }
    });
});
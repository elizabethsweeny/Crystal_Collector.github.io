$(document).ready(function() {
  //GLOBAL VARIABLES
  //-------------------------------------
  //Game Wins and Losses Count
  var winCounter = 0;
  var lossCounter = 0;
  //Target and Current Number Count
  var targetNum = 0;
  var currentNum = 0;
  //Crystal Variables
  var crystal = {
    crystal1: {
      name: "Purple",
      value: 0
    },
    crystal2: {
      name: "Teal",
      value: 0
    },
    crystal3: {
      name: "White",
      value: 0
    },
    crystal4: {
      name: "Blue",
      value: 0
    }
  };

  //FUNCTIONS
  //-------------------------------------
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var gamePlay = function() {
    currentNum = 0;
    targetNum = randomIntFromInterval(19, 120);

    crystal.crystal1.value = randomIntFromInterval(1, 12);
    crystal.crystal2.value = randomIntFromInterval(1, 12);
    crystal.crystal3.value = randomIntFromInterval(1, 12);
    crystal.crystal4.value = randomIntFromInterval(1, 12);

    $("#crystalCount").text(currentNum);
    $("#randomNum").text(targetNum);

    // Testing Console
    console.log("-----------------------------------");
    console.log("Current Number: " + currentNum);
    console.log(
      "Purple: " +
        crystal.crystal1.value +
        " | Teal: " +
        crystal.crystal2.value +
        " | White: " +
        crystal.crystal3.value +
        " | Blue: " +
        crystal.crystal4.value
    );
    console.log("-----------------------------------");
  };

  var checkWin = function() {
    if (currentNum > targetNum) {
      alert("Sorry man, you've lost! Arrrrrrr");
      lossCounter++;
      gamePlay();
    } else if (currentNum === targetNum) {
      alert("Congratulations, you've won all the stuff!");
      winCounter++;
      $("#score").text(winCounter);
      gamePlay();
    }
  };

  var addValues = function(clickedCrystal) {
    currentNum += clickedCrystal.value;
    $("#crystalCount").text(currentNum);
    checkWin();
    console.log("currentNum" + currentNum);
  };

  gamePlay();

  $("#crystal1").click(function() {
    addValues(crystal.crystal1);
  });

  $("#crystal2").click(function() {
    addValues(crystal.crystal2);
  });

  $("#crystal3").click(function() {
    addValues(crystal.crystal3);
  });

  $("#crystal4").click(function() {
    addValues(crystal.crystal4);
  });

});
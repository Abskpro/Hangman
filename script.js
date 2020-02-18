window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var words = [
    "furr",
    "puff",
    "greed",
    "hungry",
    "puppy",
    "library",
    "History",
    "civilization",
    "democracy",
    "public",
    "meaning",
    "immune"
  ];
  var hangman = {
    rope: function() {
      ctx.beginPath();
      ctx.moveTo(350, 0);
      ctx.lineTo(350, 75);
      ctx.stroke();
    },
    head: function() {
      ctx.beginPath();
      ctx.arc(350, 125, 50, 0, 2 * Math.PI);
      ctx.stroke();
    },
    body: function() {
      ctx.beginPath();
      ctx.moveTo(350, 175);
      ctx.lineTo(350, 300);
      ctx.stroke();
    },
    lefthand: function() {
      ctx.beginPath();
      ctx.moveTo(350, 175);
      ctx.lineTo(450, 275);
      ctx.stroke();
    },
    righthand: function() {
      ctx.beginPath();
      ctx.moveTo(350, 175);
      ctx.lineTo(250, 275);
      ctx.stroke();
    },
    rightleg: function() {
      ctx.beginPath();
      ctx.moveTo(350, 175);
      ctx.lineTo(250, 275);
    },
    leftleg: function() {
      ctx.beginPath();
      ctx.moveTo(350, 300);
      ctx.lineTo(250, 400);
      ctx.stroke();
    },
    rightleg: function() {
      ctx.beginPath();
      ctx.moveTo(350, 300);
      ctx.lineTo(450, 400);
      ctx.stroke();
    }
  };

  var parts = [
    "head",
    "body",
    "lefthand",
    "righthand",
    "leftleg",
    "rightleg",
    "rope"
  ];

  let random = Math.floor(Math.random() * 12 + 1);
  var canvas = document.getElementById("canvas");
  var selected_word = words[random];
  let spread = [...selected_word];
  console.log(selected_word);
  spread.map(curr => {
    const li = document.createElement("LI");
    const guess = document.getElementById("guess");
    const textnode = document.createTextNode("_");
    li.appendChild(textnode);
    li.classList.add(`word_${curr}`);
    guess.appendChild(li);
  });

  var counter = 1;
  window.onkeypress = function(e) {
    var count = spread.filter(curr => {
      return curr === e.key;
    });
    var li = document.createElement("LI");
    var node = document.createTextNode(e.key);
    li.appendChild(node);
    document.getElementById("letters-used").appendChild(li);
    if (count.length != 0) {
      console.log("it is not empty");
      count.forEach((curr, index) => {
        var node = document.getElementsByClassName(`word_${e.key}`)[index];
        node.innerHTML = e.key;
      });
    } else {
      switch (counter) {
        case 1:
          hangman.rope();
          counter += counter;
          break;
        case 2:
          hangman.head();
          counter = counter + 1;
          break;
        case 3:
          hangman.body();
          counter = counter + 1;
          break;
        case 4:
          hangman.lefthand();
          counter = counter + 1;
          break;
        case 5:
          hangman.righthand();
          counter = counter + 1;
          break;
        case 6:
          hangman.leftleg();
          counter = counter + 1;
          break;
        case 7:
          hangman.rightleg();
          counter = counter + 1;
          break;
        default:
              alert('game over')
              let message = confirm('play again');
              if(message == true){
                  location.reload();
              }
          console.log("gameover");
      }
    }
  };
};

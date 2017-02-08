//JS code goes here


/*
   a, b, c,
   d, e, f,
   g,, h, i
*/

// 1. Ensure each player is allotted a distinct symbol
// 2. Make sure- once clicked- a box cannot be modifies
// 3. See who is winning


var i, p1, p2, turn = true;
var clicked = [];

/*
  turn : true/false
      if(turn == true) X/p1
      else O/p2
*/

function play(event)
{

  var element = event.target;
  console.log(event);

  if(clicked[element.id] != "X" || clicked[element.id] != "O")
  {
     if(turn == true)
        clicked[element.id] = "X";  // display
      else
        clicked[element.id] = "O";

      console.log(clicked); // sets clicked to

      element.innerHTML = turn ? "X" : "O";
      turn != turn;
  }
}


// horizontal match
if(clicked[0] == clicked[1] &&  clicked[2] == clicked[2])
{

}

if(clicked[3] == clicked[4] && clicked[4]== clicked[5])
{

}
if(clicked[6] == clicked[7] && clicked[7]== clicked[8])
{

}

// vertical match
if(clicked[0] == clicked[3] && clicked[3]== clicked[6])
{

}
if(clicked[1] == clicked[4] && clicked[4]== clicked[7])
{

}
if(clicked[2] == clicked[5] && clicked[5]== clicked[8])
{

}
// diagonal match
if(clicked[0] == clicked[4] && clicked[4]== clicked[8])
{

}
if(clicked[2] == clicked[4] && clicked[4]== clicked[6])
{

}

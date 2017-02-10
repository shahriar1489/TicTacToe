//JS code goes here

// 1. Ensure each player is allotted a distinct symbol : DONE
// 2. Make sure- once clicked- a box cannot be modifies : DONE
// 3. Declare who is winning : DONE
// 4. Make the reset button work : 

var turn = true, done = false;
var clicked = [];
var visit = [];
var win_char = "Z";

for(var i = 0; i < 9; i++)
{
  visit.push(false);
}

function play(event)
{

  var element = event.target;
  console.log(event);

  if(visit[element.id] === false) // if the node is not visited 
  {
    visit[element.id] = true;
    if(turn == true)
    {
        
        clicked[element.id] = "X";  // display
        element.innerHTML = "X";
    }else{
        
        clicked[element.id] = "O";  // this is logically right 
        element.innerHTML = "O";      
    }

      console.log(clicked); // sets clicked to

      if(turn === true) turn = false; 
      else turn = true;
  }
}

//console.log("Line 90, win_char = " + win_char);
function status(event)
{
    win_char = "Z"; 

    // horizontal match
    /*
     0, 1, 2,
     3, 4, 5,
     6, 7, 8
    */

    if(clicked[0] === clicked[1] &&  clicked[0] === clicked[2])
    {
      win_char = clicked[0];
    }

    if(clicked[3] === clicked[4] && clicked[4] === clicked[5])
    {
      win_char = clicked[3];
    }
    
    if(clicked[6] === clicked[7] && clicked[7] === clicked[8])
    {
      win_char = clicked[6];
    }

    // vertical match
    if(clicked[0] === clicked[3] && clicked[3] === clicked[6])
    {
      win_char = clicked[0];
    }
    if(clicked[1] === clicked[4] && clicked[4] === clicked[7])
    {
      win_char = clicked[1]; 
    }
    if(clicked[2] === clicked[5] && clicked[5] === clicked[8])
    {
      win_char = clicked[2];
    }
    // diagonal match
    if(clicked[0] === clicked[4] && clicked[4] === clicked[8])
    {
      win_char = clicked[0];
    }
    if(clicked[2] === clicked[4] && clicked[4] === clicked[6])
    {
      win_char = clicked[2];
    }

    
    if(win_char === "X")
    {
      document.getElementById("game_status_display").innerHTML = "Player 1 won!"; 
    }
    
    else if(win_char === "O")
    {
      document.getElementById("game_status_display").innerHTML = "Player 2 won!";
    }

    else // execute this condition if and only if all nine nodes are visited
    {  
      var done = true;  // checks only if the game is over 
      for(var i = 0; i < 9; i++)
      {
        if(visit[i] === false)
        {
          done = false; 
          break; 
        }  
      }
      if(done === true)
        document.getElementById("game_status_display").innerHTML = "Tie";
    }//win_char = "Z";
  //}
}

// 4. Make the reset button work : 
function reset(event)
{
  //document.getElementById("restart");
  turn = true; 
  done = false;
  clicked = []; // empty this array 
  visit = [];
  win_char = "Z";

  // remove "X" or "O" from the nodes
  for(var i = 0; i < 9; i++)
  {
    document.getElementById(i.toString()).innerHTML = "";
    visit.push(false);
  }

  // Change the game status 
  document.getElementById("game_status_display").innerHTML = "New Game"; // 10:36 not working 
}
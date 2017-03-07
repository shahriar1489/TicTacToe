// 1. Ensure each player is allotted a distinct symbol : DONE
// 2. Make sure- once clicked- a box cannot be modifies : DONE
// 3. Declare who is winning : DONE
// 4. Make the reset button work :

var turn = true, done = false;
var clicked = [];
var visit = [];
var win_char = "Z";
var int, int2, int3, count=0;

for(var i = 0; i < 9; i++)
{
  visit.push(false);
}

function play(event)
{

  var element = event.target; // What does this do?
  console.log("event = " + event);

  if(visit[element.id] === false) // if the node is not visited
  {
    // element.id is of string type
    visit[element.id] = true;
    if(turn == true)
    {
        clicked[element.id] = "X";  // display
        element.innerHTML = "X";
    }else{
        clicked[element.id] = "O";  // this is logically right
        element.innerHTML = "O";
    }
    console.log("clicked = " + clicked); // sets clicked to
    // check here who won
    int = parseInt(element.id); // 18:07

    //horizontal
    // check if the two values in front are within range
    int2 = int+1;
    int3 = int+2;
    //int = 0, 3, 6
    if( ( (0<=int2 && int2<=8) &&  (int3<=8 && int3>=0) ) && (int == 0 || int == 3 || int == 6) )
    {
      if( clicked[int] == clicked[int2] && clicked[int2] == clicked[int3] )
      {
        win_char = clicked[int];
        if(win_char == "X")
        {
          console.log("H O R I Z O N T A L- 0 3 6");
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }
        else{
          console.log("H O R I Z O N T A L- 0 3 6");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }
        // mark all the other boxes visited
        for(var i = 0; i < 9; i++)
          visit[i] = true;
      }
    }

    int2 = int-1;
    int3 = int-2;
    // int = 2, 5, 8
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && (int == 2 || int == 5 || int == 8) ){  // for int = 2, 5, 8
      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        win_char = clicked[int];
        if(win_char == "X"){
          console.log("H O R I Z O N T A L- 2 5 8");
         document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }
        else{
          console.log("H O R I Z O N T A L- 2 5 8");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }
        // mark all the other boxes visited
        for(var i = 0; i < 9; i++)
          visit[i] =true;
      }
    }

    int2 = int-1;
    int3 = int+1;
    // int = 1, 4, 7
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && (int == 1 || int == 4 || int == 7)){  // for int = 1, 4, 7

      if( clicked[int] == clicked[int2] && clicked[int2] == clicked[int3] ){
        win_char = clicked[int];
        if(win_char == "X"){
          console.log("H O R I Z O N T A L- 0 3 6");
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }

        else{
          console.log("H O R I Z O N T A L- 0 3 6");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }
        // mark all the other boxes visited
        for(var i = 0; i < 9; i++)
          visit[i] = true;
      }
    }

    // vertical
    int2 = int+3;
    int3 = int+6;
    // i = 0, 1, 2
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && (int == 0 || int == 1 || int == 2) ){
      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        win_char = clicked[int];
        if(win_char == "X")
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        else
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int-3;
    int3 = int-6;
    // int 6, 7, 8
    if( ( 0<=int2 && int2<=8 && 0<=int3 && int3<=8 ) && (int == 6 || int == 7 || int == 8) ){
      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        win_char = clicked[int];
        if(win_char == "X")
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        else
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int-3;
    int3 = int+6;
    // int = 3, 4, 5
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && (int==3 || int==4 || int==5) ){
      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        win_char = clicked[int];
        if(win_char == "X")
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        else
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";

        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    // diagonal
//    console.log("D I A G O N A L");
    int2 = int+4;
    int3 = int+8;
    // int = 0
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && (int == 0)){  // for int = 0

      console.log("int & int2 & int3 met, int = " + int +", int2 = " + int2 + ", int3 = " + int3);

      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        console.log("A L L      H A V E  S A M E   C H A R S");

        win_char = clicked[int];
        if(win_char == "X"){
          console.log("D I A G O N A L- 0");
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }

        else{
          console.log("D I A G O N A L- 0");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }


        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int-4;
    int3 = int-8;
    // int = 8
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && int == 8){  // for int = 8

      console.log("int & int2 & int3 met, int = " + int + ", int2 = " + int2 + ", int3 = " + int3);

      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        //console.log("A L L      H A V E  S A M E   C H A R S");

        win_char = clicked[int];
        if(win_char == "X"){
          console.log("D I A G O N A L- 8");
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }
        else{
          console.log("D I A G O N A L- 8");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }


        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int+2;
    int3 = int+4;
    // int = 2
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && int == 2){
      console.log("int & int2 & int3 met, int = " + int + ", int2 = " + int2 + ", int3 = " + int3);

      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        console.log("A L L      H A V E  S A M E   C H A R S");

        win_char = clicked[int];
        if(win_char == "X"){
          console.log("D I A G O N A L- 8");
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }

        else{
          console.log("D I A G O N A L- 8");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }


        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int-2;
    int3 = int-4;
    // int = 6

    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && int == 6){  // for int = 0

      console.log("int & int2 & int3 met, int = "+ int + ", int2 = " + int2 + ", int3 = " + int3);

      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        console.log("A L L      H A V E  S A M E   C H A R S");

        win_char = clicked[int];
        if(win_char == "X"){
          console.log("D I A G O N A L- 6");
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        }

        else{
          console.log("D I A G O N A L- 6");
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";
        }

        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int-4;
    int3 = int+4;
    // int = 4

    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && int == 4 ){
      console.log("int & int2 & int3 met, int = " + int + ", int2 = " + int2 + ", int3 = " + int3);

      if(clicked[int] == clicked[int2] && clicked[int2] == clicked[int3]){
        console.log("A L L      H A V E  S A M E   C H A R S");

        win_char = clicked[int];
        if(win_char == "X")
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        else
          document.getElementById('game_status_display').innerHTML = "Player 2 won!"

        // mark all the other boxes visited
        for(var i = 0; i < 9; i++){
          visit[i] = true;//.push(true);
        }
      }
    }

    int2 = int-2;
    int3 = int+2;
    // int = 4
    if( (0<=int2 && int2<=8 && 0<=int3 && int3<=8) && int == 4){  // for int = 0
      console.log("int & int2 & int3 met, int = " + int +", int2 = " + int2 + ", int3 = " + int3);
      if(clicked[int] === clicked[int2] && clicked[int2] === clicked[int3])
      {
        console.log("A T            2 '4' 6");
        win_char = clicked[int];
        if(win_char == "X")
          document.getElementById('game_status_display').innerHTML = "Player 1 won!";  // mark who won
        else
          document.getElementById('game_status_display').innerHTML = "Player 2 won!";

        // mark all the other boxes visited
        for(var i = 0; i < 9; i++)
        {
          visit[i] = true;//.push(true);
        }
      }
    }
    count++;
    console.log("count = " + count);
    console.log("win_char = " + win_char);
    console.log("visit.length = " + visit.length);
    if(count == 9 && win_char == "Z"){
      document.getElementById('game_status_display').innerHTML = "Tie!";
    }

    if(turn === true) turn = false;
    else turn = true;
  }

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

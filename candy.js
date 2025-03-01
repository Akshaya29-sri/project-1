const candies=["Orange","Purple","Yellow","Red","Blue","Green"];
let board=[];
const rows=9;
const columns=9;
let score=0; 
let currTile;
let otherTile;

window.onload=function(){
    startGame();
}
function randomCandy(){
    return candies[Math.floor(Math.random()*candies.length)];
}
function startGame(){
    for(let r=0;r<rows;r++){
        let row=[]; //holds all image tag for specific row and append it to the board
        for(let c=0;c<columns;c++){
            let tile=document.createElement("img");
          tile.id=r.toString() + "-" + c.toString();
          tile.src="images/" + randomCandy() + ".png";

          /*tile.addEventListener("dragStart",dragStart);
          tile.addEventListener("dragOver",dragOver);
          tile.addEventListener("dragEnter",dragEntert);
          tile.addEventListener("dragLeave",dragLeave);
          tile.addEventListener("drop",drop);
          tile.addEventListener("dragEnd",dragEnd);*/


          document.getElementById("board").append(tile);
          row.push(tile);

        }
        board.push(row);
    }
    console.log(board);
}
function dragStart(){
    currTile=this;
}
function dragOver(e){
    e.preventDefault();
}
function dragLeave(){

}
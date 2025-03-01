const candies=["Orange","Purple","Yellow","Red","Blue","Green"];
let board=[];
const rows=9;
const columns=9;
let score=0; 
let currTile;
let otherTile;
//window.currTile=this;

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
          tile.setAttribute("draggable","true");

          tile.addEventListener("dragstart", function(){
            console.log("Drag Started on",this.id);
          });
          console.log("added",tile.id);
          tile.addEventListener("dragover",dragOver);
          tile.addEventListener("dragenter",dragEnter);
          tile.addEventListener("dragleave",dragLeave);
          tile.addEventListener("drop",dragDrop);
          tile.addEventListener("dragend",dragEnd);


          document.getElementById("board").appendChild(tile);
          row.push(tile);

        }
        board.push(row);
    }
    console.log(board,"Board created successfully");
}
function dragStart(){
    //console.log("drag started on",this.id);
    /*if(!this){
        console.log("error");
        return;
    }*/
    currTile = this;
    //console.log("drag start-currTile set to",currTile.id)
    window.currTile=this;
    console.log("drag start-currTile set to",currTile.id)
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
e.preventDefault();
}
function dragLeave(){

}
function dragDrop(){
    //otherTile=this;
    console.log("dropped on",this.id);
    otherTile=this;
}
function dragEnd(){
    console.log("drag End trigerred");
    currTile=window.currTile || currTile;
    //console.log("currTile:",currTile ? currTile.id:"undefined");
    //console.log("otherTile:",otherTile ? otherTile.id:"undefined");
    //if(!currTile||!otherTile){
        //console.log("Error:currTile or ortherTile is undefined");
       // return;
    //}
    //console.log("beforee swap-currTile:",currTile.id,"otherTile:",otherTile.id);
    //console.log("beforee swap-currTile.src:",currTile.src,"otherTile:",otherTile.src);
    if(!currTile){
       currTile=window.currTile;
        return;
    }
        if(!currTile||!otherTile){
            console.log("Error:currTile or ortherTile is undefined");
        return;
        }
    console.log("beforeSwap-currTile",currTile.id,"otherTile:",otherTile.id);
    /*let currImg= currTile.src;
    let otherImg=otherTile.src;
    currTile.src=otherImg;
    otherTile.src=currImg;*/
    let currImg=currTile.src;
    let otherImg=otherTile.src;
    currTile.src=otherImg;
    otherTile.src=currImg;
    console.log("swap Scessful",currTile.id,"<->",otherTile.id);

}
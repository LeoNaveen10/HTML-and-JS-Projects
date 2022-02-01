document.getElementById("roll").addEventListener("click", rolldice);
document.getElementById("reset").addEventListener("click", reset);

let image = [
    document.getElementById("1stimg"),
    document.getElementById("2ndimg"),
    document.getElementById("3rdimg")
]

let score = [
    document.getElementById("score1"),
    document.getElementById("score2"),
    document.getElementById("score3")
]

var keepscore = [0,0,0];
var currentplayer = 0;

function rolldice() {

    if (keepscore[currentplayer] >= 10){
        reset();
     } 
     
    let no = Math.floor(Math.random() * 6) + 1;

    keepscore[currentplayer] += no;
    score[currentplayer].innerHTML = keepscore[currentplayer];

    image[currentplayer].setAttribute("src", "pic"+no+".png");
    
    //image[1 - currentplayer].setAttribute("src", "pic" + 6 + ".png");
    if (keepscore[currentplayer] >= 10)
        document.getElementById("player").innerHTML = "player " + (currentplayer + 1) + " wins";
     else {
        if(currentplayer==2) currentplayer = 0;
        //else if(currentplayer==1) currentplayer=2;
        else currentplayer++;
       document.getElementById("player").innerHTML = "player" + (currentplayer + 1) + "'s turn";
     }
}



function reset() {

     currentplayer=0;
     document.getElementById("player").innerHTML = "player 1's turn";

    for(let i=0;i<3;i++)
    {
        image[i].setAttribute("src", "pic6.png");
        score[i].innerHTML = 0; 
        keepscore[i]=0;
    }

}   

var timer =  10;
var checkMe;
var score = 0;

function newLevel(){
    var clutter = "";
    for (var i=0;i<65;i++){
        var random = Math.floor(Math.random()*10)
        clutter += `<div class="circle2 button">${random}</div>`
    }
    $(".playing_area").html(clutter)
}




function timerr(){
    setInterval(function(){
        if(timer>0){
            timer--;
            $("#time").text(timer)
        }
        else(
            $(".playing_area").html(`<h1>Game Over.. </h1><br><h1>Your score is ${score}`)

        )
    },1000)
}

function setNewHit(){
    checkMe = Math.floor(Math.random()*10)
    $("#hitt").text(checkMe);
}

function scoree(){
    $(".playing_area").click(function(data){
        if(Number(data.target.innerHTML)===checkMe){
            score += 10;
            $("#scoree").text(score)
            setNewHit();
            newLevel();
        }
    })
    
}


timerr()
setNewHit()
scoree();
newLevel();
console.log(checkMe);
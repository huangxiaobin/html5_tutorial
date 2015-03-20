function doFirst(){
    barSize=600;
    myMoive=document.getElementById('myMovie');
    playButton=document.getElementById('playButton');
    bar=document.getElementById('defaultBar');
    progressBar=document.getElementById('progressBar');

    playButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);
    progressBar.style.width="0px";
    playButton.innerHTML="start";
}

function playOrPause(){
    if (!myMoive.paused && !myMoive.ended) {
        myMoive.pause();
        playButton.innerHTML="Play";
        window.clearInterval(updateBar);
    } else{
        myMoive.play();
        playButton.innerHTML="Pause";
        window.setInterval(update, 500);
    }
}

function update(){
    if (!myMoive.ended) {
        var size =parseInt(myMoive.currentTime*barSize/myMoive.duration);
        progressBar.style.width=size+"px";
    } else {
        progressBar.style.width="0px";
        playButton.innerHTML="Play";
        window.clearInterval(updateBar);
    }
}

function clickedBar(e){
    if (!myMoive.paused && !myMoive.ended) {
        var mouseX=e.pageX-bar.offsetLeft;
        var newTime=mouseX*myMoive.duration/barSize;
        myMoive.currentTime=newTime;
        progressBar.style.width=mouseX+"px";
    }
}

window.addEventListener('load', doFirst, false);
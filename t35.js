function doFirst(){
    var x = document.getElementById('canvas');
    canvas=x.getContext('2d');
/*    
    canvas.srokeStyle="red";
    canvas.fillStyle="blue";
    canvas.strokeRect(10,10,100,100);
    canvas.fillRect(10,120,100,100);
    canvas.clearRect(20,130,50,50);
*/
/*
    var g=canvas.createLinearGradient(10,10,100,100);
    g.addColorStop(.0,"blue");
    g.addColorStop(.5,"green");
    g.addColorStop(1,"red");
    canvas.fillStyle=g;
    canvas.fillRect(10,10,100,100);
*/
/*
    canvas.beginPath();
    canvas.moveTo(50,50);
    canvas.lineTo(70,250);
    canvas.lineTo(300,200);
    canvas.closePath();
    canvas.stroke();
*/
/*
    canvas.shadowOffsetX = 4;
    canvas.shadowOffsetY = 4;
    canvas.shadowBlur = 6;
    canvas.shadowColor = 'rgba(0,0,255,.5)';
    canvas.font="bold 36px Tahoma";
    canvas.textAlign="end";
    canvas.fillText("omgwtfbbq", 300, 100);
*/
    canvas.font="bold 22px Tahoma";
    canvas.textAlign="star";

/*
    canvas.fillText("start", 10, 30);

    canvas.translate(100, 150);
    canvas.fillText("after translate", 0, 0);
    
    canvas.rotate(1);
    canvas.fillText("after rotate", 0, 0);

    canvas.scale(1.5,4);
    canvas.fillText("after scale", 0, 20);
*/
/*
    canvas.save();
    canvas.fillText("start", 10, 30);
    
    canvas.rotate(1);
    canvas.fillText("after rotate", 10, 0);
    
    canvas.restore();
    canvas.fillText("after restore", 10, 30);
*/

/*
    var pic = new Image();
    pic.src="t42.png";
    pic.addEventListener('load', function(){canvas.drawImage(pic, 0, 0, x.width, x.height)}, false);
*/
    window.addEventListener('mousemove', move, false);
}

function  move(e) {
    //canvas.clearRect(0,0,700,400);
    var xPos = e.clientX;
    var yPos = e.clientY;
    canvas.fillRect(xPos-50, yPos-50, 100, 100);
}

window.addEventListener('load', doFirst, false);
function doFirst(){
    var mypic = document.getElementById('facepic');
    mypic.addEventListener("dragstart", starDrag, false);
    mypic.addEventListener("dragend", endDrag, false);
        
    var leftbox = document.getElementById('leftbox');
    leftbox.addEventListener("dragenter", dragenter, false);
    leftbox.addEventListener("dragleave", dragleave, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("drop", dropped, false);
}

function starDrag(e) {
    var code = '<image src="t44.png">';
    e.dataTransfer.setData("Text", code);
}

function dragenter(e) {
    e.preventDefault();
    leftbox.style.border = '3px solid red';
}

function dragleave(e) {
    e.preventDefault();
    leftbox.style.border = '3px solid blue';
}

function endDrag(e) {
    pic = e.target;
    pic.style.visibility = 'hidden';
//    rightbox.innerHTML = '';
}

function dropped(e) {
    e.preventDefault();
    leftbox.innerHTML = e.dataTransfer.getData("Text");
    leftbox.style.border = '3px solid blue';
}

window.addEventListener('load', doFirst, false);
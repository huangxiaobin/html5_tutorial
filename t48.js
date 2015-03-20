function doFirst(){
    var button = document.getElementById('button');
    button.addEventListener("click", save, false);
    display();
}

function save(e) {
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    
    sessionStorage.setItem(one, two);
    
    display();
    document.getElementById('one').value = "";
    document.getElementById('two').value = "";
}

function display() {
    var rightbox = document.getElementById('rightbox');
    rightbox.innerHTML = "";
    
    //var two = sessionStorage.getItem(one);
    //rightbox.innerHTML = "name: "+one+"<br/>value: "+two;
    
    for (var x = 0; x < sessionStorage.length; x++) {
        var a = sessionStorage.key(x);
        var b = sessionStorage.getItem(a);
        rightbox.innerHTML += a+"-"+b+"<br/>";
    }
        
}

window.addEventListener('load', doFirst, false);
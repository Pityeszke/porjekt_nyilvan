function hozzáad(){
    var FeladatInput = document.getElementById("Feladat").value;
    var FeladatokDiv = document.getElementById("Feladatok");
    var FolyamatDiv = document.getElementById("Folyamat");
    var KészDiv = document.getElementById("Kész");
    FeladatokDiv.ondrop = dropHandler;
    FeladatokDiv.ondragover = dragoverHandler;
    FolyamatDiv.ondrop = dropHandler;
    FolyamatDiv.ondragover = dragoverHandler;
    KészDiv.ondrop = dropHandler;
    KészDiv.ondragover = dragoverHandler;
    var újelem = document.createElement("div");
    var törlésGomb = document.createElement("button")
    újelem.className = "feladat";
    újelem.textContent = FeladatInput;
    újelem.draggable = true;
    újelem.ondragstart = dragstartHandler;
    újelem.id = "elem" + Math.floor(Math.random() * 10000);
    újelem.style.backgroundColor = "rgb(245,245,220)";
    törlésGomb.onclick = function(){
        törlés(újelem.id)
    }
    törlésGomb.textContent = "X"
    törlésGomb.style.backgroundColor = "red"
    törlésGomb.style.border = "none"
    törlésGomb.style.borderRadius = "5px"
    törlésGomb.style.margin = "5px"
    törlésGomb.style.cursor = "pointer"
    
    újelem.appendChild(törlésGomb)
    FeladatokDiv.appendChild(újelem);
    
}
function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  const elem = document.getElementById(data);
  ev.target.appendChild(elem);
  if(ev.target.id=="Kész"){
    elem.style.backgroundColor = "rgb(135,206,250)";
  }
  if(ev.target.id=="Folyamat"){
    elem.style.backgroundColor = "rgb(144,238,144)";
  }
    if(ev.target.id=="Feladatok"){
    elem.style.backgroundColor = "rgb(245,245,220)";
  }
}
function törlés(id){
    document.getElementById(id).remove()
}
function hozzáad(){
    var FeladatInput = document.getElementById("Feladat").value;
    var FeladatokDiv = document.getElementById("Feladatok");
    var újelem = document.createElement("li");
    újelem.textContent = FeladatInput;
    FeladatokDiv.appendChild(újelem);
}
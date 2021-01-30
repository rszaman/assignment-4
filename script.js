var firstClass = document.getElementById("first-class");
var economyClass = document.getElementById("economy-class");
addClickEvent("first-class-plus", function(){
    increaseSeat(firstClass);
});
addClickEvent("first-class-minus", function(){
    decreaseSeat(firstClass);
});
addClickEvent("economy-class-plus", function(){
    increaseSeat(economyClass);
});
addClickEvent("economy-class-minus", function(){
    decreaseSeat(economyClass);
});


function addClickEvent(id,clickHandler){
    document.getElementById(id).addEventListener("click",function(){
        clickHandler();
    })
}


function increaseSeat(element){
    if (parseInt(element.value) >= 0) {
        element.value = parseInt(element.value) + 1;
        calculate();
    }
}


function decreaseSeat(element){
    if(parseInt(element.value) > 0){
        element.value = parseInt(element.value) - 1;
        calculate();
    }
}


function calculate() {
    var subTotalElement = document.getElementById("subtotal");
    var vatElement = document.getElementById("vat");
    var totalElement = document.getElementById("total");
    var subtotal = (parseInt(firstClass.value) * 150) + (parseInt(economyClass.value) * 100);
    var vat = subtotal * 0.10;
    var total = subtotal + vat;
    subTotalElement.innerHTML = subtotal;
    vatElement.innerHTML = vat;
    totalElement.innerHTML = total;
}


var preview = document.getElementById("preview");

addClickEvent("booking", function() {
    document.getElementById("first-class-quantity").innerHTML = firstClass.value;
    document.getElementById("economy-class-quantity").innerHTML = economyClass.value;
    document.getElementById("confirmation-amount").innerHTML = document.getElementById("calculation").innerHTML;
    if(parseInt(firstClass.value) || parseInt(economyClass.value) > 0){
        preview.style.display = "block";
    } else {
        alert("Please choose at least one seat");
    }
});


addClickEvent("preview-btn", function() {
    preview.style.display = "none";
    firstClass.value = 0;
    economyClass.value = 0;
    calculate();
});
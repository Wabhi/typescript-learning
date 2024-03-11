var button = document.getElementById("add");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
// this '!' symbole used for  type assertion, it means that we are sure about the type of element that we get from the DOM
//and it won't be null.
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log("click...", add(+num1.value, +num2.value));
});

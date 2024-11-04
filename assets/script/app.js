btn1.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value = eval(input.value ** 2);
})
btn2.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value = eval(Math.sqrt(input.value));
})
btn3.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value = eval(Math.round(input.value));
})
btn4.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value = "";
})
btn5.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "1";
})
btn6.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "2";
})
btn7.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "3";
})
btn9.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "4";
})
btn10.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "5";
})
btn11.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "6";
})
btn13.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "7";
})
btn14.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "8";
})
btn15.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "9";
})
btn17.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "0";
})
btn8.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "*";
})
btn12.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "/";
})
btn16.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "-";
})
btn18.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += ".";
})
btn19.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value = eval(input.value);
})
btn20.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input").value += "+";
})
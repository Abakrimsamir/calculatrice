function Solve(val) {
    
    var v = document.getElementById('res') 
    v.innerHTML += val;
}
function Result() {
    console.log("kkk")
    var num2 = eval(document.getElementById('res').innerHTML);
    document.getElementById('res').innerHTML = num2;
}
function Clear() {
    var inp = document.getElementById('res');
    inp.innerHTML ='';
}
function Back() {
    var ev = document.getElementById('res');
    ev.innerHTML = ev.innerHTML.slice(0,-1);
}

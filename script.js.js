function calcule(){
var D=+document.getElementById("D").value;
var S=+document.getElementById("S").value;
var H=+document.getElementById("H").value;
var Q=Math.sqrt(2*S*D/H);
document.getElementById("Q").value=Q;
var N=D/Q;
document.getElementById("N").value=N;
}
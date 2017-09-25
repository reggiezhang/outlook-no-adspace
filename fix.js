window.onload=load();
var start;
function load(){
	setTimeout(function(){
		check();
	},500);
	var running=setInterval(function(){
		check();
	},1000);
};

function check(){
	if(document.getElementById("primaryContainer")!=null){
		if(document.getElementById("primaryContainer").children[4].getAttribute("style").indexOf("position: absolute; top: 50px; right: 0px; bottom: 0px; left: auto; height: auto; width: 165px;")==0){
			document.getElementById("primaryContainer").children[4].remove();
		}
		if(document.getElementById("primaryContainer").children[5].getAttribute("style").indexOf("overflow: hidden; position: absolute; top: 50px; right: 165px; bottom: 0px; left: 0px; height: auto; width: auto;")==0){
			document.getElementById("primaryContainer").children[5].setAttribute("style","overflow: hidden; position: absolute; top: 50px; right: 0px; bottom: 0px; left: 0px; height: auto; width: auto;");
		}
	}
}
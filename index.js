var first = document.getElementById("first");
var second = document.getElementById("second");
function one() {
	if(first.style.display == "none"){
		var text = document.createTextNode("1")
		second.appendChild(text)
	}else{
		var text = document.createTextNode("1")
		first.appendChild(text)
	}
}
function two() {
	if(first.style.display == "none"){
		var text = document.createTextNode("2")
		second.appendChild(text)
	}else{
		var text = document.createTextNode("2")
		first.appendChild(text)
	}
}
function three() {
	if(first.style.display == "none"){
		var text = document.createTextNode("3")
		second.appendChild(text)
	}else{
		var text = document.createTextNode("3")
		first.appendChild(text)
	}
}
function four() {
	if(first.style.display == "none"){
		var text = document.createTextNode("4")
		second.appendChild(text)
	}else{
		var text = document.createTextNode("4")
		first.appendChild(text)
	}
}
function five() {
	if(first.style.display == "none"){
		var text = document.createTextNode("5")
		second.appendChild(text)
	}else{
		var text = document.createTextNode("5")
		first.appendChild(text)
	}
}
		function six() {
			if(first.style.display == "none"){
				var text = document.createTextNode("6")
				second.appendChild(text)
			}else{
			var text = document.createTextNode("6")
			first.appendChild(text)}
		}
		function seven() {
			if(first.style.display == "none"){
				var text = document.createTextNode("7")
				second.appendChild(text)
			}else{
			var text = document.createTextNode("7")
			first.appendChild(text)}
		}
		function eight() {
			if(first.style.display == "none"){
				var text = document.createTextNode("8")
				second.appendChild(text)
			}else{
			var text = document.createTextNode("8")
			first.appendChild(text)}
		}
		function nine() {
			if(first.style.display == "none"){
				var text = document.createTextNode("9")
				second.appendChild(text)
			}else{
			var text = document.createTextNode("9")
			first.appendChild(text)}
		}
		function zero() {
			if(first.style.display == "none"){
				var text = document.createTextNode("0")
				second.appendChild(text)
			}else{
			var text = document.createTextNode("0")
			first.appendChild(text)}
		}
		function dot() {
			if(first.style.display == "none"){
				var text = document.createTextNode(".")
				second.appendChild(text)
			}else{
			var text = document.createTextNode(".")
			first.appendChild(text)}
		}
		function add() {
			first.style.display = "none";
			second.style.display = "block";
			document.getElementById("status").innerText = "you're doing adding";
		}
		function subtract() {
			first.style.display = "none";
			second.style.display = "block";
			document.getElementById("status").innerText = "you're doing subtract";
		}
		function multiply() {
			first.style.display = "none";
			second.style.display = "block";
			document.getElementById("status").innerText = "you're doing multiply";
		}
		function divide() {
			first.style.display = "none";
			second.style.display = "block";
			document.getElementById("status").innerText = "you're doing divide";
		}
		function hun() {
			first.style.display = "none";
			second.style.display = "block";
			document.getElementById("status").innerText = "you're doing %";
		}
		
		function equal() {
			if (document.getElementById("status").innerText === "you're doing adding") {
				var result = parseInt(first.innerHTML) + parseInt(second.innerHTML);
				document.getElementById("result").innerText = result;
				first.style.display = "none";
				second.style.display = "none";
				document.getElementById("result").style.display = "block";
			}
			if (document.getElementById("status").innerText === "you're doing subtract") {
				var result = parseInt(first.innerHTML) - parseInt(second.innerHTML);
				document.getElementById("result").innerText = result;
				first.style.display = "none";
				second.style.display = "none";
				document.getElementById("result").style.display = "block";
			}
			if (document.getElementById("status").innerText === "you're doing multiply") {
				var result = parseInt(first.innerHTML) * parseInt(second.innerHTML);
				document.getElementById("result").innerText = result;
				first.style.display = "none";
				second.style.display = "none";
				document.getElementById("result").style.display = "block";
			}
			if (document.getElementById("status").innerText === "you're doing divide") {
				var result = parseInt(first.innerHTML) / parseInt(second.innerHTML);
				document.getElementById("result").innerText = result;
				first.style.display = "none";
				second.style.display = "none";
				document.getElementById("result").style.display = "block";
			}
			if (document.getElementById("status").innerText === "you're doing %") {
				var result = parseInt(first.innerHTML) * parseInt(second.innerHTML) / 100;
				document.getElementById("result").innerText = result;
				first.style.display = "none";
				second.style.display = "none";
				document.getElementById("result").style.display = "block";
			}
		}
		function c(){
			first.innerHTML = "";
			second.innerHTML = "";
			document.getElementById("result").innerHTML = "";
			document.getElementById("status").innerText = "status";
			second.style.display = "none";
			first.style.display = "block";
		}
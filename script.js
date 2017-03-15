window.addEventListener("load",function(){
	document.getElementById("mySubmit").disabled = true;
	
	document.getElementById("prenom").addEventListener("input",checking);
	document.getElementById("nom").addEventListener("input",checking);
	document.getElementById("age").addEventListener("input",checking);
	document.getElementById("cgu").addEventListener("click",checking);
	document.getElementById("id").addEventListener("input",checking);
	document.getElementById("mdp").addEventListener("input",checking);
	document.getElementById("mdp2").addEventListener("input",checking);
	
	document.getElementById("myReset").addEventListener("click",resetFunc);
});	

function passStrength(){
	var mdp = document.getElementById("mdp").value;
	
	var lowerCase = /[a-z]/;
	var upperCase = /[A-Z]/;
	var number = /[0-9]/;
	var symbols = /[^A-Za-z0-9]/;
	
	var strength=0;
	
	if (mdp.match(lowerCase)) strength +=20;
	if (mdp.match(upperCase)) strength +=20;
	if (mdp.match(number)) strength +=20;
	if (mdp.match(symbols)) strength +=20;
	if (mdp.length>=8) strength +=20;
	
	if(strength===100) document.getElementById("strength").style.color='green';
	document.getElementById("strength").innerHTML = strength + " %";
	
	return strength;
}

function checking(good){
	var prenom = document.getElementById("prenom").value;
	var nom = document.getElementById("nom").value;
	var age = document.getElementById("age").value;
	var id = document.getElementById("id").value;
	var mdp = document.getElementById("mdp").value;
	var mdp2 = document.getElementById("mdp2").value;
	var cgu = document.getElementById("cgu").checked;
	
	var good=true;

	if(prenom.length===0){
		document.getElementById("prenomErr").innerHTML = "Insert your first name";
		good = false;
	}
	else{
		document.getElementById("prenomErr").innerHTML = "";
	}
	
	if(nom.length===0){
		document.getElementById("nomErr").innerHTML = "Insert your last name";
		good = false;
	}
	else{
		document.getElementById("nomErr").innerHTML = "";
	}
	
	if(age<18 || age.length===0){
		document.getElementById("ageErr").innerHTML = "Too young";
		good = false;
	}
	else{
		document.getElementById("ageErr").innerHTML = "";
	}
	
	if(id.length>12 || id.length===0){
		document.getElementById("idErr").innerHTML = "ID too long";
		good = false;
	}
	else{
		document.getElementById("idErr").innerHTML = "";
	}
	
	if(mdp!==mdp2 || mdp.length===0 || mdp2.length===0){
		document.getElementById("mdpErr").innerHTML = "Passwords not matching !";
		good = false;
	}
	else{
		document.getElementById("mdpErr").innerHTML = "";
	}
	
	if(!cgu){
		document.getElementById("cguErr").innerHTML = "You must accept CGU to continue.";
		good = false;
	}
	else{
		document.getElementById("cguErr").innerHTML = "";
	}
	
	if(passStrength()<100) good=false;
	
	
	if(good){
		document.getElementById("mySubmit").disabled = false;
	}else{
		document.getElementById("mySubmit").disabled = true;
	}
}

function resetFunc(){
	document.getElementById("mySubmit").disabled=true;
}
	

let prenom = prompt ("bonjour quel est ton prénom ?")

let name = prompt ("quel est ton nom de famille ? ") 

let welcomTitle = document.getElementById("welcomeTitle");

let isok= prompt("ça va ou pas ? repondre par oui ou non");

if ((isok == "oui")||(isok =="oui")||(isok == "oui"))
{
	//faire un truc
	console.log("l'utilisatrice va bien");
}
else if ((isok == "non")||(isok == "non") ||(isok == "non"))
{
	//faire autrechose 
	console.log("l'utilisatrice va mal");
}
else 
{
	console.log("l'utilisatrice ne respecte pas la question");
}


//welcomTitle.innerText = "Bienvenue " + prenom +" " + name;

/*console.log ("bojour " + prenom + " " + name )
console.log("comment vas-tu" + name +"?")*/

function convoMile(distancevalue) {
	if (distancevalue == "") {} else {
		distancevalue = parseFloat(distancevalue);
		document.getElementById("outputMile").innerHTML=(distancevalue).toFixed(2) + ' mi';
		document.getElementById("outputKilo").innerHTML=(distancevalue/0.62137).toFixed(2) + ' km';
		document.getElementById('inputKilo').value = "";
	}
}

function convoKilo(distancevalue) {
	if (distancevalue == "") {} else {
		distancevalue = parseFloat(distancevalue);
		document.getElementById("outputKilo").innerHTML=(distancevalue).toFixed(2) + ' km';
		document.getElementById("outputMile").innerHTML=(distancevalue*0.62137).toFixed(2) + ' mi';
		document.getElementById('inputMile').value = "";
	}
}
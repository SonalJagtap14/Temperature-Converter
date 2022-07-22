function convoCel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputCel").innerHTML=(tempvalue).toFixed(2) + ' &degC';
	document.getElementById("outputFahr").innerHTML=((tempvalue*(9/5)+32)).toFixed(2) + ' &degF';
	document.getElementById("outputKel").innerHTML=((tempvalue+273.15)).toFixed(2) + ' K';
	document.getElementById('inputFahr').value = "";
	document.getElementById('inputKel').value = "";
	}
}

function convoFahr(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputFahr").innerHTML=(tempvalue).toFixed(2) + ' &degF';
	document.getElementById("outputCel").innerHTML=((tempvalue-32)/1.8).toFixed(2) + ' &degC';
	document.getElementById("outputKel").innerHTML=((tempvalue+459.67)*(5/9)).toFixed(2) + ' K';
	document.getElementById('inputCel').value = "";
	document.getElementById('inputKel').value = "";
	}
}

function convoKel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputKel").innerHTML=(tempvalue).toFixed(2) + ' K';
	document.getElementById("outputCel").innerHTML=((tempvalue-273.15)).toFixed(2) + ' &degC';
	document.getElementById("outputFahr").innerHTML=((tempvalue*(9/5)-459.67)).toFixed(2) + ' &degF';
	document.getElementById('inputCel').value = "";
	document.getElementById('inputFahr').value = "";
	}
}

function getIt(arg)
	{
	//var dis=document.getElementByTagName(td);
	console.log(arg);
	document.getElementById("mydisplay").innerHTML+=arg;

	}

function clearDisplay() {
    // Select the calculator's display
    document.getElementById("mydisplay").innerHTML='';

}
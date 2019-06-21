'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomInteger(min , max)
{

	var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomInteger;
}

function requestInteger(message,min,max)
{	
	var choix;
	
	do
	{
		choix = prompt(message);
	}
	while (isNaN(choix) || choix < min || choix > max);

return choix;	

}

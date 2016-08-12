
var svg = d3.select('#placeholder')
		  .append('svg')
		  .attr('width', 840)
		  .attr('height', 680);

var color = d3.scale.category20(); // ne pas la prendre en compte mais peut être pratique pour un random color

var circlesInitPosX = Array();
var circlesInitPosY = Array();

var dataset;							//Mise en place de toute mes variables, il y en a beaucoup !!
										// Vraiment beaucoup...

var vigilantFavorable = 0;
var peuVigilantFavorable = 0;
var pasVigilantFavorable = 0;
var peuVigilantPeuFavorable = 0;
var vigilantPeuFavorable = 0;
var pasVigilantPeuFavorable = 0;
var peuVigilantPasFavorable = 0;
var vigilantPasFavorable = 0;
var pasVigilantPasFavorable = 0;

var vigilantFavorableResult;
var peuVigilantFavorableResult;
var pasVigilantFavorableResult;
var vigilantPeuFavorableResult;
var peuVigilantPeuFavorableResult;
var pasVigilantPeuFavorableResult;
var vigilantPasFavorableResult;
var peuVigilantPasFavorableResult;
var pasVigilantPasFavorableResult;



//Ma fonction qui configure mon graphique et
//les résultats exprimé en %////////////////////////////////////////////////////////////////////////
var positionAndSizeCircle = function(circle){		 
	circle 		

//le Rayon de mes cercles variables selon le
//nombre de réseaux sociaux utilisés./////////////////////////////////////////////////
	    .attr('r', function(d){
	    	var r = 0;
	    	if (d['utilisez-vousfacebook'] === "Oui"){
	    		r++;}
	    	if (d['utilisez-voustwitter'] === "Oui"){
	    		r++;}
	    	if (d['utilisez-vousinstagram'] === "Oui"){
	    		r++;}
	    	if (d['utilisez-vouslinkdin'] === "Oui"){		 
	    		r++;}										
	    	if (d['utilisez-vouspinterest'] === "Oui"){	
	    		r++;}									
	    	if (d['utilisez-voussnapchat'] === "Oui"){
	    		r++;}
	
			return r * 5;
		})


//Position Abscisse avec le niveau de vigilance des interrogés ////////////////////////////////////
//du plus vigilant à ceux qui s'en foutent complétement.///////////////////////////////////////////
		.attr('cx', function(d, i){				
			if(d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Oui, je suis très vigilant"){
				circlesInitPosX[i] = Math.random()*100;
				return 100 + circlesInitPosX[i];
			}
			if(d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "De temps en temps"){
				circlesInitPosX[i] = Math.random()*100;
				return 400 + circlesInitPosX[i];
			}
			if(d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Non, je ne fais pas attention"){
				circlesInitPosX[i] = Math.random()*50;
				return 700 + circlesInitPosX[i];
			}
		})


//Position Ordonnée selon le niveau d'approbation à la récupération de données////////////////////////
		.attr('cy', function(d, i){		
			if(d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, je pense que c'est utile au bon fonctionnement de notre société"){
				circlesInitPosY[i] = Math.random()*50;
				return 40 + circlesInitPosY[i];
			}
			if(d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, mais pas toutes, juste celles utiles"){
				circlesInitPosY[i] = Math.random()*100;
				return 250 + circlesInitPosY[i];
			}
			if(d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Non, c'est une atteinte à la vie privée"){
				circlesInitPosY[i] = Math.random()*100;
				return 500 + circlesInitPosY[i];
			}
		})


//Remplissage selon leurs choix de réseaux sociaux (avec les plus utilisés)///////////////////////////
		.attr('fill', function(d,i){	
			if (d['utilisez-vousfacebook'] === "Oui" && d['utilisez-voussnapchat'] === "Non" && d['utilisez-voustwitter'] === "Non"){
				return 'rgb(72,98,163)';
			}
			if (d['utilisez-voustwitter'] === "Oui" && d['utilisez-vousfacebook'] === "Oui"){
				return 'rgb(51,204,255)';
			}
			if (d['utilisez-voussnapchat'] === "Oui" && d['utilisez-vousfacebook'] === "Oui"){
				return 'rgb(252,253,1)';
			}
		})


//ajoute une class à chaque croisement//////////////////////////////////////////////////////////////////
		.attr('class', function(d,i){		
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Oui, je suis très vigilant" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, je pense que c'est utile au bon fonctionnement de notre société"){
				return "vigilantfavorable";
			}
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "De temps en temps" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, je pense que c'est utile au bon fonctionnement de notre société"){
				return "peuvigilantfavorable";
			}
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Non, je ne fais pas attention" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, je pense que c'est utile au bon fonctionnement de notre société"){
				return "pasvigilantfavorable";
			}

			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Oui, je suis très vigilant" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, mais pas toutes, juste celles utiles"){
				return "vigilantpeufavorable";
			}
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "De temps en temps" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, mais pas toutes, juste celles utiles"){
				return "peuvigilantpeufavorable";
			}
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Non, je ne fais pas attention" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, mais pas toutes, juste celles utiles"){
				return "pasvigilantpeufavorable";
			}

			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Oui, je suis très vigilant" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Non, c'est une atteinte à la vie privée"){
				return "vigilantpasfavorable";
			}
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "De temps en temps" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Non, c'est une atteinte à la vie privée"){
				return "peuvigilantpasfavorable";
			}
			if (d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Non, je ne fais pas attention" && d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Non, c'est une atteinte à la vie privée"){
				return "pasvigilantpasfavorable";
			}
		});
		

//Calcul le nombre de cercles pour chaque croisement//////////////////////////////////////////////////
		$(".vigilantfavorable").each(function(){
			vigilantFavorable++;
		});
		$(".peuvigilantfavorable").each(function(){
			peuVigilantFavorable++;
		});
		$(".pasvigilantfavorable").each(function(){
			pasVigilantFavorable++;
		});
		$(".vigilantpeufavorable").each(function(){
			vigilantPeuFavorable++;
		});
		$(".peuvigilantpeufavorable").each(function(){
			peuVigilantPeuFavorable++;
		});
		$(".pasvigilantpeufavorable").each(function(){
			pasVigilantPeuFavorable++;
		});
		$(".vigilantpasfavorable").each(function(){
			vigilantPasFavorable++;
		});
		$(".peuvigilantpasfavorable").each(function(){
			peuVigilantPasFavorable++;
		});
		$(".pasvigilantpasfavorable").each(function(){
			pasVigilantPasFavorable++;
		});


//Declarer var en haut en global - transforme le nombre de cercle en % /////////////////////////////////////
	 vigilantFavorableResult = (vigilantFavorable / dataset.length)*10000;
	 peuVigilantFavorableResult = (peuVigilantFavorable / dataset.length)*10000;
	 pasVigilantFavorableResult = (pasVigilantFavorable / dataset.length)*10000;

	 vigilantPeuFavorableResult = (vigilantPeuFavorable / dataset.length)*10000;
	 peuVigilantPeuFavorableResult = (peuVigilantPeuFavorable / dataset.length)*10000;
	 pasVigilantPeuFavorableResult = (pasVigilantPeuFavorable / dataset.length)*10000;

	 vigilantPasFavorableResult = (vigilantPasFavorable / dataset.length)*10000;
	 peuVigilantPasFavorableResult = (peuVigilantPasFavorable / dataset.length)*10000;
	 pasVigilantPasFavorableResult = (pasVigilantPasFavorable / dataset.length)*10000;


//Test en console
	console.log(Math.round(vigilantFavorableResult) / 100 + "%");
	console.log(Math.round(peuVigilantFavorableResult) / 100 + "%");
	console.log(Math.round(pasVigilantFavorableResult) / 100 + "%");

	console.log(Math.round(vigilantPeuFavorableResult) / 100 + "%");
	console.log(Math.round(peuVigilantPeuFavorableResult) / 100 + "%");
	console.log(Math.round(pasVigilantPeuFavorableResult) / 100 + "%");

	console.log(Math.round(vigilantPasFavorableResult) / 100 + "%");
	console.log(Math.round(peuVigilantPasFavorableResult) / 100 + "%");
	console.log(Math.round(pasVigilantPasFavorableResult) / 100 + "%");

	console.log(dataset.length);


//variable pour exprimer les résultats finaux en % arrondie à deux chiffres après la virgule//////////////////////
	var resultat1 = Math.round(vigilantFavorableResult) / 100 + "%";
	var resultat2 = Math.round(peuVigilantFavorableResult) / 100 + "%";
	var resultat3 = Math.round(pasVigilantFavorableResult) / 100 + "%";

	var resultat4 = Math.round(vigilantPeuFavorableResult) / 100 + "%";
	var resultat5 = Math.round(peuVigilantPeuFavorableResult) / 100 + "%";
	var resultat6 = Math.round(pasVigilantPeuFavorableResult) / 100 + "%";

	var resultat7 = Math.round(vigilantPasFavorableResult) / 100 + "%";
	var resultat8 = Math.round(peuVigilantPasFavorableResult) / 100 + "%";
	var resultat9 = Math.round(pasVigilantPasFavorableResult) / 100 + "%";


//Apparition des résultats avec leur texte respectif dans une balise <p> qui posséde un id/////////////////////
	$('#pourcent1').text( resultat1 + " " + "des interrogés sont favorables à la récupération de données et vigilants sur internet");
	$('#pourcent2').text( resultat2 + " " + "des interrogés sont favorables à la récupération de données et peu vigilants sur internet");
	$('#pourcent3').text( resultat3 + " " + "des interrogés sont favorables à la récupération de données et pas vigilants sur internet");

	$('#pourcent4').text( resultat4 + " " + "des interrogés sont peu favorables à la récupération de données et vigilants sur internet");
	$('#pourcent5').text( resultat5 + " " + "des interrogés sont peu favorables à la récupération de données et peu vigilants sur internet");
	$('#pourcent6').text( resultat6 + " " + "des interrogés sont peu favorables à la récupération de données et pas vigilants sur internet");

	$('#pourcent7').text( resultat7 + " " + "des interrogés ne sont pas favorables à la récupération de données et vigilants sur internet");
	$('#pourcent8').text( resultat8 + " " + "des interrogés ne sont pas favorables à la récupération de données et peu vigilants sur internet");
	$('#pourcent9').text( resultat9 + " " + "des interrogés ne sont pas favorables à la récupération de données et pas vigilants sur internet");

	$('#resultatD3').text(dataset.length + " " + "personnes ont répondu au questionnaire");
};




//Fonction D3 pour visualiser le graphique//////////////////////////////////////////////////////////////

var circles;

var visualize = function(dataset){

	circlesNb = dataset.length;

	for (var i=0; i<circlesNb*2; i++) {
		timeInc[i] = Math.random()*10;
		timeSpeed[i] = Math.random()*10;
	}

	circles = svg
		.selectAll('circle')
		.data(dataset);

		//Update
		circles
			.transition().duration(750)
			.call(positionAndSizeCircle);
																	
		//Enter
		circles
			.enter()
			.append('circle')
			.style('opacity', 0)
			.call(positionAndSizeCircle)
			.style('opacity', 0.6);

		//Exit
		circles
			.exit()
			.transition().duration(750)
			.style('opacity',0)
			.remove();

// appelle la fonction update permettant d'animer les mouvements des boules
// mais uniquement lorsque le fichier google doc aura été chargé.
	setInterval("update()", 40);
};



//Fonction TableTop//////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


window.onload = function() { init() };							//On charge init() situé plus bas

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1SGt7VvIwxQ6CHmLyQzkBJxLUsTQiALfJZuzzsGEGXlA/pubhtml';

////Dans cette fonction on fait appel au fonctionnalité de tabletop
function init() {
  Tabletop.init( { key: public_spreadsheet_url,		
                   callback: function(datasetT) {
                   	dataset = datasetT;
                   visualize(dataset);

                   }, simpleSheet: true,
  });
}




var timeInc = Array();
var timeSpeed = Array();
var circlesNb = 0;


//Fonction pour créer un effet de mouvement aux cercles avec une boucle//////////////////////////////////
function update() {

	for (var i=0; i<circlesNb*2; i++) {
		timeSpeed[i] = Math.random()*0.1;
		timeSpeed[i+circlesNb] = Math.random()*0.1;
		timeInc[i] += timeSpeed[i];
		timeInc[i+circlesNb] += timeSpeed[i+circlesNb];
	}
	
	circles.attr("cx", function(d, i) {
		if(d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Oui, je suis très vigilant"){
			return 100 + circlesInitPosX[i] + Math.sin(timeInc[i])*3;
		}
		if(d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "De temps en temps"){
			return 400 + circlesInitPosX[i] + Math.sin(timeInc[i])*3;
		}
		if(d['êtes-vousvigilantàladiffusiondevosinformationspersonnellessurinternet'] === "Non, je ne fais pas attention"){
			return 700 + circlesInitPosX[i] + Math.sin(timeInc[i])*3;
		}
	});

	circles.attr('cy', function(d, i){
		if(d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, je pense que c'est utile au bon fonctionnement de notre société"){
			circlesInitPosY[i+circlesNb] = Math.random()*50;
			return 40 + circlesInitPosY[i] + Math.sin(timeInc[i+circlesNb])*3;
		}
		if(d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Oui, mais pas toutes, juste celles utiles"){
			circlesInitPosY[i+circlesNb] = Math.random()*100;
			return 250 + circlesInitPosY[i] + Math.sin(timeInc[i+circlesNb])*3;
		}
		if(d["êtes-vousfavorableàlarécupérationdesinformationspersonnelles"] === "Non, c'est une atteinte à la vie privée"){
			circlesInitPosY[i+circlesNb] = Math.random()*100;
			return 550 + circlesInitPosY[i] + Math.sin(timeInc[i+circlesNb])*3;
		}
	});

}

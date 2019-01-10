var dictionary = [
{
	word: "akwa",
	def: "egg",
	rel: ["akwa", "aba", "aba aja"]
},
{
	word: "aba",
	def: "flat",
	rel: ["akwa", "aba", "aba aja"]
},
{
	word: "aba aja",
	def: "aba aja definition",
	rel: ["aba", "aba aja", "aba aka"]
},
{
	word: "aba aka",
	def: "aba aka definiton",
	rel: ["aba aja", "aba aka", "aba ezi"]
},
{
	word: "aba ezi",
	def: "aba ezi definition",
	rel: ["aba aka", "aba ezi", "aba icheku"]
},
{
	word: "aba icheku",
	def: "eaba icheku definition",
	rel: ["aba ezi", "aba inya", "aba icheku"]
},
{
	word: "aba inya",
	def: "aba inya definition",
	rel: ["aba icheku", "aba onu", "aba inya"]
},
{
	word: "aba onu",
	def: "aba onu definition",
	rel: ["aba inya", "aba onu", "abacha"]
},
{
	word: "abacha",
	def: "abacha definition",
	rel: ["aba onu", "abacha", "abada"]
},
{
	word: "abada",
	def: "abada definition",
	rel: ["abacha", "abada", "abadaba"]
},
{
	word: "abadaba",
	def: "abadaba definition",
	rel: ["abada", "abadaba", "abaja"]
},
{
	word: "abaja",
	def: "abaja definition",
	rel: ["abada", "abaja", "abadaba"]
}
];

//fill the dictionary with words
init = function(){
	for(var i=0; i < dictionary.length; i++){
		document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + dictionary[i].word + "</li>";
	}

}



	//display a word, its definition and related words
	show = function(i){
		document.getElementById('word_text').innerHTML = dictionary[i].word;
		document.getElementById('definition').innerHTML = dictionary[i].def;

		var list = "";

		for (var j = 0; j < dictionary[i].rel.length; j++){
			list += "<li>" + dictionary[i].rel[j] + "</li>";
			document.getElementById('related').innerHTML = list;
		}

	}


	//search functionality
	search = function(){
		query = document.getElementById('search').value;

		if (query == ""){
			return;
		}

		found = -1; //initialize found to false

		for (var i = 0; i < dictionary.length; i++){
			if (query == dictionary[i].word){
				found = i;
				break;
			}else {
				document.getElementById('word_text').innerHTML = "Word not found";
				document.getElementById('definition').innerHTML = "The word you entered is not in our dictionary";
				document.getElementById('related').innerHTML = "No related words";
			}
		}

			if (found >= 0){
				show(found);
			}
	}




		// call the init function when page loads
	init();
	//show first word in the dictionary when page loads

	show(0);


	//search for word when search_button is clicked
	document.getElementById('search_button').addEventListener("click", search);



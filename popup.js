
var form = document.getElementById("form");


function Search(){
	
	var searchTerm;
	searchTerm = document.getElementById("searchTerm").value;
	var newURL = "http://www.reddit.com/search?q="+searchTerm;
	chrome.tabs.create({url: newURL});
}
form.onsubmit=function(){Search()};

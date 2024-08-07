var list

//запрос на получение json
var request = new XMLHttpRequest()

request.open("GET", "https://dekabu.github.io/books/list.json")
request.responseType = "json"
request.send()

request.onload = function() {
	var list = request.response
	var books = []

	window.list = list;
	console.log(list)

	for (i in list) {
		a = document.createElement('tr')
		nam = document.createElement('td')
		nam.appendChild()
	}
}

//тут будет список книг
var books

//запрос на получение json
var request = new XMLHttpRequest()

request.open("GET", "list.json")
request.responseType = "json"
request.send()

request.onload = function() {
	window[books] = request.response
}

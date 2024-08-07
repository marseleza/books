//запрос на получение json
var request = new XMLHttpRequest()

request.open("GET", "https://dekabu.github.io/books/list.json")
request.responseType = "json"
request.send()

request.onload = function() {
	var list = request.response
	console.log(list)
}

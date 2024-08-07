var request = new XMLHttpRequest()

request.open("GET", "list.json")

request.responseType = "json"

request.send()

request.onload = function() {
	var books = request.response
}

var request = new XMLHttpRequest()

request.open("GET", "list.json")

request.responseType = "json"

request.send()

request.onload = function() {
	console.log(request.response)
}

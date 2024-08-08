var list
var books = []
var tableBody = document.getElementsByTagName('tbody')[0]

//запрос на получение json
var request = new XMLHttpRequest()

request.open("GET", "https://dekabu.github.io/books/list.json")
request.responseType = "json"
request.send()

request.onload = function() {
	var list = request.response

	window.list = list;
	console.log(list)

	for (i in list) {
		a = document.createElement('tr')

		title = document.createElement('td')
		link = document.createElement('a')
		link.innerText = list[i].title
		link.href = 'files/' + list[i].href
		title.appendChild(link)

		author = document.createElement('td')
		author.innerText = list[i].author

		year = document.createElement('td')
		year.innerText = list[i].year

		pages = document.createElement('td')
		pages.innerText = list[i].pages

		a.appendChild(title)
		a.appendChild(author)
		a.appendChild(year)
		a.appendChild(pages)

		books.push(a)
	}

	books.forEach(book => {
		tableBody.appendChild(book)
	})
}

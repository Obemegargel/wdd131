const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

function createbooks(articles){
	var numberofbooks = articles.length
	for (let i = 0; i < numberofbooks; i++){
		document.getElementById("books-container").innerHTML += `
		<div id="book${i}">
		</div>`
		addhtmltobookidinbooks(articles[i],i)
	}
	
}


createbooks(articles)

// addhtmltobookidinbooks(articles[0])
// console.log(articles[0])
function addhtmltobookidinbooks(article,i){
    
    document.getElementById(`book${i}`).innerHTML = `
				<div class="column1">
					<p class="article-date">${article.date}</p>
					<p class="article-ages">${article.ages}</p>
					<p class="article-genre">${article.genre}</p>
					<p class="article-stars">${article.stars}</p>
				</div>
				<div class="column2">
					<h2>${article.title}<h2>
					<img src=${article.imgSrc} alt="book image" /> 
                    <p class="article-description">${article.description}</p>
				</div>`
}
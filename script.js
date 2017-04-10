window.onload = function() {
	const button = document.querySelector('button')
	const compileMarkup = () => {
		const markUp = document.querySelector('textarea').value
		const resultsContainer = document.querySelector('.results')
		resultsContainer.innerHTML += markUp
	}

	button.addEventListener('click', compileMarkup, false)

}
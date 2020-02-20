import { films } from '../data/films'

console.log('Hello there. General Kenobi, you are a bold one.')

//console.log(document.querySelector(".greeting"))

const greetingDiv = document.querySelector('.greeting')

greetingDiv.textContent = 'I just inserted text into a DOM element using my nutty JS skills'

console.log(greetingDiv.textContent)

console.log(films)

greetingDiv.textContent = films[0].opening_crawl
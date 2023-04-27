const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('quote-author');
const LinkedinBtn = document.getElementById('linkedin');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// laoding function show loading
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// laoding function hide loading
function hideLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Show new Quote
function newQuote() {
// Pick random Quote from apiQuote array

    showLoadingSpinner();
    
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]

// check if author field is blank and replace it with unknown
    if (!quote.author){
        authorText.textContent = 'Autorius nežinomas';
    } else {
        authorText.textContent = quote.author;
    };
// Check Quote length to change styling
    quote.text.length > 150
        ? quoteText.classList.add('long-quote')
        : quoteText.classList.remove('long-quote'); 

    quoteText.textContent = quote.text;

    hideLoadingSpinner();
}

// open Linkedin
function Linkedin() {
    window.open('https://www.linkedin.com/feed/');
}

//Event listener
newQuoteBtn.addEventListener('click', newQuote);
LinkedinBtn.addEventListener('click', Linkedin)

//Load Quotes
newQuote();

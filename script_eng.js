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

    showLoadingSpinner();

    // Pick random Quote from apiQuote array
        const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
        // console.log(quote);
    // check if author field is blank and replace it with unknown
        if (!quote.author){
            authorText.textContent = 'Author unknown';
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

// Get Quotes from API
async function getQuotes() {

    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
        // alternative API for quotes
        // const apiUrl = 'https://type.fit/api/quotes';  
            try{
                const response = await fetch(apiUrl);
                apiQuotes = await response.json();
                newQuote();
            } catch(error) {
            // catch error here
                alert('error');
            }
}

// open Linkedin
function linkedin() {
    window.open('https://www.linkedin.com/feed/');
}

//Event listener
newQuoteBtn.addEventListener('click', newQuote);
LinkedinBtn.addEventListener('click', linkedin)

//Load Quotes
getQuotes();


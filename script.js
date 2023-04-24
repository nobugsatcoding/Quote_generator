const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('quote-author');
const fbBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new Quote
function newQuote() {
// Pick random Quote from apiQuote array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    
// check if author field is blank and replace it with unknown
    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    };
// Check Quote length to change styling
    quote.text.length > 150
        ? quoteText.classList.add('long-quote')
        : quoteText.classList.remove('long-quote'); 
    
    quoteText.textContent = quote.text;
}

//Get Quotes from API
// async function getQuotes() {
//     // const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         // newQuote();

//     } catch(error) {
//         // catch error here
//         alert('error');
//     }
// }

// open Facebook
function facebookQuote() {
    window.open('https://www.linkedin.com/feed/');
}

//Event listener
newQuoteBtn.addEventListener('click', newQuote);
fbBtn.addEventListener('click', facebookQuote)


//Load Quotes
// getQuotes();
newQuote()
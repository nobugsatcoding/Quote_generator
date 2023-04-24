// let apiQuotes = [];

// Show new Quote
function newQuote() {
    // Pick random Quote from apiQuote array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    console.log(quote);
}

// Get Quotes from API
// async function getQuotes() {
//     // const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         // catch error here
//         alert('error');
//     }
// }

// Load Quotes
// getQuotes();
newQuote()
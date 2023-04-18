const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const category  = document.getElementById('category');
const generateQuote = document.getElementById('generateQuote');

const categories = ['age',
  'alone',
  'amazing',
  'anger',
  'architecture',
  'art',
  'attitude',
  'beauty',
  'best',
  'birthday',
  'business',
  'car',
  'change',
  'communications',
  'computers',
  'cool',
  'courage',
  'dad',
  'dating',
  'death',
  'design',
  'dreams',
  'education',
  'environmental',
  'equality',
  'experience',
  'failure',
  'faith',
  'family',
  'famous',
  'fear',
  'fitness',
  'food',
  'forgiveness',
  'freedom',
  'friendship',
  'funny',
  'future',
  'god',
  'good',
  'government',
  'graduation',
  'great',
  'happiness',
  'health',
  'history',
  'home',
  'hope',
  'humor',
  'imagination',
  'inspirational',
  'intelligence',
  'jealousy',
  'knowledge',
  'leadership',
  'learning',
  'legal',
  'life',
  'love',
  'marriage',
  'medical',
  'men',
  'mom',
  'money',
  'morning',
  'movies',
  'success']


generateQuote.addEventListener('click', () => {
  fetch('https://api.api-ninjas.com/v1/quotes?category=' + categories[Math.floor(Math.random() * 66)], {
  headers: { 'X-Api-Key': 'qOTZ15ZTHVGRPW03iyIU4Q==EE3H8s5nDSRkJIR7'},
  })
  .then(response => response.json())
  .then(getQuote => {
    console.log(getQuote);

    quoteText.textContent = '"' + getQuote[0].quote + '"';
    author.textContent = 'AUTHOR: ' + getQuote[0].author.toUpperCase();
    category.textContent = 'CATEGORY: ' +  getQuote[0].category.toUpperCase();

    title.style.display = 'block';

  })
  .catch(error => console.error(error));
});




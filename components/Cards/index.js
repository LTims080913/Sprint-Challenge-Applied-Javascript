// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// articleContainer.appendChild(articleMaker())

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
  
    let arts = response.data.articles
    for( key in arts) {
        let piece = arts[key]

        for(value in piece){
            let subPiece = piece[value]
            articleContainer.appendChild(articleMaker(subPiece))
        }
    }
        
    
    
})

.catch( error => {
    console.log('not quite, you forgot about', error)
})
const articleContainer = document.querySelector('.cards-container')
function articleMaker(b) {
    const article = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const by = document.createElement('span');
    
   
    
    article.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = b.headline;
    by.textContent = b.authorName;
    img.src = b.authorPhoto;

    article.append(headline);
    article.append(author);
    author.append(imgContainer);
    author.append(by);
    imgContainer.append(img);
    articleContainer.append(article);

    return article
}    


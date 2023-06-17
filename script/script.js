const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();

  if (query !== '') {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDpaWkRYFz_quod31BCzVu6EbHd4PuOBpA&sort=popularity&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        displaySearchResults(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

function displaySearchResults(results) {
  searchResults.innerHTML = '';

  results.forEach((result) => {
    const resultItem = document.createElement('div');
    resultItem.textContent = result.family;

    const styles = result.variants.join(', ');
    const fontUrl = `https://fonts.googleapis.com/css?family=${encodeURIComponent(result.family)}:${encodeURIComponent(styles)}`;
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = fontUrl;
    document.head.appendChild(fontLink);

    const sampleText = document.createElement('p');
    sampleText.textContent = 'Sample Text';
    sampleText.style.fontFamily = result.family;

    resultItem.appendChild(sampleText);
    searchResults.appendChild(resultItem);
  });
}

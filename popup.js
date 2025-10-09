const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

function performSearch() {
  const query = searchBox.value.trim();
  
  if (query) {
    
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    chrome.tabs.create({ url: searchUrl }); // Open in new tab
  }
}

searchButton.addEventListener('click', performSearch);
searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch();
  }
});

searchBox.focus();
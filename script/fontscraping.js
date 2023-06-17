 document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var query = document.getElementById('search-input').value.trim();
  
    if (query.toLowerCase() === 'arial') {
      window.location.href = 'fonts/arial.zip';
    } 
    
    else if (query.toLowerCase() === 'vivaldi') {
      window.location.href = 'fonts/vivaldi.zip';
    } 
    
    else if (query.toLowerCase() === 'helvetica') {
      window.location.href = 'fonts/helvetica.zip';
    }
    
    else if (query.toLowerCase() === 'roboto') {
      window.location.href = 'fonts/roboto.zip';
    } 
    
    else if (query.toLowerCase() === 'times new roman') {
      window.location.href = 'fonts/times new roman.zip';
    } 
    else if (query.toLowerCase() === 'sans serif') {
      window.location.href = 'fonts/sans serif.zip';
    } 
    
    else if (query.toLowerCase() === 'wingdings') {
      window.location.href = 'fonts/wingdings.zip';
    } 
    else if (query.toLowerCase() === 'calibri') {
      window.location.href = 'fonts/calibri.zip';
    } 
    
    else if (query.toLowerCase() === 'verdana') {
      window.location.href = 'fonts/verdana.zip';
    } 
    
    else {
      document.getElementById('google-button').addEventListener('click', function() {
        window.location.href = 'https://fonts.google.com/?query=' + encodeURIComponent(query);
      });

      if (query !== '') {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'block';

      document.getElementById('cdn-fonts-button').addEventListener('click', function() {
        window.location.href = 'https://www.cdnfonts.com/search?q=' + encodeURIComponent(query);
      });
    }
  }
});

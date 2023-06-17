document.addEventListener('DOMContentLoaded',function(){
let input = document.getElementById('search');
let soundEffect = document.getElementById('sound-effect');
let result = document.getElementById('search-results');

input.addEventListener('keydown', function(event){
    if(event.key =='Enter'){
        {
            soundEffect.currentTime = 0;
            soundEffect.play();
           let font = input.value;
           font = font.trim().toLowerCase();
           let available = ['arial', 'verdana', 'calibri', 'helvetica', 'roboto', 'sans serif', 'times new roman', 'verdana', 'vivaldi', 'wingdings']
                if (available.includes(font) == true){
                result.style.display = 'block';
                
                result.innerHTML = `<button class="exit">X</button><p>Here is the font that you were looking for ${font.toUpperCase()}:</p>
                <p>  <a href="fonts/${font}.zip">Download</a></p>`                ;
                input.value="";
                
                                                        }
                else{
                result.style.display = 'block';
              
                result.innerHTML = `<button class="exit">X</button> <p>Font not availabe in the API Directory, check spelling or should you be redirected to one of these libraries:</p>
                <p><a href="https://fonts.google.com/?query=${font}">Google Library</a><a href="https://www.cdnfonts.com/search?q=${font}">CDN Library</a></p>`;
                input.value="";
                
                }
            let exitButton = document.querySelector('.exit');
            exitButton.addEventListener('click', function() {
                result.style.display = 'none';
               });

              
         
                
    }
}       
});

})
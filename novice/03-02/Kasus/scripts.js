const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('https://jsonplaceholder.typicode.com/users' + inputKeyword.value)
    .then(response => response.json())
    .then(response => console.log(response));
})
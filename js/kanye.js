const apiSite = 'https://api.kanye.rest/';
const kanyeDiv = document.getElementById('kanye');

fetch(apiSite + 'quote')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok!');
        }
        return response.json();
    })
    .then(data => {
        kanyeDiv.innerHTML = `${data.quote}<br>- Kanye West`;
    })
    .catch(error => {
        console.error('Error', error);
    });
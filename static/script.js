function Search() {
    const query = document.getElementById('q').value;
    const founder = document.getElementById('p').value;
    if (!query) {
        alert("Search box can't be empty");
    } else {
        fetch(`/search?query=${query}`)
            .then(response => response.json())
            .then(data => {
                const resultsContainer = document.getElementById('search-results');
                resultsContainer.innerHTML = '';

                if (data.error) {
                    resultsContainer.innerHTML = 'Error fetching data.';
                    return;
                }

                const image_url = "https://images.crunchbase.com/image/upload/";
                
                data.entities.forEach(entity => {
                    const companyInfo = {
                        name: entity.identifier.value,
                        id: entity.identifier.uuid,
                        image_id: image_url + (entity.identifier.image_id || 'N/A'),
                        description: entity.short_description
                    };

                    const companyDiv = document.createElement('div');
                    companyDiv.className = 'result-item';
                    
                    const imageElement = document.createElement('img');
                    imageElement.src = companyInfo.image_id;
                    companyDiv.appendChild(imageElement);

                    const detailsDiv = document.createElement('div');

                    const button = document.createElement('button');
                    button.setAttribute('class', 'transparent-button');
                    button.textContent = `${companyInfo.name}`;
                    button.setAttribute('onclick', `search_company('${companyInfo.id}','${companyInfo.name}','${companyInfo.image_id}','${founder}')`);
                    detailsDiv.appendChild(button);

                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = `Description: ${companyInfo.description}`;
                    detailsDiv.appendChild(descriptionElement);

                    companyDiv.appendChild(detailsDiv);
                    resultsContainer.appendChild(companyDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}

function googleSearch() {
    const query = localStorage.getItem('name');
    const element = document.getElementById('info-section');
    element.innerHTML = ''; 
    var cx = 'c18987a28bece4f56';
    var apiKey = 'AIzaSyD2I5KDxtZj9qylQNVq15eeAgMyAA-HRg0'; 
    var url = 'https://www.googleapis.com/customsearch/v1?q=' + query + '&key=' + apiKey + '&cx=' + cx;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                var title = item.title;
                var link = item.link;
                var snippet = item.snippet;

                var resultElement = document.createElement('div');
                resultElement.className = 'news-result';  // Added class for styling

                resultElement.innerHTML = `
                    <h2 class="news-title"><a href="${link}" target="_blank">${title}</a></h2>
                    <p class="news-description">${snippet}</p>
                `;
                
                element.appendChild(resultElement);
            });
        })
        .catch(error => console.error('Error fetching search results:', error));
}

function info()
{
    document.getElementById("info-section").innerHTML = "Hello, World!";
    
}

function search_company(companyId,name,img,founder)
{
    localStorage.setItem('companyId', companyId);
    localStorage.setItem('img', img);
    localStorage.setItem('founder', founder);
    
    localStorage.setItem('name', name);
    window.location.replace("http://127.0.0.1:5000/main");


}
function googleSearch_founder() {
    const query = localStorage.getItem('founder');

    const element = document.getElementById('info-section');
    element.innerHTML = ''; 
    var cx = 'c18987a28bece4f56';
    var apiKey = 'AIzaSyD2I5KDxtZj9qylQNVq15eeAgMyAA-HRg0'; 
    var url = 'https://www.googleapis.com/customsearch/v1?q=' + query + '&key=' + apiKey + '&cx=' + cx;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                var title = item.title;
                var link = item.link;
                var snippet = item.snippet;

              
                var resultElement = document.createElement('div');
                resultElement.innerHTML = '<h3><a href="' + link + '">' + title + '</a></h3><p>' + snippet + '</p>';
                element.appendChild(resultElement);
            });
        })
        .catch(error => console.error('Error fetching search results:', error));
    
}
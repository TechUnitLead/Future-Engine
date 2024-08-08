
function Search()
{
    const query = document.getElementById('q').value;
    const founder = document.getElementById('p').value;
    if(!query)
    {
        alert("search box cant be empty");
    }
    else
    {
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
                     
                    const companytable = document.createElement('table');
                    companytable.setAttribute('id','table');
                    
                    resultsContainer.appendChild(companytable);

                    data.entities.forEach(entity => {
                    const companyInfo = {
                    name: entity.identifier.value,
                    id: entity.identifier.uuid,
                     image_id: image_url + (entity.identifier.image_id || 'N/A'),
                     description: entity.short_description
                     };
                     const companyDiv = document.createElement('tbody');
                     companyDiv.className = 'company';
                     
                     
                     const row = document.createElement('tr');
                     row.setAttribute('class', 'row');
                     const column = document.createElement('td');
                     
                     const imageElement = document.createElement('img');
                     imageElement.setAttribute("class", "image");
                     imageElement.src = companyInfo.image_id;
                     column.appendChild(imageElement);
                     row.appendChild(column);

                     
                     const column1 = document.createElement('td');
                     
                     
            
                     const button=document.createElement('button');
                     button.setAttribute('class','transparent-button');
                     button.textContent=`${companyInfo.name}`;
                     button.setAttribute('onclick', `search_company('${companyInfo.id}','${companyInfo.name}','${companyInfo.image_id}','${founder}')`);
                     column1.appendChild(button);
                     
                     
                    
                     
                     const descriptionElement = document.createElement('p');
                     descriptionElement.textContent = `Description: ${companyInfo.description}`;
                     column1.appendChild(descriptionElement);
                     
                     row.appendChild(column1);

                     companyDiv.appendChild(row);
                     
         
                     companytable.appendChild(companyDiv);
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
                resultElement.innerHTML = '<h3><a href="' + link + '">' + title + '</a></h3><p>' + snippet + '</p>';
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
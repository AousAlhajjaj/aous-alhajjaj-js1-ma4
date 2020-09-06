const gamesData = document.querySelector(".games");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://api.rawg.io/api/games/" + id;





async function getGames() {
    
    
        const response = await fetch(url);
    
        const results = await response.json();

        const name = results.name;
        const description = results.description;
        const rating = results.rating;
        const background = results.background_image;

        
    
        console.log(results);

        

        gamesData.innerHTML += `
        <div>style="background-image: url('${background}')"</div>
        <h1>${name}</h1>
        <p>${description}</p>
        <h2>${rating}</h2>`
    
    
    }
    
    getGames();

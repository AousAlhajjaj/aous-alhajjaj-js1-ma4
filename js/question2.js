const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const gamesData = document.querySelector(".games");


async function getGames() {
    
try {
    const response = await fetch(url);

    const results = await response.json();
    
    const facts = results.results;

    
console.log(facts);
    

    for (let i = 0; i < facts.length; i++) {

    

        gamesData.innerHTML += `<div>
                                <a href="./question3.html?id=${facts[i].id}">The game linke</a>
                                <h3>Name: ${facts[i].name}</h3>
                                <h3>Added: ${facts[i].added}</h3>
                                <h3>Raiting: ${facts[i].rating}</h3>
                                <br><br><br></div>`
    }

}

catch(error) {
    console.log(error);
    gamesData.innerHTML = message("error", error);
}

}

getGames();
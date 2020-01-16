
document.getElementById("midCircle").addEventListener("click",function () {


    let pokemon = document.getElementById("input_field");
    let pokemonData = [];
    axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon.value.toLowerCase() + "/")
        .then(function (Pokedata) {
            pokemonData = Pokedata.data;



            console.log(Pokedata)
            //Get sprites from API
           let sprites = document.getElementById("sprite");
            sprites.src = pokemonData.sprites.front_default;
            console.log(pokemonData.sprites.front_default);



            //Get ID number from API
            let poknr = pokemonData.id;
            document.getElementById("pokNr").innerHTML = "ID: " + poknr;


            // Get pokemon name from API
            let pokName = pokemonData.name;
            document.getElementById("pokName").innerHTML = "Name: " + pokName;

            //randomizer of moves
            for (let j = 2; j < 5 ; j++) {
                let moveX = document.createElement("div");
                moveX.id = 'move' + [j];
                console.log(moveX)
                document.getElementById("moves").appendChild(moveX);
                // console.log("move" + [j])
            }

            let moveList = [];
            moveList.push(pokemonData.moves);
            for (let i = 0; i < 4 ; i++) {
                let rndNumber = randomizer();
                randomizer(moveList.length);

                let moveName = pokemonData.moves[rndNumber].move.name;

                document.getElementById("move" +(i + 1 )+ '').innerHTML = pokemonData.moves[rndNumber].move.name;

                console.log(pokemonData.species.url)
            }

        });


          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.value.toLowerCase()}`)
              .then(function (response) {
                  console.log(response);

                  let prevName = response.data.evolves_from_species.name;

                    console.log(prevName)



                  axios.get(`https://pokeapi.co/api/v2/pokemon/${prevName}/`)
                    .then(function (antwoord) {
                        console.log(antwoord)
                        let prevEvolSprite = document.getElementById("evolPrev");
                        prevEvolSprite.src = antwoord.data.sprites.front_default;

                    });
              });






    // axios.get(pokemonData.species.url)
    //     .then(function(response) {
    //     return response.json();
    // });



    //Randomizer function
    function randomizer() {
        return Math.floor(Math.random() * 50);
    }



});

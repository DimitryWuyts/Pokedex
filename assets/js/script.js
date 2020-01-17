
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

            //Get ID number from API
            let poknr = pokemonData.id;
            document.getElementById("pokNr").innerHTML = "ID: " + poknr;


            // Get pokemon name from API
            let pokName = pokemonData.name;
            document.getElementById("pokName").innerHTML = "Name: " + pokName;

            //Get type of pokemon from API

                let pokType1 = pokemonData.types[0].type.name;
                // let pokType2 = pokemonData.types[1].type.name;
                // pokType += pokemonData.types[1].type.name;
                document.getElementById("pokType").innerHTML = pokType;
                console.log(pokType);



            //randomizer of moves
            for (let j = 2; j < 5 ; j++) {
                let moveX = document.createElement("div");
                moveX.id = 'move' + [j];
                document.getElementById("moves").appendChild(moveX);
                // console.log("move" + [j])
            }

            let moveList = [];
            moveList.push(pokemonData.moves);
            for (let i = 0; i < 4 ; i++) {
                let rndNumber = randomizer();
                randomizer(moveList.length);

                let moveName = pokemonData.moves[rndNumber].move.name;

                document.getElementById("move" +(i + 1 )+ '').innerHTML =  pokemonData.moves[rndNumber].move.name;


            }

        });


          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.value.toLowerCase()}`)
              .then(function (response) {

                  if (response.data.evolves_from_species == null) {
                        document.getElementById("evolPrev").src ="";
                  }


                  else {
                      let prevName = response.data.evolves_from_species.name;

                      axios.get(`https://pokeapi.co/api/v2/pokemon/${prevName}/`)
                          .then(function (antwoord) {

                              let prevEvolSprite = document.getElementById("evolPrev");
                              prevEvolSprite.src = antwoord.data.sprites.front_default;

                          });
                  }





              });






    // axios.get(pokemonData.species.url)
    //     .then(function(response) {
    //     return response.json();
    // });



    //Randomizer function
    function randomizer() {
        return Math.floor(Math.random() * 25);
    }



});

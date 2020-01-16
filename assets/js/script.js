
document.getElementById("midCircle").addEventListener("click",function () {


    let pokemon = document.getElementById("input_field").value;
    let pokemonData = [];
    axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon + "/")
        .then(function (response) {
            pokemonData = response.data;


            //Get sprites from API
           let sprites = document.getElementById("sprite");
            sprites.src = pokemonData.sprites.front_default;
            console.log(pokemonData.sprites.front_default);



            //Get ID number from API
            let poknr = pokemonData.id;
            document.getElementById("pokNr").innerHTML = "ID: " + poknr;

            let pokName = pokemonData.name;
            document.getElementById("pokName").innerHTML = "Name: " + pokName;



            console.log(response)

        });





});


document.getElementById("midCircle").addEventListener("click",function () {
    console.log("mouseclick");

    let pokemon = document.getElementById("input_field").value;
    let pokemonData = [];
    axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon + "/")
        .then(function (response) {
            pokemonData = response.data.abilities;
            console.log(pokemonData);
            console.log(response)
        });





});

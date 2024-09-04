let img = document.getElementById('foto')
let nome = document.getElementById('nome')
let id = document.getElementById('id')
let pokemon = document.getElementById('pokemon')
let buscar = document.getElementById('buscar')

pokemon.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.value)
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            console.log(data.name)
            console.log(data.id)
            console.log(data.sprites.other['official-artwork'].front_default)
            nome.innerHTML = data.name
            id.innerHTML = data.id
            img.src = data.sprites.other['official-artwork'].front_default
        })
        .catch(error=>{
            console.log(error)
        })
    }
})

buscar.addEventListener('click', ()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.value)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data.name)
        console.log(data.id)
        console.log(data.sprites.other['official-artwork'].front_default)
        nome.innerHTML = data.name
        id.innerHTML = data.id
        img.src = data.sprites.other['official-artwork'].front_default
    })
    .catch(error=>{
        console.log(error)
    })
})

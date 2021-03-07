const express = require('express');
const axios = require('axios');
const app = express();

const pokemons = [
    'Pikachu',
    'Charizard',
    'Squirtle',
];

// Exemplo de Query: localhost:5000/pokemon?parametro=Pikachu

app.get('/pokemon', (req,res)=>{
    const {parametro} = req.query;
    let resultado = pokemons.filter(i => i.includes(parametro || ''))
    return res.json(resultado)
})


// Listagem (limitada à 200 pokemons utilizando o cliente HTTP axios)

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
})


app.get('/lista', (req, res) => {
    api.get("").then((response)=>{
        return res.json(response.data)
    });
 });


// Colocando o servidor para ser executado na porta 5000
app.listen(5000, ()=>{
    console.log('the fucking server is running!')
})


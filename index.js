// - API
// - localhost/movies (GET)
// - localhost/movies (POST)
// - localhost/movies/id (GET)
// - localhost/movies/id (PUT)
// - localhost/movies (DELETE)

const express = require("express");
const createHttpError = require("http-errors");
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})

// Para usar JSON
app.use(express.json())

const movies = [
	{
		"id": 1,
		"title": "Interestelar",
		"genre": "Sci-fi"
	},
	{
		"id": 2,
		"title": "Avengers",
		"genre": "Adventure"
	},
	{
		"id": 3,
		"title": "Get Up",
		"genre": "Horror"
	}
]



//  Consulta (GET)
app.get("/movies", (req, res) => {
    return res.send(movies)
})

// Consulta por parametro (GET)
app.get("/movies/:id", (req, res) => {
	for (var key in movies){
		while(req.params.id == movies[key].id){
			return res.send(movies[key]);
		}
	}
})

// Inserir/Criar (POST)
app.post("/movies", (req, res) => {
	movies.push(req.body)
	return res.send(movies)	
})

// Editar (PUT)
app.put("/movies/:id", (req, res) => {
	for (var key in movies){
		if(req.params.id == movies[key].id){
			movies[key] = req.body
		}
	}
	return res.send(movies)	
})

// Excluir (DELETE)
app.delete("/movies/:id", (req, res) => {
	for (var key in movies){
		if(req.params.id == movies[key].id){
			delete movies[key]
		}
	}
	return res.send(movies)	
})
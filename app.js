const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//routing

app.get('/', (req, res) => {
    res.render('home');
    // res.send("hola")
})


app.get('/about', (req, res) => {

    res.render('about');
})


app.get('/players', (req, res) => {

    const players = [

        { name: "Charles", lastname: "Leclerc", escuderia: "Ferrari", points: 71, img: "images/Leclerc.png" },
        { name: "George", lastname: "Russell", escuderia: "Mercedes", points: 71, img: "images/Russel.png" },
        { name: "Carlos", lastname: "Sainz", escuderia: "Ferrari", points: 71, img: "images/Sainz.png" },
        { name: "Sergio", lastname: "Perez", escuderia: "Red Bull", points: 71, img: "images/Perez.png" },
        { name: "Lewis", lastname: "Hamilton", escuderia: "Mercedes", points: 71, img: "images/Hamilton.png" },
        { name: "Max", lastname: "Verstappen", escuderia: "Red Bull", points: 25, img: "images/Verstappen.png" },
        { name: "Esteban", lastname: "Ocon", escuderia: "Alpine", points: 71, img: "images/Ocon.png" },
        { name: "Lando", lastname: "Norris", escuderia: "McLaren", points: 16, img: "images/Norris.png" },
        { name: "Kevin", lastname: "Magnussen", escuderia: "Haas", points: 16, img: "images/Magnussen.png" },
        { name: "Valtteri", lastname: "Bottas", escuderia: "Alfa Romeo", points: 71, img: "images/Bottas.png" },
    ]

    res.render('players', { players });
});


app.get('/gallery', (req, res) => {

    res.render("gallery")
})


app.listen(3000, () => console.log('🏃‍ on port 3000'));
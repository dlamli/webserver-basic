const express = require('express'),
    hbs = require('hbs'),

    app = express(),
    PORT = process.env.PORT || 3000;

// HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {});

//Static Content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Danny Lam',
        title: '|Webpack| Node Express'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements');
});

app.get('/generic', (req, res) => {
    res.render('generic');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});



app.listen(PORT, () => {
    console.log(`Listening PORT http://localhost:${PORT}`);
})
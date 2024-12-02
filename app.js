const express = require('express');
const app = express();
const PORT = 3000;

const posts = require('./posts');

// Configuro gli asset statici
app.use(express.static('public'));

// Rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Rotta per la bacheca che restituisce i post come JSON
app.get('/bacheca', (req, res) => {
    res.json({
        posts: posts,
        count: posts.length
    });
});

app.all('*', (req, res) => {
    res.status(404).send(`<h1>Error 404. Page not found</h1>`)
})

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});

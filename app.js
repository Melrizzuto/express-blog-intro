const express = require('express');
const app = express();
const PORT = 3000;

// Rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
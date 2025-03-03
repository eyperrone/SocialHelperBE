const express = require('express');
const postsRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());
app.use('/api', postsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
const express = require('express');
const postsRoutes = require('./routes/postRoutes');
const commentsRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/posts/', postsRoutes);
app.use('/api/comments/', commentsRoutes);
app.use('/api/likes/', likeRoutes);
app.use('/api/users/', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const questions = require('./routes/questions');

app.use(express.json());
app.use('/api/questions', questions)





app.listen(8000, () => {
    console.log('listening on port 8000')
})
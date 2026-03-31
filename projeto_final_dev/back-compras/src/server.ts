import express from 'express';

const app = express();
const PORT = 7373;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running in: ${PORT}`)
});

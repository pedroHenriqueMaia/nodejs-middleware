import express from 'express';

const app = express();
const port = 3000;

const logMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Chama a próxima função middleware
};

app.use(logMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`);
});

import express from 'express'; // por estar definido no package o type: module
const app = express();
app.get('/ads', (req, res) => {
    console.log("ads");
    return res.json('3');
});
app.listen(3000, () => {
    console.log("O app ta na porta 3000");
});

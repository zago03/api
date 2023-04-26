const express = require('express')
const app = express()
const port = 3000


app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    console.log(req.query);
    const { num1 } = req.query;
    const num2 = req.query.num2;
    let sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    res.send(200,sum);
});

app.post('/', function (req, res) {
    const strings = req.body.text;
    res.send('Hello,'+ strings);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from "express";
const app = express();
const port = 4000;

var list = [
    {  name: 'activity1', description: 'some cool activity', address: 'address1' },
    {  name: 'activity2', description: 'some cool activity too', address: 'address2' }
];

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/activities/", (req, res) => res.send(list));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

import express from "express"
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.port || 3000;

let user = [];

app.post("/user", (req, res) => {
    console.log(req.body);

    user.push(req.body);

    res.send('user is created');
})

app.get("/user", (req, res) => {
    res.send(user);
})

app.put("/user", (req, res) => {
    res.send('user is modified')
})

app.delete("/user", (req, res) => {
    res.send('user is delete')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/profile', (req, res) => {
    res.send('this is profile.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
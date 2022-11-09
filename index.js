const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5500;

//middle wares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Kitchen Food Server Running')
})

app.listen(port, () => {
    console.log("Our Kitchen Food Server is Running on port: ", port);
})
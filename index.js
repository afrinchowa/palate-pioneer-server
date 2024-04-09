const express = require ( 'express');
const app = express();
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('palate is sitting')
})
app.listen(port, () => {
    console.log(`Palate is sitting on port ${port}`);
})
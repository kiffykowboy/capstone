const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {list, show, create, update, remove} = require('./controllers/posts')
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// list route

app.get("/posts/myposts", list );

//show route
app.get("/posts/myposts/:id", show);

//post route
app.post("/posts/myposts", create);

// update route

app.put("/posts/myposts/:id", update);

//delete

app.delete("/posts/myposts/:id", remove);


app.listen(PORT, () => console.log(`listening on port ${PORT} `));

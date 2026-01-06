import express from "express";
const app = express();
const PORT = 8888;
import web from "./routes/web.js";
//load static files
// basic routing for students
app.use(express.static('public'));

// setting ejs engine
app.set('view engine', 'ejs');
app.set("views", "./views");

// base routes
app.use('', web);

// Page not found
app.use((req, res) => {
    res.status(404).send("Page not found.. <a href='/'>Back </a> ");
});
app.listen(PORT, () => {
    console.log(`Server Listening on port - http://localhost:${PORT}`);
})
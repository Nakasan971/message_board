const express = require('express');
const PORT = 8080;
const messages = []; //追加
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.get('/', (req, res) => {
res.render('top.ejs', { messages:""});//変更
});
//追加
app.post('/submit',(req,res) => {
    let now = new Date();
    messages.push("["+now.toLocaleString()+"]"+req.body.message)
    res.render('top.ejs',{ 
        messages : messages
    });
});
app.listen(process.env.PORT || PORT);
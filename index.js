const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.static('public'))

app.listen(4000, () => {
})

app.get("/", (req,res) => {
    res.render("index")
})
const express = require("express")
// const mongoCleint = require("mongodb").MongoClient
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
app.use(bodyParser.json())
const get = require("./controllers/get.controller")
const add = require("./controllers/add.controller")
const delet = require("./controllers/delete.controller")
app.use(express.static(path.join(__dirname, "assets")))
app.set("view engine", "ejs")
app.set("views", "views")
app.get("/", get.getAll)
app.get("/scholars", get.scholars)
app.get("/moshaf", get.moshaf)
app.get("/anashid", get.getAnashid)
app.get("/articles", get.getArticles)
app.get("/lessons", get.getLessons)
app.get("/books", get.getBooks)
app.get("/azan", get.getAzan)
app.get("/photos", get.getPhotos)
app.get("/quotes", get.getQuotes)
app.get("/complaints", get.getComplaints)
app.get("/scholar/:id", get.getScholar)
app.get("/photos/:id", get.getOnePhoto)
app.use("/subject/:id/:type/:typeid", get.getInScholar)
app.use("/admin", add.goAdd)
app.post("/addMan", bodyParser.urlencoded({ extended: true }), add.addMan)
app.post("/addComplaint", bodyParser.urlencoded({ extended: true }), add.addComplaint)
app.use("/deleteMan/:id", delet.deleteMan)
app.use("/delete/:type/:id", delet.deleteInMan)
app.post("/addinMan", bodyParser.urlencoded({ extended: true }), add.addInMan)
app.post("/addQuotes", bodyParser.urlencoded({ extended: true }), add.addQuotes)
app.use((req, res, next) => {
    res.status(404).render("404", {
        path: req.path
    })
})

app.listen(process.env.PORT || 7070, () => {
    console.log("go")
setInterval(() => {
    console.log("first")
    fetch("https://chat-cz51.onrender.com/get/chat-All-users")
    //fetch("https://chat-cz51.onrender.com/get/chat-All-users")
}, 50000);
})


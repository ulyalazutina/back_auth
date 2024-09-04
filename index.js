const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require("cors");

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.db = router.db

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(auth)
app.use(router)
app.use(cors())
app.listen(8080, () => {
    console.log("JSON SERVER worked");
})
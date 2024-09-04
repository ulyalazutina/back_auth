const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require("cors");

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.db = router.db

app.use(auth)
app.use(router)
app.use(cors())
app.listen(8080, () => {
    console.log("JSON SERVER worked");
})
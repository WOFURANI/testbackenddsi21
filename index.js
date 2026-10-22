const express = require('express')
const app = express()
const PORT = 3000
const db = require('./utils/db')
const User = require('./models/user.model')
// const cors = require('cors')
// app.use(cors())
const cookieParser = require('cookie-parser')


app.use(cookieParser())

async function connection() {
    await db.authenticate().catch((err) => {
        console.log("error database connection ", err.message)
    }).then(() => {
        console.log("database connected !!")
    })
}
async function createtables() {
    await User.sync().catch((err) => {
        console.log("create user table error ", err.message)
    }).then("table user created")

    const user = new User({ firsname: 'test', lastname: 'test' })
    await user.save()
}
app.use('/user', require('./routers/user.router'))

try {
    connection()
    createtables()
} catch (error) {
    console.log('error:', error.message)
}


app.listen(PORT, () => {
    console.log("this server is running !!!")
})
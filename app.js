const express = require('express')
// require routes from category
const categoryController = require('./controllers/categoryController')
// require routes from item

const app = express()
const port = 4000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended:true})) // for parsing application/json

app.use('/category', categoryController)

app.get('/', (req, res)=>{
    res.json({message:"Express is set up correctly!"})
})

const listener = ()=>{
    console.log(`jamming on out port :${port} 🎶🙆🏻‍♂️`)
}

app.listen(port, listener)






const Item = require('./models/itemModel')

// Items
// find all in items
const findItems = async () => {
    const result = await Item.findAll()
    console.log(JSON.stringify(result))
}
// find by id
const findItemsByID = async ()=>{
    const result = await Item.findAll({where : {id: 3}})
    console.log(JSON.stringify(result))
}

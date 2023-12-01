const express = require('express')
const router = express.Router()
const Category = require('../models/categoryModel')


router.get('/', async (req, res)=>{
    const result = await Category.findAll();
    res.json(result)
})

router.get('/:name', async (req, res)=>{
    const result = await Category.findAll({ where: { name: req.params.name } });
    if(result[0]){
        res.json(result)
    }else{
        res.json({message:"Sorry couldn't find your category!"})
    }
})

router.get('/byId/:id', async (req,res)=>{
    const result = await Category.findByPk(req.params.id);
    if (result) {
        res.json(result)
    } else {
        res.json({ message: "Sorry couldn't find your category!" })
    }
})

router.post('/',  (req, res)=>{
    Category.create({
        name: req.body.name
    })
    .then(result=>res.json(result))
    // res.redirect(301, '/category')
    // res.json(newCategory)
})

router.put('/:id', async (req, res)=>{
    await Category.update({ name: req.body.name }, { where: { id: req.params.id } })
    res.redirect(301, '/category')
})

router.delete('/:id', async(req, res)=>{
    await Category.destroy({ where: { id: req.params.id } })
    res.redirect(301, '/category')
})


module.exports = router
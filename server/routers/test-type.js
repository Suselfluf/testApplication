const {Router} = require('express')
const TestTypeModel = require('../models/test-type')
const router = Router()


router.get('/tests', async (req, res)=>{
    const allTestType = await TestTypeModel.find({})
    res.send(JSON.stringify(allTestType))
})

router.post('/tests', async (req, res)=>{
    try{
        const {testName} = req.body
        const newTestType = new TestTypeModel({
            name: testName
        })
        await newTestType.save()
        res.status(201).end()
    }
    catch (e) {
        console.log('Error:', e.message )
        res.status(500).end()
    }
})

module.exports = router
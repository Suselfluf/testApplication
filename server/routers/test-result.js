const {Router} = require('express')
const router = Router()
const TestListModel = require('../models/test-list')
const calculationResult = require('../utils/calculationResult')

router.post('/result', async (req, res)=>{
    try {
        const {testName, result} = req.body;
        const testList = await TestListModel.findOne({
            name: testName
        });
        if(testList){
            const testResult = calculationResult(result, JSON.parse(testList.test))
            res.status(200).send({
                testResult: `${testResult}%`
            })
        }
        else {
            res.status(200).send({
                message: `${testName} test not found`
            })
        }
    }
    catch (e) {
        console.log('Error: ', e.message || 'internal server error' )
        res.status(500).end()
    }

})

module.exports = router

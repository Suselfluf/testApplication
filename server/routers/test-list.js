const {Router} = require('express')
const router = Router()
const TestListModel = require('../models/test-list')


router.get('/test/:testName', async (req, res)=>{
    const testName = req.params.testName;
    const testList = await TestListModel.find({
        name: testName
    });
    if(Array.isArray(testList) && testList.length!==0){
        const {name, test} = testList[0];
        const testParse = JSON.parse(test)
        testParse.forEach(item=>{
            delete item.correctAnswer
        })
        res.status(200).send({
            testName: name,
            testList: testParse
        })
    }
    else {
        res.status(200).send({
            message: `${testName} test not found`
        })
    }
})

router.put('/test', async (req, res)=>{
    try{
        const {testName, testList} = req.body;
        let id = 1;
        if(Array.isArray(testList) && testList.length!==0){
            testList.forEach((test)=>{
                test.questionId=id;
                id++
            })
            const newTestType = new TestListModel({
                name: testName,
                test: JSON.stringify(testList)
            })
            await newTestType.save()
            res.status(201).end()
        }
        else {
            res.status(200).send({
                message: 'test list not found'
            })
        }
    }
    catch (e) {
        console.log('Error:', e.message )
        res.status(500).end()
    }
})

module.exports = router

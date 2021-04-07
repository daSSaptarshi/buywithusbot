const express = require('express');
const router = express.Router();

const budgetArray   = ['< $20K', '$20K - $30K', '$30K - $45K', '$45K - $60K', '$60K - $80K', '$80K >'];
const bhkArray      = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];
const cityArray     = ['Brisbane', 'Melbourne', 'Sydney', 'Adilaide'];
let lastResult      = {};


router.post('/', (req, res) => {

    try 
    {
        let result = introduction(req.body.question, req.body.answer);
        if (Object.keys(result).length < 1) {
            if (req.body.intent.toLowerCase() == 'buy') {
                result = buy(req.body.question, req.body.answer);
            }
            if (req.body.intent.toLowerCase() == 'sell') {
                result = sell(req.body.question, req.body.answer);
            }
            if (req.body.intent.toLowerCase() == 'general') {
                result = general(req.body.question, req.body.answer);
            }
        }

        lastResult = result;
        lastResult['errorHandled'] = false;
    } 
    catch (error) 
    {
        lastResult['errorHandled'] = true;
    }
    finally
    {
        res
        .status(200)
        .send(
            lastResult
        )
    }
    
});

const introduction  = require('../services/introductionService');
const buy           = require('../services/buyService');
const sell          = require('../services/sellService');
const general       = require('../services/generalService');

module.exports = router
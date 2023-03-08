const express = require('express')
const jobRouter = express.Router();
const {getalljobs,createjobs,getjob,updatejob,deletejob}= require('../controler/job')
jobRouter.route('/').post(createproducts).get(getallproducts)
jobRouter.route('/:id').get(getproduct).delete(deleteproduct).patch(updatejob)
module.exports = jobRouter;
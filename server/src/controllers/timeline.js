import express from 'express';
const router = express.Router();

const timelineModel = require('../models/timeline');
const userModel = require('../models/user');
const mongoose = require('../configs/database');

router.get('/:id', async function(req, res) {
    const id = req.param["id"];
    const response = await timelineModel.findOne({id: id });
    res.status(200).send({data: response});
});
router.post('/', async function(req, res) {
    const input = req.body;
    const userId = await userModel.findOne({ id: input.userId });
    const timelineObj = new timelineModel({
        _id: mongoose.Types.ObjectId(),
        userId: userId,
        title: input.title,
        tagline: input.tagline,
        createdOn: new Date()
    })
    const response = timelineObj.save();
    res.status(200).send({data: response});
});

export default router;

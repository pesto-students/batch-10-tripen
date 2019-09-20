import express from 'express';
import postController from './posts';

const router = express.Router();

import timelineModel from '../models/timeline';
import userModel from '../models/user';
const mongoose = require('../configs/database');

router.get('/:id', async function(req, res) {
    const id = req.param["id"];
    const response = await timelineModel.findOne({ _id: id });
    res.status(200).send({data: response});
});
router.get('/', async function(req, res) {
    const response = await timelineModel.find({ });
    res.status(200).send({data: response});
});
router.post('/', async function(req, res) {
    const input = req.body;
    const userId = await userModel.findOne({ _id: input.userId });
    const timelineObj = new timelineModel({
        _id: mongoose.Types.ObjectId(),
        userId: userId,
        title: input.title,
        tagline: input.tagline
    })
    const response = await timelineObj.save();
    res.status(200).send({ data: response });
});
router.use('/post', postController);

export default router;

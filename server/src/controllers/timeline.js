import express from 'express';
import postController from './posts';

const router = express.Router();

import timelineModel from '../models/timeline';
const mongoose = require('../configs/database');

router.get('/:id', async function(req, res) {
    const { id }= req.params;
    const response = await timelineModel.findById(id);
    res.status(200).send({ data: response });
});
router.get('/', async function(req, res) {
    const response = await timelineModel.find();
    res.status(200).send({ data: response });
});
router.post('/', async function(req, res) {
    const input = req.body;
    const response = await timelineModel.create(input) ;
    res.status(200).send({ data: response });
});
router.put('/', async function(req, res) {
    const input = req.body;
    const oldTimeline = await timelineModel.findById(input.id);
    oldTimeline.title = input.title;
    oldTimeline.tagline =  input.tagline;
    oldTimeline.coverImg =  input.coverImg;
    const response = await oldTimeline.save();
    res.status(200).send({ data: response });
})
router.delete('/:id', async function(req, res) {
    const { id }= req.params;
    const response = await timelineModel.findByIdAndRemove(id);
    res.status(200).send({ data: response });
})
export default router;

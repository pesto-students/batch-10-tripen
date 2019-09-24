import express from 'express';
const router = express.Router();

import userModel from '../models/user';
const mongoose = require('../configs/database');

router.get('/:id', async function(req, res) {
    const id = req.param["id"];
    const response = await userModel.findOne({ _id: id});
    res.status(200).send(response);
});
router.get('/', async function(req, res) {
    const response = await userModel.find({});
    res.status(200).send(response);
});
router.post('/', async function(req, res) {
    const response = await userModel.create(req.body);
    res.status(200).send({data: response});
});

export default router;

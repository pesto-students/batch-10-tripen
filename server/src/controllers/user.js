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
    const input = req.body;
    const userObj = new userModel({
        _id: mongoose.Types.ObjectId(),
        name: input.lname,
        username: input.username,
        createdOn: new Date(),
        email: input.emailId,
        password: input.pwd
    })
    const response = await userObj.save();
    res.status(200).send({data: response});
});

export default router;

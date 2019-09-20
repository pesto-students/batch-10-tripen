import { Router } from 'express';
import mongoose from 'mongoose';
import Post from '../models/post';
import Timeline from '../models/timeline';

const router = Router();

router.post('/', (req, res) => {
  try {
    const timeline = await Timeline.findOne({ 
      _id: req.body.id
    })
  }
})
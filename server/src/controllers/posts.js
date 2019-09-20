import { Router } from 'express';
import Timeline from '../models/timeline';

const router = Router();
const mongoose = require('../configs/database');

router.post('/post', (req, res) => {
  try {
    const timeline = await Timeline.findById({ 
      id: req.body.parentId
    });
    const post = timeline.posts.push({
      ...req.body.post
    });
    timeline.posts.push(post);
  } catch (error) {
    return res.status(500).json({
      'success': 'false',
      'status': 'failed'
    });
  }
});

router.delete('/post', (req, res) => {
  try {
    const timeline = await Timeline.findById({
      id: req.body.parentId
    });
    const post = timeline.posts.id(_id).pull();
  } catch (error) {
    return res.status(500).json({
      'sucess': 'false',
      'status': 'failed'
    });
  }
});

router.put('/post', (req, res) => {
  try {
    const timeline = await Timeline.findById({
      id: req.body.parentId
    });
    const post = timeline.posts.id(_id);
    post.$set(req.body.post);
  } catch (error) {
    return res.status(500).json({
      'success': 'false',
      'status': 'failed'
    });
  }
});

export default router;

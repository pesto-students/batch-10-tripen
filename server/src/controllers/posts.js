import { Router } from 'express';
import Timeline from '../models/timeline';

const router = Router();
const mongoose = require('../configs/database');



router.post('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    const post = {
      ...req.body.post
    };
    timeline.posts.push(post);
    timeline.save();
    console.log('Saved!');
    res.status(200).json({ 'status' : 'post saved'});
  } catch (error) {
    return res.status(500).json({
      'status': 'unable to create'
    });
  }
});

router.delete('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    const postId = req.body.id;
    const post = timeline.posts.id(id).pull();
    timeline.save();
  } catch (error) {
    return res.status(500).json({
      'status': 'unable to delete'
    });
  }
});

router.put('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    const post = timeline.posts.id(_id);
    post.$set(req.body.post);
  } catch (error) {
    return res.status(500).json({
      'status': 'unable to update'
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    const posts = timeline.posts;
    return res.status(200).json({ posts });
  } catch ( error ) {
    return res.status(200).json({
      'status': 'unable to view'
    });
  }
});

export default router;

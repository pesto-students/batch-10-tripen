import { Router } from 'express';
import Timeline from '../models/timeline';
import { Post } from '../models/post';

const router = Router();
const mongoose = require('../configs/database');



router.post('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    console.log({timeline});
    const post = new Post(req.body.post);
    console.log({post});
    timeline.posts.push(post);
    timeline.save();
    console.log('Saved!');
    res.status(200).json({ 'status' : 'post saved'});
  } catch (error) {
    return res.status(500).json({
      'error': error.message
    });
  }
});

router.delete('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    console.log({timeline});
    const {postId} = req.body;
    console.log({postId});
    const post = timeline.posts.id(mongoose.Types.ObjectId(postId)).pull();
    console.log({post});
    timeline.save();
    res.status(200).json({ 'status': 'post deleted!' });
  } catch (error) {
    return res.status(500).json({
      'status': 'unable to delete post',
      'error': error.message
    });
  }
});

router.put('/', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    const post = timeline.posts.id(mongoose.Types.ObjectId(req.body.postId));
    post.$set(req.body.post);
    res.status(201).json({ 'status': 'post updated!' });
  } catch (error) {
    return res.status(500).json({
      'status': 'unable to update post',
      'error': error.message
    });
  }
});

router.post('/get', async (req, res) => {
  try {
    const timeline = await Timeline.findById(
      req.body.parentId
    );
    console.log({timeline});
    const { posts } = timeline;
    console.log(...posts);
    const post = Timeline.posts.id(mongoose.Types.ObjectId(req.body.postId));
    console.log({post});
    return res.status(200).json({ post });
  } catch ( error ) {
    return res.status(500).json({
      'status': 'unable to fetch post',
      'error': error.message
    });
  }
});

export default router;

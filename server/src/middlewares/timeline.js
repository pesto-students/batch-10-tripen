import mongoose from 'mongoose';
import Timeline from '../models/timeline';
import Post from '../models/post';

export const verifyMongooseId = (req, res, next) => {
  const { id } = req.params;
  try {
    if(mongoose.Types.ObjectId.isValid(id)) {
      next();
    } else {
      return res.status(400).json({ msg: `Given param Id ${id} is invalid` });
    }
  } catch(err) {
    return res.status(500).json({ msg: err.message });
  }
}
export const verifyPosts = (req, res, next) => {
  try {
    const { posts } = req.body;
    if (posts !== undefined && posts.length > 0) {
      posts.map((post) => new Post(post));
    }
    next();
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
}
export const verifyTimelineObject = (req, res, next) => {
  try {
    const timelineObj = req.body;
    const mdl = new Timeline(timelineObj);
    const error = mdl.validateSync();
    if(error !== undefined) { /* todo: use generic validation */
      console.log('error', error.errors);
      res.status(400).json({ error: `Given req body is invalid timeline object. ${error.message}`});
    } else {
      next();
    }
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
}
export const verifyPostsInTimeline = (req, res, next) => {
  try {
    const timelineObj = req.body;
    if (!(timelineObj.posts instanceof Array)) {
      res.status(400).json({ error: 'Required posts field in timeline.'
      + `Recieved posts:${timelineObj.posts}`});
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
export const verifyPostsLengthInTimeline = (req, res, next) => {
  try {
    const timelineObj = req.body;
    if (timelineObj.posts.length === 0) {
      res.status(400).json({ error: 'Required posts in timeline.'
      + `Recieved posts of length ${timelineObj.posts.length}`});
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
export const sortPostsByDisplayTime = (req, res, next) => {
  try {
    const { posts } = req.body;
    posts.sort((a, b) => {
      if (a.displayTime < b.displayTime) {
        return -1;
      }
      if (a.displayTime > b.displayTime) {
        return 1;
      }
      return 0;
    });
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

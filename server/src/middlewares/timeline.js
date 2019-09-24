import mongoose from 'mongoose';
import Timeline from '../models/timeline';

export const verifyTimelineId = (req, res, next) => {
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
export const verifyTimelineObject = (req, res, next) => {
  try {
    const timelineObj = req.body;
    const mdl = new Timeline(timelineObj);
    const error = mdl.validateSync();
    if(typeof error !== undefined) { /* todo: use generic validation */
      console.log('error', error.message);
      res.status(500).json({ msg: `Given req body is invalid timeline object. ${error.message}`});
    } else {
      next();
    }
  } catch(err) {
    res.status(500).json({ msg: err.message });
  }
}
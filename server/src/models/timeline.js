import mongoose from 'mongoose';
import Post from './post';
import modelNames from '../utils/constants';

const timelineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tagline: {
      type: String,
    },
    coverImg: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
    },
    posts: {
      type: [Post],
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    isPrivate: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
   {
     timestamps: true,
   }
);

const Timeline = mongoose.model(modelNames.timeline, timelineSchema);

export default Timeline;

import mongoose from 'mongoose';
import postSchema from './post';
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
      type: [postSchema],
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
const Timeline = mongoose.model('timeline', timelineSchema);

export default Timeline;

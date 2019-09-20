import mongoose from 'mongoose';
import postSchema from './post';

<<<<<<< HEAD
const timelineSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    tagline: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdOn: Date,
    updatedOn: Date
});
=======
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
>>>>>>> d873f83... feat: add mongoose schemas in server/models

const Timeline = mongoose.model('timeline', timelineSchema);

export default Timeline;

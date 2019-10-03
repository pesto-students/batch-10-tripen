import mongoose from '../configs/database';
import { postSchema } from './post';
import modelNames from '../utils/constants';

const timelineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'No title provided'],
      trim: true,
    },
    tagline: {
      type: String,
    },
    coverImg: {
      type: String,
      default: 'https://react.semantic-ui.com/images/wireframe/image.png',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
    },
    posts: {
      type: [postSchema],
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'No userId provided'],
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Timeline = mongoose.model(modelNames.timeline, timelineSchema);

export default Timeline;

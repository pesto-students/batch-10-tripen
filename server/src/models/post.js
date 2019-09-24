import mongoose from '../configs/database';
import modelNames from '../utils/constants';

export const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    coverImg: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      }
    },
    displayTime: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model(modelNames.post, postSchema);

export default Post;

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
      default: 'https://react.semantic-ui.com/images/wireframe/image.png',
    },
    content: {
      type: String,
      required: true,
    },
    location: {
      name: {
        type: String,
      },
      coordinates: {
        type: [Number],
      },
    },
    displayTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model(modelNames.post, postSchema);

export default Post;

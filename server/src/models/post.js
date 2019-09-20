import mongoose from 'mongoose';

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

export const Post = mongoose.model('post', postSchema);

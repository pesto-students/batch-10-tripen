import mongoose from 'mongoose';
import modelNames from '../utils/constants';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model(modelNames.category, categorySchema);

export default Category;

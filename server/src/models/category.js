import mongoose from '../configs/database';
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
      default: 'https://react.semantic-ui.com/images/wireframe/image.png',
    },
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model(modelNames.category, categorySchema);

export default Category;

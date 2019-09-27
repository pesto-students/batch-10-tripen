import mongoose from '../configs/database';
import bcrypt from 'bcrypt';
import modelNames from '../utils/constants';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
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
      },
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = async function (password) {
  const passwordHash = this.password;
  await new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, match) => {
      if (err) {
        return reject(err);
      }
      resolve(match);
    });
  });
};

const User = mongoose.model(modelNames.user, userSchema);

export default User;

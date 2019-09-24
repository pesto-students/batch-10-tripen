import User from '../../models/user';
import { newToken } from '../../utils/helpers/jwtHelper';
import errorMessage from '../../utils/errorMessage';
import statusMessage from '../../utils/statusMessage';
import destructureUser from '../../utils/destructureUser';

const controllerStatus = (req, res) => res.status(200).json({ status: 'online' });

const signinController = async (req, res) => {
  let user;

  try {
    user = await User.findOne({
      email: req.body.email,
    }).select('+password');

    if (!user) {
      return errorMessage({
        status: 400,
        message: 'Email not found. Please sign up',
      }, req, res);
    }
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }

  try {
    const isMatch = await user.checkPassword(req.body.password);

    user = user.toObject();
    delete user.password;

    if (isMatch) {
      const token = newToken({ ...user });
      return statusMessage({
        success: true,
        status: 200,
        message: 'Sign-in successful',
        user: { ...user, token },
      }, req, res);
    }
    throw Error;
  } catch (error) {
    return errorMessage({
      status: 400,
      message: 'Sign-in failed. Check email and/or password',
    }, req, res);
  }
};

const signupController = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = destructureUser(user);
    const token = newToken(userData);
    return statusMessage({
      status: 201,
      success: true,
      message: 'Sign-up successful',
      user: { ...userData, token },
    }, req, res);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return errorMessage({
        status: 400,
        message: 'An account with this email / username already exists',
      }, req, res);
    }
    return errorMessage({
      status: 500,
      error: error.message,
      message: 'Server error during sign-up',
    }, req, res);
  }
};

export {
  controllerStatus, signinController, signupController,
};

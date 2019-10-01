import User from '../../models/user';
import statusMessage from '../../utils/statusMessage';
import errorMessage from '../../utils/errorMessage';
import { extractTokenFromHeader } from '../../utils/helpers/jwtHelper';

const controllerStatus = (req, res) => res.status(200).json({ status: 'online' });

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userFromToken = extractTokenFromHeader(token);
    const user = await User.findOne({ email: userFromToken.email }).lean().exec();
    if (user) {
      return statusMessage({
        success: true,
        status: 200,
        message: 'User details fetched.',
        user: { ...user },
      }, req, res);
    }
    return errorMessage({
      status: 400,
      message: 'No such user ID',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 400,
      message: 'Incorrect user id',
    }, req, res);
  }
};

const updateUser = async (req, res) => {
  try {
    const bearerToken = req.headers.authorization;
    const userFromToken = extractTokenFromHeader(bearerToken);
    const update = req.body;
    const user = await User.findByIdAndUpdate(
      userFromToken._id,
      update,
      { new: true },
    ).lean().exec();
    return statusMessage({
      success: true,
      status: 201,
      message: 'User updated.',
      user: { ...user },
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 400,
      message: 'Could not update user. No changes given or Incorrect token',
    }, req, res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const bearerToken = req.headers.authorization;
    const userFromToken = extractTokenFromHeader(bearerToken);

    const user = await User.findByIdAndDelete(userFromToken._id).lean().exec();

    return statusMessage({
      success: true,
      status: 201,
      message: 'User deleted.',
      user: { ...user },
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 400,
      message: 'Could not delete user. No changes given or Incorrect token',
    }, req, res);
  }
};

const getPublicProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).lean().exec();
    if (user) {
      return statusMessage({
        success: true,
        status: 200,
        message: 'User details fetched',
        user: { ...user },
      }, req, res);
    }
    return errorMessage({
      status: 400,
      message: 'No such user ID',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 400,
      message: 'Incorrect user id',
    }, req, res);
  }
};

export {
  controllerStatus,
  getUser,
  updateUser,
  deleteUser,
  getPublicProfile,
};

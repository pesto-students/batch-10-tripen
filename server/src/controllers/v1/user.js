import User from '../../models/user';
import statusMessage from '../../utils/statusMessage';
import errorMessage from '../../utils/errorMessage';

const controllerStatus = (req, res) => res.status(200).json({ status: 'online' });

const getUser = async (req, res) => {
  try {
    const { userFromToken } = req;
    const user = await User.findById(userFromToken._id).lean().exec();
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
  let update;
  let user;

  try {
    const { userFromToken } = req;
    update = req.body;
    const result = await User.find({ _id: userFromToken._id });
    [user] = result;
  } catch (error) {
    return errorMessage({
      status: 500,
      error: error.message,
      message: 'Server error',
    }, req, res);
  }

  try {
    Object.keys(update).forEach((key) => {
      user[key] = update[key];
    });
    await user.save((err, updatedUser) => {
      if (err) {
        return err;
      }
      return updatedUser;
    });

    const userData = user.lean().exec();

    return statusMessage({
      success: true,
      status: 200,
      message: 'User updated.',
      user: { ...userData },
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
    const user = req.userFromToken;
    await User.findById(user._id, (error, userDoc) => {
      if (error) {
        console.debug(error.message);
      } else {
        userDoc.remove();
      }
    });

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

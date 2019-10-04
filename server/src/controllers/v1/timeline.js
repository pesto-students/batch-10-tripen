import * as timelineDao from '../../daos/timeline';
import Timeline from '../../models/timeline';
import Post from '../../models/post';
import statusMessage from '../../utils/statusMessage';
import errorMessage from '../../utils/errorMessage';

export const getAllTimeline = async (req, res) => {
  const { page } = req.query;
  const { status, error, data } = await timelineDao.getAllPublicTimeline(parseInt(page - 1), 10);
  res.status(status).json({ error, data });
};
export const getTimelineById = async (req, res) => {
  const { id } = req.params;
  const { status, error, data } = await timelineDao.getTimelineById(id);
  res.status(status).json({ error, data });
};
export const postTimeline = async (req, res) => {
  const timeline = req.body;
  const { status, error, data } = await timelineDao.postTimeline(timeline);
  res.status(status).json({ error, data });
};
export const updateTimeline = async (req, res) => {
  const { id } = req.params;
  const timeline = req.body;
  const { status, error, data } = await timelineDao.updateTimeline(id, timeline);
  res.status(status).json({ error, data });
};
export const deleteTimeline = async (req, res) => {
  const { id } = req.params;
  const { status, error, data } = await timelineDao.deleteTimelineById(id);
  res.status(status).json({ error, data });
};
export const getTimelineByUserId = async (req, res) => {
  const { id } = req.params;
  const { isFetchAll } = req.query;
  const {
    status, success, message, error, data,
  } = await timelineDao.getTimelineByUser(id, isFetchAll);
  res.status(status).json({
    success, error, message, data,
  });
};

export const getAllTimelinePosts = async (req, res) => {
  const { id } = req.params;
  const timeline = await Timeline.findById(id).populate('userId').exec();
  res.status(200).json({ success: true, message: 'fetched timeline', timeline });
};

export const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId).lean().exec();
    if (post) {
      return statusMessage({
        success: true,
        status: 200,
        message: 'post fetch successful',
        post: { ...post },
      }, req, res);
    }
    return errorMessage({
      status: 400,
      message: 'No such post ID',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

export const createPost = async (req, res) => {
  try {
    const { body } = req;
    console.log({ body });
    const post = await Post.create(body);
    const postData = post.toObject();
    console.log({ post });
    if (post) {
      return statusMessage({
        success: true,
        status: 200,
        message: 'post create successful',
        post: { ...postData },
      }, req, res);
    }
    return errorMessage({
      status: 400,
      message: 'Could not create post',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { body } = req;
    const post = await Post.findByIdAndUpdate(postId).lean().exec();
    if (post) {
      return statusMessage({
        success: true,
        status: 200,
        message: 'post update successful',
        post: { ...post },
      }, req, res);
    }
    return errorMessage({
      status: 400,
      message: 'Could not update post',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByIdAndDelete(postId).lean().exec();
    if (post) {
      return statusMessage({
        success: true,
        status: 200,
        message: 'post delete successful',
        post: { ...post },
      }, req, res);
    }
    return errorMessage({
      status: 400,
      message: 'Could not delete post',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

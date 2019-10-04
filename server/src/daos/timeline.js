import Timeline from '../models/timeline';
import { homePageTimelineFields } from '../utils/constants';
import User from '../models/user';

export const getTimelineById = async (id) => {
  const response = {
    data: {},
    error: null,
    status: 200,
  };
  try {
    response.data.timeline = await Timeline.findById(id);
    const { userId } = response.data.timeline;
    response.data.user = {};
    response.data.user = await User.findOne(userId, 'name');
    if (response.data === null) {
      response.data = {};
      response.error = `No document for id:${id}`;
      response.status = 400;
    }
  } catch (err) {
    response.error = err.message;
    response.status = 500;
  }
  return response;
};
export const deleteTimelineById = async (_id) => {
  const response = {
    data: {},
    error: null,
    status: 200,
  };
  try {
    response.data = await Timeline.deleteOne({ _id });
    if (response.data.deletedCount === 0) {
      response.error = `No document for id:${_id}`;
      response.status = 400;
    }
  } catch (err) {
    response.error = err.message;
    response.status = 500;
  }
  return response;
};
export const getAllPublicTimeline = async (pageNumber, limit) => {
  const response = {
    data: [],
    error: null,
    status: 200,
  };
  try {
    response.data = await Timeline.find({
      isPrivate: false,
    }, homePageTimelineFields, {
      skip: (pageNumber * limit),
      limit: limit,
    });
  } catch (err) {
    response.error = err.message;
    response.status = 500;
  }
  return response;
};
export const postTimeline = async (newTimeline) => {
  const response = {
    data: {},
    error: null,
    status: 201,
  };
  try {
    response.data = await Timeline.create(newTimeline);
  } catch (err) {
    response.error = err.message;
    response.status = 400;
  }
  return response;
};
export const updateTimeline = async (_id, updatedTimeline) => {
  const response = {
    data: {},
    error: null,
    status: 200,
  };
  try {
    response.data = await Timeline.findOneAndUpdate(
      { _id },
      updatedTimeline, {
        new: true,
      },
    );
  } catch (err) {
    response.error = err.message;
    response.status = 400;
  }
  return response;
};
export const getTimelineByUser = async (userId, isFetchAll) => {
  const response = {
    data: [],
    success: true,
    message: `${isFetchAll ? 'All' : 'Public'} timelines fetched`,
    status: 200,
  };
  try {
    const filter = isFetchAll ? { userId } : { userId, isPrivate: false };
    response.data = await Timeline.find(filter, homePageTimelineFields);
  } catch (err) {
    response.success = false;
    response.message = 'Failed - Could not fetch timelines';
    response.status = 400;
  }
  return response;
};

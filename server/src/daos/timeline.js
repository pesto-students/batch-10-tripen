import Timeline from '../models/timeline';
import { homePageTimelineFields } from '../utils/constants';
import errorHandler from '../utils/errorMessage';
import returnMessage from '../utils/statusMessage';

export const getTimelineById = async (id) => {
  const response = {
    data: {},
    error: null,
    status: 200,
  };
  try {
    response.data = await Timeline.findById(id);
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
      response.data = {};
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
      limit,
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
    error: null,
    status: 200,
  };
  try {
    const filter = isFetchAll ? { userId: userId } : { userId: userId, isPrivate: false };
    response.data = await Timeline.find(filter, homePageTimelineFields);
  } catch (err) {
    response.error = err.message;
    response.status = 400;
  }
  return response;
};

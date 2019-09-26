import Timeline from '../models/timeline';
import mongoose from '../configs/database';
import { homePageTimelineFields } from './constants';

export const createTimeline = async () => {
  await Timeline.create({
    title: 'dummy title#1',
    tagline: 'dummy tg #1',
    posts: [],
    userId: mongoose.Types.ObjectId('5d5adea00f61796594c32dec'),
    isPrivate: false,
  });
};
export const getAllTestTimeline = async () => {
  const timelines = await Timeline.find({}, homePageTimelineFields);
  return timelines;
};
export const getTestTimelineById = async (id) => {
  const timeline = await Timeline.findById(id);
  return timeline;
};
export const createTestTimeline = async (obj) => {
  const response = await Timeline.create(obj);
  return response;
};
export const getMongooseId = () => mongoose.Types.ObjectId();

export default {
  createTimeline,
  getAllTestTimeline,
  getTestTimelineById,
  createTestTimeline,
  getMongooseId,
};

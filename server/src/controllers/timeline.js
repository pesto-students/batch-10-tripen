import * as timelineDao from '../daos/timeline';

export const getAllTimeline = async (req, res) => {
  const { page, limit = 1 } = parseInt(req.query, 2);
  const { status, error, data } = await timelineDao.getAllPublicTimeline(page - 1, limit);
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

// import timeline from '../models/timeline';

export const getAllTimeline = async (req, res) => {
  // const response = await timeline.find({ isPrivate: false });
  // console.log(response);
  res.status(200).json({ data: 'response' });
};
export const getTimelineById = (req, res) => {
  res.status(200).json({ status: 'fetch timeline id' });
};
export const postTimeline = (req, res) => {
  res.status(200).json({ data: 'post timeline obj' });
};
export const updateTimeline = (req, res) => {
  res.status(200).json({ data: 'update timeline obj' });
};
export const deleteTimeline = (req, res) => {
  res.status(200).json({ status: 'deleted timeline_id' });
};

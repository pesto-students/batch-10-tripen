export const getAllTimeline = (req, res) => {
  res.status(200).json({ status: 'fetch all timelines' });
};
export const getTimelineById = (req, res) => {
  res.status(200).json({ status: 'fetch timeline id' });
};
export const postTimeline = (req, res) => {
  res.status(201).json({ data: 'post timeline obj' });
};
export const updateTimeline = (req, res) => {
  res.status(200).json({ data: 'update timeline obj' });
};
export const deleteTimeline = (req, res) => {
  res.status(200).json({ status: 'deleted timeline_id' });
};

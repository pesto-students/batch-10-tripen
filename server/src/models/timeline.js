import mongoose from '../configs/database';

const timelineSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: Number,
    tagline: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdOn: Date,
    updatedOn: Date
});

const timelines = mongoose.model("timeline", timelineSchema)
module.exports = timelines;

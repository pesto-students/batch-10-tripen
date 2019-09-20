import mongoose from '../configs/database';

const cardSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    timelineId: { type: mongoose.Schema.Types.ObjectId, ref: 'timeline' },
    title: String,
    description: String,
    createdOn: Date,
    updatedOn: Date
});

const Cards = mongoose.model("card", cardSchema);
module.exports = Cards;

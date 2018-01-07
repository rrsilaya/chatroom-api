import mongoose, { Schema } from 'mongoose';

const RoomSchema = new Schema({
  color: { type: String },
  name: { type: String, required: true },
  updated: { type: Date, default: new Date()}
});

export const Room = mongoose.model('Room', RoomSchema);
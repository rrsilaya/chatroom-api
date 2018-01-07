import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  sender: { type: String, required: true },
  senderID: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: new Date() },
  room: { type: String, required: true }
});

export const Message = mongoose.model('Message', MessageSchema);
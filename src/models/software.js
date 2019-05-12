import mongoose from 'mongoose';

const { Schema } = mongoose;

const softwareSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: String, default: '', },
  currency: { type: String },
  config: { type: Object, default: {} },
  summary: { type: Object, default: {} },
  isConfigured: { type: Boolean, default: false },
});

export const Software = mongoose.model('Software', softwareSchema);

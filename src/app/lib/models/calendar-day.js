import mongoose from 'mongoose';

export const calendarDaySchema = new mongoose.Schema({
  dayNumber: {type: Number},
  text: {type: String},
  imageUrl: {type: String},
  videoUrl: {type: String},
  lastViewedAt: {type: Date, default: Date.now},
});

const CalendarDay =
  mongoose.models.CalendarDay ||
  mongoose.model('CalendarDay', calendarDaySchema);
export default CalendarDay;

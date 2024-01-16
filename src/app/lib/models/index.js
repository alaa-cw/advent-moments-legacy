import mongoose from 'mongoose';


const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);
    // process.exit(1);
  }
}

export default connectDB;

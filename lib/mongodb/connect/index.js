import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  // current connection
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  // new db connection
  await mongoose.connect(
    process.env?.BLOG_DB /*, {
	useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
}*/
  );
  return handler(req, res);
};

export default connectDB;

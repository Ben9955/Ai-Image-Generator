import mongoose from "mongoose";

export default (url) => {
  mongoose.set("strict", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

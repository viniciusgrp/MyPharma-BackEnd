import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/my_pharma");
mongoose.Promise = global.Promise;

export default mongoose;

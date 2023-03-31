import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/my_pharma");
mongoose.connect("mongodb://127.0.0.1/my_pharma");
mongoose.Promise = global.Promise;

export default mongoose;

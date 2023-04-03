import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost/my_pharma");
// mongoose.connect("mongodb://127.0.0.1/my_pharma");
mongoose.connect("mongodb+srv://viniciusgrp:vini2985@cluster0.tkej9sp.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

export default mongoose;

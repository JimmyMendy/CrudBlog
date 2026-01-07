const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const blogSchema = Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.export = mongoose.model("Blog", blogSchema)
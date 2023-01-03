import mongoose from "mongoose";
var Schema = mongoose.Schema;

const post = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  update_timestamp: {
    type: Number,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    default: [],
  },
});

mongoose.models = {};

const Post = mongoose.model("Post", post);

export default Post;

/*
import mongoose from "mongoose"

const Post = mongoose.model('Post', {
	title: String,
	desc: String,
	timestamp: Number,
	author: String,
	tags: Array,
	html: String
})

export default Post*/

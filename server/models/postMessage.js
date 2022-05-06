import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    platform: String,
    username: String,
    password: String,
    creator: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
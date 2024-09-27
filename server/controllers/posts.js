import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

// Fetch all posts
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Create a new post
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Update an existing post
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    // Validate if _id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    // Update the post
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req,res) =>{
   const { id } = req.params;

   if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id');

   await PostMessage.findByIdAndDelete(id);

   res.json({ message: 'Post deleted successfully'});
}

export const likePost = async (req,res) => {
    const { id } = req.params;

    // Validate if id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    try {
        // Find the post by id
        const post = await PostMessage.findById(id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        // Increment the likeCount
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

        res.json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

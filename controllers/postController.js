const { Post } = require('../models');

exports.createPost = async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        const post = await Post.create({title, description, userId});
        return res.status(200).json(post);
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        return res.status(200).json(posts);
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};

exports.getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (!post) { return res.status(404).json({ error: 'Post not found' })}
        return res.status(200).json(post);
    }
    catch (error) {
        return res.status(500).json({ error: err.message});
    }
}

exports.updatePost = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const post = await Post.findByPk(id);
        if (!post) { return res.status(404).json({ error: 'Post not found' })}
        post.title = title;
        post.description = description;
        await post.save();
        return res.status(200).json(post);
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.destroy({ where: { id } });
        if (!post) { return res.status(404).json({ error: 'Post not found' })}
        return res.status(200).json({ message: 'Operation successfully' });
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};
const { Like } = require('../models');

exports.likePost = async (req, res) => {
    try {
        const { userId, postId } = req.body;
        const existingLike = await Like.findOne({ where: { userId, postId } });
        if (existingLike) {
            return res.status(400).json({ error: 'Like already exist' });
        }
        const like = await Like.create({ userId, postId });
        return res.status(200).json(like);
    }
    catch (err) { 
        return res.status(500).json({ error: err.message });
    }
};

exports.unlikePost = async ( req, res ) => {
    try {
        const { userId, postId } = req.body;
        const existingLike = await Like.findOne( { where: { userId, postId } });
        if (!existingLike) {
            return res.status(400).json({ error: 'Like not found' });
        }
        const deleted = await Like.destroy({ where: { userId, postId } });
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
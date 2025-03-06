const { Comment } = require('../models');

exports.createComment = async (req, res) => {
    try {
        const { text, userId, postId } = req.body;
        if ( !text || !userId || !postId) {
            return res.status(400).json({ error: "Text, UserId e postId sono richiesti" });
        }
        const newComment = await Comment.create({ text, userId, postId });
        return res.status(200).json(newComment);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json(comments);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByPk(id);
        if ( !comment ) {
            return res.status(404).json({ error: "Comment not found" });
        }
        return res.status(200).json(comment);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, userId, postId } = req.body;

        const comment = await Comment.findByPk(id);
        if ( !comment) {
         return res.status(404).json({ error: "Comment not found" });
        }
        if ( text !== undefined ) { comment.text = text; }
        if ( userId !== undefined ) { comment.userId = userId; } 
        if ( postId !== undefined ) { comment.postId = postId; }
        await comment.save();
        return res.status(200).json(comment);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.destroy({ where: { id } });
        if ( !deleted ) {
            return res.status(404).json({ error: "Comment not found" });
        }
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
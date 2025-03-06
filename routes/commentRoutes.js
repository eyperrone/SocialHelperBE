const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentController');

router.post('/', commentsController.createComment);
router.get('/', commentsController.getComments);;
router.get('/:id', commentsController.getCommentById);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);





module.exports = router;

 
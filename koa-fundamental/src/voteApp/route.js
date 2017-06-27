/**
 * Created by nctuong on 6/27/2017.
 */

const {showHomeView} = require('./HomeController');
const {showQuestionView, addQuestion, showEdit, updateQuestion} = require('./QuestionController');
const {showCommentView, showVoteView, addComment, addVote} = require('./VoteController');
const {showResultView, buildResult} = require('./ResultController');


const koa_router = require('koa-router');
const router = new koa_router();

module.exports = router;

router.get('/', '/', showHomeView);

router.get('New Question form', '/question', showQuestionView);
router.post('Add new Question', '/question', addQuestion);
router.get('Edit Question form', '/question/:id', showEdit);
router.post('Update question', '/question/:id', updateQuestion);

router.get('New Question form', '/vote?qid=:id', showVoteView);
router.post('Add new vote', '/vote', addVote);
router.get('Show add comment form', '/vote/:id/comment', showCommentView);
router.post('Add comment', '/vote/:id/comment', addComment);

router.get('Get result form', '/result', showResultView);
router.post('Export result', '/result', buildResult);


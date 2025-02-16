const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')
Router.use('/users', UserRouter)
Router.use('/feed', PostRouter)
Router.use('/comments', CommentRouter)
module.exports = Router
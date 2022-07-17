const User = require('./User');
const Blog = require('./Blog')
const Comment = require('./Comment')

User.hasMany(Blog, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

Blog.hasMany(Comment, {
    foreignKey: 'comment_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
})

module.exports = {
    Blog,
    User,
    Comment,
}
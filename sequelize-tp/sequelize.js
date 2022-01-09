const { Sequelize,Model,DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

(async() =>{
  await sequelize.sync();
})();

class User extends Model {}
User.init({
  firstName: DataTypes.STRING,
  LastName: DataTypes.STRING,
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  githubLink: DataTypes.STRING

}, { sequelize,modelName: 'User' });

class Post extends Model {}
Post.init({
  title:DataTypes.STRING,
  content:DataTypes.DATE,
  date:DataTypes.DATE,
}, { sequelize,modelName: 'User' });

module.exports = {
  User,
  Post
}

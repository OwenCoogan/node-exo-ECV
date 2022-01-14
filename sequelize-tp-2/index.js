const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import handlers & modules
const userRoutes = require('./routes/user.routes.js');
const postsRoutes = require('./routes/posts.routes.js');
const rolesRoutes = require('./routes/roles.routes.js');
const commentsRoutes = require('./routes/comments.routes.js');


const dateDisplay = function (req,res,next){
  console.log(new Date())
  next();
}
const modifyHeader = function (req,res,next){
  res.set('Application-name','ecv-digital')
  console.log(res)
  next();
}

const authMiddleWear = function (req,res,next){

  console.log(res)
  next();
}

// Import libs
app.use(bodyParser.json());
app.use(dateDisplay);
app.use(modifyHeader);
app.use(authMiddleWear);


app.use('/users', userRoutes);
app.use('/posts', postsRoutes);
app.use('/roles', rolesRoutes);
app.use('/comments', commentsRoutes);


// Run app
app.listen(3000);

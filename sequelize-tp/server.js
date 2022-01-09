const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

const Models = require('./models')

app.use(bodyParser.json());

app.post('/create/user/:firstName/:lastName/:username/:role/:email/:githubLink',function(req,res){
  return new Promise((resolve, reject) => {
  Models.User.create({
    firstName:req.params.firstName,
    LastName:req.params.lastName,
    role:req.params.role,
    username:req.params.username,
    email:req.params.email,
    githubLink:req.params.githubLink
  })
  })
  .then( apiResponse => res.json( { data: apiResponse, err: null } ))
  .catch( apiError => res.json( { data: null, err: apiError }))
})

app.patch('edit/users/:username', (req, res) => {
  Models.User.update(
    {
      firstName:req.params.firstName,
      LastName:req.params.lastName,
      role:req.params.role,
      username:req.params.username,
      email:req.params.email,
      githubLink:req.params.githubLink
    },
    {
      returning: true, where: {username: req.params.username
    }
    }
    .then( apiResponse => res.json( { data: apiResponse, err: null } ))
    .catch( apiError => res.json( { data: null, err: apiError }))
  )
 });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

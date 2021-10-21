const pinFileToIPFS = require('../scripts/pinFileToIPFS');

module.exports = {
  post: function (req, res, next) {
    // console.log({ image: req.params.image })
    // pinFileToIPFS(req.body.url)
    
    res.status(404)
  },
  get: function (req, res) {
    res.status(400).send('good')
  },
  // viewOne: function (req, res) {
  //   console.log('Viewing ' + req.params.id);
  // },
  // create: function (req, res) {
  //   console.log('Todo created')
  // },
  // destroy: function (req, res) {
  //   console.log('Todo deleted')
  // },
  // edit: function (req, res) {
  //   console.log('Todo ' + req.params.id + ' updated')
  // }
};

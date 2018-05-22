var express = require('express');
var router = express.Router();
var snowboard = require('../models').snowboard;

router.get('/', function(req, res) {
  snowboard.all(
    {
      order: [
        ['createdAt', 'ASC']
      ]
  .then( function(snowboards) {
    res.render('snowboards', {snowboards: snowboards});
  })
})
});

router.get('/:id/edit', function(req, res) {
  Movie.findById(req.params.id)
    .then( function(movie) {
      return res.render('edit', { snowboard: snowboard })
    })
})

router.put('/:id', function(req, res) {
  snowboard.update(
    { title: req.body.title},
    {where: {id: req.params.id} }
  )
  .then( function() {
    return res.redirect('/snowboards')
  })
})
router.post('/', function(req, res) {
  var title = req.body.title;
  snowboard.create({title: title})
  .then(function() {
    res.redirect('/snowboards');
  });
});

router.delete('/:id', function(req, res) {
  snowboard.findById(req.params.id)
  .then( function(snowboard) {
    snowboard.destroy();
    return res.redirect('/snowboards');
  })
})

module.exports = router;

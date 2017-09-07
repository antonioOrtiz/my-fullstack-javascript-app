var express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;


// router.use('/campuses', require('./campuses'));
// router.use('/students', require('./students'));

// router.use((req, res, next) => {
//   res.status(404).send('Not found');
// });

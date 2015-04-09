var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("ID "+process.pid);
  res.render('index', { title: 'Cluster', pid:process.pid });
});

router.get('/pid', function(req, res, next) {
  var help = 0;
  for (var i=0; i<1000000000; i++)
    help++;
  console.log(help);
  console.log("Service ID "+process.pid);
  res.json({ title: 'Cluster', pid:process.pid });
});

module.exports = router;

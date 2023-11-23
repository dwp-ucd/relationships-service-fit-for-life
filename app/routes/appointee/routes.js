const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

var iteration = "1"

router.post('/iteration-' + iteration + '/relationships/start', function (req, res) {
  //res.redirect(301, '/maternity/partner-details-guid' + '?DwpGuid=123455');
  res.redirect(301, '/iteration-' + iteration + '/maternity/partner-details-guid');
});

module.exports = router

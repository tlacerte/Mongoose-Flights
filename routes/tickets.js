var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/tickets');

router.get('tickets/:id/new/', ticketCtrl.new);
router.post('/flights/:id/details', ticketCtrl.create);

module.exports = router;
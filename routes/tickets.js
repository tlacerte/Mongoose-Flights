var express = require('express');
var router = express.Router();
var ticketCTRL = require('../controllers/tickets');

router.get('/:id/new/',ticketCTRL.new);
router.post('/',ticketCTRL.create);

module.exports = router;
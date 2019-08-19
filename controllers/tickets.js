var Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  res.render('tickets/${ticket._id}/new')
}

function create(req, res) {
  var ticket = new Ticket(req.body);
  ticket.save(function(err) {
    if(err)return res.redirect(`/tickets/${ticket.flight}/new`);
    console.log(ticket);
    res.redirect(`/flights/${flight._id}`);
});
}
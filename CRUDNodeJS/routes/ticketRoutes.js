const express = require('express');
const Ticket = require('../models/ticket');
const router = express.Router();

// Create a new ticket
router.post('/tickets', async (req, res) => {
    try {
        console.log("hello i m here postff ---");
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).send(ticket);
    } catch (error) {
        res.status(400).send({ error: 'Invalid ticket data' });
    }
});

// Retrieve all tickets
router.get('/tickets', async (req, res) => {
    try {
        console.log("hello i m here ---");
        const tickets = await Ticket.find();
        res.status(200).send(tickets);
    } catch (error) {
        res.status(500).send({ error: 'Could not fetch tickets' });
    }
});

// Retrieve a single ticket by its unique ID
router.get('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).send({ error: 'Ticket not found' });
        }
        res.status(200).send(ticket);
    } catch (error) {
        res.status(500).send({ error: 'Could not fetch the ticket' });
    }
});

// Update a ticket by its unique ID
router.put('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!ticket) {
            return res.status(404).send({ error: 'Ticket not found' });
        }
        res.status(200).send(ticket);
    } catch (error) {
        res.status(400).send({ error: 'Invalid update' });
    }
});

// Delete a ticket by its unique ID
router.delete('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).send({ error: 'Ticket not found' });
        }
        res.status(200).send({ message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Could not delete the ticket' });
    }
});

module.exports = router;

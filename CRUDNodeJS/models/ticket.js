const mongoose = require('mongoose');



const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'closed'],
        default: 'open',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

ticketSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;

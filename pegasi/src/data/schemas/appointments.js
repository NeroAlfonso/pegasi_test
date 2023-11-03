const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentsSchema = new Schema({}, { strict: false });
const Appointments = mongoose.model('Appointments', appointmentsSchema, 'appointments');
module.exports ={appointmentsSchema, Appointments};
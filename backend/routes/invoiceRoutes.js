const express = require('express');
const router = express.Router();
const { createInvoice, getInvoices } = require('../controllers/invoiceController');
const auth = require('../utils/authMiddleware');

router.post('/', auth, createInvoice);
router.get('/', auth, getInvoices);

module.exports = router;

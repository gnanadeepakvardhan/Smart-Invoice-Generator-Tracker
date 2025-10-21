require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/invoices', invoiceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

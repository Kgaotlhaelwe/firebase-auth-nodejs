const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

// Middleware to parse JSON requests
app.use(express.json());

// Use the auth routes
app.use('/api', authRoutes);

// Example: Server running on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

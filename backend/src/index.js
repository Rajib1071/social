const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const morgan = require('morgan');



const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
mongoose.connect('mongodb+srv://rajibmondal20192020:OKaOebXf85mdSrPm@my-social-media-app-clu.9ei26xp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

// Add middleware for parsing JSON and handling URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('common')); // Logging middleware

// Use the user routes
app.use('/api/users', userRoutes);

// Use the post routes
app.use('/api/posts', postRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

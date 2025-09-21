const mongoose = require('mongoose');
require('dotenv').config();
const { seedDatabase } = require('./data/sampleData');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://foodieparadise:foodie123@cluster0.mongodb.net/food-website?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');
  await seedDatabase();
  process.exit(0);
});

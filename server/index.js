require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const seedAdmin = require('./seed');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Serve static files (your existing site) ─────────────────
app.use(express.static(path.join(__dirname, '..')));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// ── API Routes ──────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// ── Connect to MongoDB & Start ──────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✓ Connected to MongoDB');

    // Seed admin user on first run
    await seedAdmin();

    app.listen(PORT, () => {
      console.log(`✓ Server running at http://localhost:${PORT}`);
      console.log(`  Blog admin: http://localhost:${PORT}/blogadmin.html`);
    });
  })
  .catch(err => {
    console.error('✗ MongoDB connection failed:', err.message);
    console.log('\n  Make sure MongoDB is running. You can:');
    console.log('  1. Install locally: sudo apt install mongodb');
    console.log('  2. Use Docker: docker run -d -p 27017:27017 mongo');
    console.log('  3. Use MongoDB Atlas (cloud): update MONGO_URI in .env\n');
    process.exit(1);
  });

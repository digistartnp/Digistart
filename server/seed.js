const User = require('./models/User');

// Seed the admin user if it doesn't exist
async function seedAdmin() {
  try {
    const existing = await User.findOne({ username: 'DIGI' });
    if (!existing) {
      await User.create({ username: 'DIGI', password: 'DIGI12345' });
      console.log('✓ Admin user created (DIGI)');
    } else {
      console.log('✓ Admin user already exists');
    }
  } catch (err) {
    console.error('Failed to seed admin:', err.message);
  }
}

module.exports = seedAdmin;

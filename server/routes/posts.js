const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

// ── Multer config for image uploads ─────────────────────────
const uploadDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const safeName = 'post-' + Date.now() + ext;
    cb(null, safeName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /\.(jpg|jpeg|png|gif|webp)$/i;
  if (allowed.test(path.extname(file.originalname))) {
    cb(null, true);
  } else {
    cb(new Error('Only image files allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// ── PUBLIC: Get all posts ───────────────────────────────────
// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// GET /api/posts/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

// ── PROTECTED: Create post ──────────────────────────────────
// POST /api/posts
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { icon, tag, title, excerpt, content } = req.body;
    if (!tag || !title || !excerpt || !content) {
      return res.status(400).json({ error: 'Tag, title, excerpt, and content are required' });
    }

    const post = new Post({
      icon: icon || '📝',
      tag,
      title,
      excerpt,
      content,
      image: req.file ? '/uploads/' + req.file.filename : ''
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// ── PROTECTED: Update post ──────────────────────────────────
// PUT /api/posts/:id
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const { icon, tag, title, excerpt, content } = req.body;
    if (icon)    post.icon    = icon;
    if (tag)     post.tag     = tag;
    if (title)   post.title   = title;
    if (excerpt) post.excerpt = excerpt;
    if (content) post.content = content;

    if (req.file) {
      // Delete old image if exists
      if (post.image) {
        const oldPath = path.join(__dirname, '..', '..', post.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      post.image = '/uploads/' + req.file.filename;
    }

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// ── PROTECTED: Delete post ──────────────────────────────────
// DELETE /api/posts/:id
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    // Delete image file if exists
    if (post.image) {
      const imgPath = path.join(__dirname, '..', '..', post.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await post.deleteOne();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

module.exports = router;

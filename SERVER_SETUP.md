# 🚀 DIGIスタート Backend Setup — Node.js + Express + MongoDB

Your blog admin system is now powered by a **production-ready backend** with real authentication and database storage.

## 📋 What Was Built

✅ **Express.js REST API** — All blog posts stored in MongoDB database  
✅ **JWT Authentication** — Secure server-side password hashing with bcrypt  
✅ **Image Upload** — Multer handles file uploads to `/uploads/`  
✅ **CRUD Operations** — Create, read, update, delete blog posts  
✅ **Frontend Integration** — `blogadmin.js` and `blog.js` updated for API calls  

---

## 🏃 Quick Start

### Prerequisites
- **Node.js** (already installed via npm)
- **MongoDB** (local or Docker)

### 1. Start MongoDB

#### Option A: Using Docker (Recommended)
```bash
docker run -d --name digistart-mongo -p 27017:27017 mongo:7
```

#### Option B: Local MongoDB
```bash
sudo systemctl start mongodb
# or
brew services start mongodb-community
```

### 2. Start the Server

From `/workspaces/Digistart`:
```bash
npm start
```

You should see:
```
✓ Connected to MongoDB
✓ Admin user created (DIGI)
✓ Server running at http://localhost:3000
  Blog admin: http://localhost:3000/blogadmin.html
```

### 3. Log In and Test

- Visit **http://localhost:3000/blogadmin.html**
- Username: `DIGI`
- Password: `DIGI12345`
- Create a new post with a title, excerpt, content, and optional image
- Posts appear instantly on **http://localhost:3000/blog.html**

---

## 📂 Project Structure

```
server/
├── index.js                    # Express app startup
├── seed.js                     # Initial admin user creation
├── models/
│   ├── User.js                # User schema (username, password)
│   └── Post.js                # BlogPost schema (title, content, etc)
├── middleware/
│   └── auth.js                # JWT verification middleware
└── routes/
    ├── auth.js                # POST /api/auth/login, GET /api/auth/verify
    └── posts.js               # GET/POST/PUT/DELETE /api/posts

uploads/                        # Where images are stored
  └── post-*.jpg|png|...
  
.env                           # Config (PORT, MONGO_URI, JWT_SECRET)
```

---

## 🔐 Security Features

- **Password Hashing**: bcryptjs with 12 salt rounds
- **JWT Tokens**: 24-hour expiration (change `JWT_SECRET` in .env)
- **Protected Routes**: All write operations require valid JWT
- **File Validation**: Only images; max 5MB
- **HTML Sanitization**: Scripts/iframes removed from post content

---

## 🔌 API Endpoints

### Authentication
| Endpoint | Method | Body | Returns |
|----------|--------|------|---------|
| `/api/auth/login` | POST | `{username, password}` | `{token, username}` |
| `/api/auth/verify` | GET | (Bearer token in header) | `{valid: true/false}` |

### Blog Posts (Public Read, Protected Write)
| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/posts` | GET | No | Fetch all posts |
| `/api/posts/:id` | GET | No | Fetch single post |
| `/api/posts` | POST | Yes | Create post (form with image) |
| `/api/posts/:id` | PUT | Yes | Update post (form with image) |
| `/api/posts/:id` | DELETE | Yes | Delete post |

### Image Serving
- Upload endpoint: `POST /api/posts` with `image` form field
- Uploaded files stored in `/uploads/`
- Served at: `http://localhost:3000/uploads/post-1234567890.jpg`

---

## 📝 Example API Calls

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"DIGI","password":"DIGI12345"}'
```
Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "DIGI"
}
```

### Create Post (Multipart Form)
```bash
TOKEN="eyJhbG..."
curl -X POST http://localhost:3000/api/posts \
  -H "Authorization: Bearer $TOKEN" \
  -F "title=My Blog Post" \
  -F "tag=Digital Tips" \
  -F "icon=📱" \
  -F "excerpt=Short summary..." \
  -F "content=<h3>Full Content</h3><p>Lorem ipsum...</p>" \
  -F "image=@/path/to/image.jpg"
```

### Get All Posts
```bash
curl http://localhost:3000/api/posts
```

---

## 🔧 Configuration

Edit `.env`:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/digistart
JWT_SECRET=your-secret-key-change-in-production
```

---

## 🚨 Production Deployment

Before going live, **update these values in `.env`**:

1. **JWT_SECRET** — Use a strong random string:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **MONGO_URI** — Use MongoDB Atlas (cloud):
   ```
   MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/digistart
   ```

3. **Admin Password** — Change in database:
   ```bash
   node -e "
   const User = require('./server/models/User');
   const mongoose = require('mongoose');
   require('dotenv').config();
   mongoose.connect(process.env.MONGO_URI).then(() => {
     User.findOneAndUpdate({username:'DIGI'}, {password:'NEWPASS'}).then(() => process.exit());
   });
   "
   ```

---

## 📊 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  username: "DIGI",
  password: "$2a$12$..." // bcrypt hash
}
```

### Post Collection
```javascript
{
  _id: ObjectId,
  icon: "📱",
  tag: "Digital Tips",
  title: "Why Every Small Business...",
  excerpt: "Discover why...",
  content: "<p>In 2026...</p>...",
  image: "/uploads/post-1774810000.jpg",
  createdAt: "2026-03-29T10:00:00.000Z",
  updatedAt: "2026-03-29T10:00:00.000Z"
}
```

---

## 🐛 Troubleshooting

### "MongoDB connection failed"
- Is MongoDB running? Check: `docker ps` or `mongo --version`
- Wrong MONGO_URI? Check `.env`
- Solution: Restart MongoDB or update `.env`

### "Invalid username or password"
- First time? Run: `npm start` to seed admin
- If it still fails, manually create user (see Configuration)

### "401 Unauthorized"
- Token expired? Log out and log back in
- Missing Authorization header? Check blogadmin.js sends Bearer token
- Token invalid? Restart server (new JWT_SECRET invalidates old tokens)

### Images not uploading
- File too large? Max 5MB
- Wrong format? Only JPG/PNG/GIF/WebP allowed
- Check permissions in `/uploads/` directory

---

## 🎯 Next Steps

1. **Add Admin Panel dashboard** — Show statistics, recent posts
2. **Email notifications** — Send confirmation when post published
3. **Scheduled posts** — Set publication date/time
4. **Rich text editor** — Replace textarea with TinyMCE or Quill
5. **CDN upload** — Store images on AWS S3 or Cloudinary instead of local
6. **Multi-user auth** — Add more admin users with roles
7. **Deploy to production** — Use Heroku, AWS, DigitalOcean, etc.

---

## 📞 Support

For issues or questions about the backend setup, check:
- Express.js docs: https://expressjs.com/
- Mongoose docs: https://mongoosejs.com/
- MongoDB docs: https://docs.mongodb.com/

Happy coding! 🚀

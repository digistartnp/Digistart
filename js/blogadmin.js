/* ============================================================
   DIGIスタート — Blog Admin JavaScript (Server-Side API)
   js/blogadmin.js
   ============================================================ */

const API_BASE = '/api';
const TOKEN_KEY = 'blogAdminToken';

// ── Helpers ─────────────────────────────────────────────────
function getToken() { return sessionStorage.getItem(TOKEN_KEY); }

function authHeaders() {
  return { 'Authorization': 'Bearer ' + getToken() };
}

// ── Authentication ──────────────────────────────────────────
async function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');

  try {
    const res = await fetch(API_BASE + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    });
    const data = await res.json();

    if (res.ok && data.token) {
      sessionStorage.setItem(TOKEN_KEY, data.token);
      showDashboard();
      errorEl.textContent = '';
    } else {
      errorEl.textContent = data.error || 'Invalid username or password.';
      document.getElementById('password').value = '';
    }
  } catch {
    errorEl.textContent = 'Server unavailable. Make sure the server is running.';
  }
  return false;
}

function handleLogout() {
  sessionStorage.removeItem(TOKEN_KEY);
  showLogin();
}

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminDashboard').style.display = 'block';
  renderPostsList();
}

function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('loginError').textContent = '';
}

// Check session on load
document.addEventListener('DOMContentLoaded', async function() {
  const token = getToken();
  if (token) {
    try {
      const res = await fetch(API_BASE + '/auth/verify', {
        headers: authHeaders()
      });
      if (res.ok) {
        showDashboard();
        return;
      }
    } catch { /* fall through to login */ }
    sessionStorage.removeItem(TOKEN_KEY);
  }
});

// ── Posts Management (API) ──────────────────────────────────
async function handlePostSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Saving...';

  const editId = document.getElementById('editPostId').value;
  const formData = new FormData();
  formData.append('title', document.getElementById('postTitle').value.trim());
  formData.append('tag', document.getElementById('postTag').value);
  formData.append('icon', document.getElementById('postIcon').value.trim() || '📝');
  formData.append('excerpt', document.getElementById('postExcerpt').value.trim());
  formData.append('content', document.getElementById('postContent').value.trim());

  const imageInput = document.getElementById('postImage');
  if (imageInput.files && imageInput.files[0]) {
    formData.append('image', imageInput.files[0]);
  }

  try {
    const url = editId
      ? API_BASE + '/posts/' + editId
      : API_BASE + '/posts';
    const method = editId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: authHeaders(),
      body: formData
    });

    if (res.status === 401) {
      alert('Session expired. Please log in again.');
      handleLogout();
      return;
    }

    const data = await res.json();
    if (!res.ok) {
      alert(data.error || 'Failed to save post');
      return;
    }

    resetForm();
    renderPostsList();
  } catch {
    alert('Server error. Make sure the server is running.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = editId ? 'Update Post →' : 'Publish Post →';
  }

  return false;
}

function resetForm() {
  document.getElementById('postForm').reset();
  document.getElementById('editPostId').value = '';
  document.getElementById('postIcon').value = '📝';
  document.getElementById('imagePreview').innerHTML = '';
  document.getElementById('formHeading').textContent = 'Create New Post';
  document.getElementById('submitBtn').textContent = 'Publish Post →';
  document.getElementById('cancelEditBtn').style.display = 'none';
}

async function editPost(id) {
  try {
    const res = await fetch(API_BASE + '/posts/' + id);
    const post = await res.json();
    if (!res.ok) return;

    document.getElementById('editPostId').value = post._id;
    document.getElementById('postTitle').value = post.title;
    document.getElementById('postTag').value = post.tag;
    document.getElementById('postIcon').value = post.icon;
    document.getElementById('postExcerpt').value = post.excerpt;
    document.getElementById('postContent').value = post.content;
    document.getElementById('formHeading').textContent = 'Edit Post';
    document.getElementById('submitBtn').textContent = 'Update Post →';
    document.getElementById('cancelEditBtn').style.display = 'inline-block';

    if (post.image) {
      document.getElementById('imagePreview').innerHTML =
        '<img src="' + post.image + '" alt="Post image">';
    }

    document.getElementById('formHeading').scrollIntoView({ behavior: 'smooth' });
  } catch {
    alert('Failed to load post.');
  }
}

function cancelEdit() {
  resetForm();
}

async function deletePost(id) {
  if (!confirm('Are you sure you want to delete this post?')) return;

  try {
    const res = await fetch(API_BASE + '/posts/' + id, {
      method: 'DELETE',
      headers: authHeaders()
    });
    if (res.status === 401) {
      alert('Session expired. Please log in again.');
      handleLogout();
      return;
    }
    if (!res.ok) {
      const data = await res.json();
      alert(data.error || 'Failed to delete');
      return;
    }
    renderPostsList();
  } catch {
    alert('Server error.');
  }
}

function previewImage(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    document.getElementById('imagePreview').innerHTML =
      '<img src="' + ev.target.result + '" alt="Preview">';
  };
  reader.readAsDataURL(file);
}

// ── Render Posts List ────────────────────────────────────────
async function renderPostsList() {
  const container = document.getElementById('postsList');
  const countEl = document.getElementById('postCount');

  try {
    const res = await fetch(API_BASE + '/posts');
    const posts = await res.json();
    countEl.textContent = posts.length;

    if (posts.length === 0) {
      container.innerHTML = '<div class="no-posts">No posts yet. Create your first one above!</div>';
      return;
    }

    container.innerHTML = posts.map(post => {
      const dateStr = new Date(post.createdAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      const thumb = post.image
        ? '<img src="' + escapeAttr(post.image) + '" alt="" class="post-item-thumb">'
        : '<div class="post-item-icon">' + escapeHTML(post.icon) + '</div>';
      return `
        <div class="post-item">
          ${thumb}
          <div class="post-item-info">
            <h4>${escapeHTML(post.title)}</h4>
            <div class="post-meta">${escapeHTML(post.tag)} · ${dateStr}</div>
          </div>
          <div class="post-item-actions">
            <button class="btn-edit" onclick="editPost('${post._id}')">Edit</button>
            <button class="btn-delete" onclick="deletePost('${post._id}')">Delete</button>
          </div>
        </div>
      `;
    }).join('');
  } catch {
    container.innerHTML = '<div class="no-posts">Failed to load posts. Is the server running?</div>';
    countEl.textContent = '0';
  }
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

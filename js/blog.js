/* ============================================================
   DIGIスタート — Blog JavaScript
   js/blog.js
   ============================================================ */

// ── Blog Post Data ──────────────────────────────────────────
const blogPosts = [
  {
    id: 1,
    icon: "📱",
    tag: "Digital Tips",
    date: "March 25, 2026",
    title: "Why Every Small Business Needs a Website in 2026",
    excerpt: "Discover why having a professional website is no longer optional and how it can transform your customer reach...",
    content: `
      <p>In 2026, having a professional website is as essential as having a business card was 20 years ago. Customers expect to find you online — and if they can't, they'll find your competitor instead.</p>
      <h3>The Numbers Don't Lie</h3>
      <p>Over 85% of consumers research a business online before making a purchase or visiting in person. Without a website, you're invisible to the majority of potential customers.</p>
      <h3>What a Good Website Does for You</h3>
      <ul>
        <li><strong>Builds credibility</strong> — A professional site makes your business look trustworthy and established.</li>
        <li><strong>Works 24/7</strong> — Your website is your hardest-working employee, showcasing your services around the clock.</li>
        <li><strong>Captures leads</strong> — Contact forms, booking systems, and newsletter signups turn visitors into customers.</li>
        <li><strong>Supports SEO & MEO</strong> — Helps you rank on Google Search and Google Maps for local queries.</li>
      </ul>
      <h3>Getting Started Is Easier Than You Think</h3>
      <p>At DIGIスタート, we build professional, mobile-optimized websites starting from just ¥29,800. Whether you're a restaurant, salon, or consulting firm — we make going digital simple and affordable.</p>
      <p>Don't let your business stay invisible. <strong>Start smart. Start digital.</strong></p>
    `
  {
    id: 4,
    icon: "🎯",
    tag: null, // use translation
    date: "March 10, 2026",
    title: null, // use translation
    excerpt: null, // use translation
    content: `
    content: `
      <p>MEO (Map Engine Optimization) is the process of optimizing your Google Business Profile so your business appears prominently in local Google Maps searches. For businesses in Japan, MEO is one of the most powerful — and underused — marketing tools available.</p>
      <h3>Why MEO Matters in Japan</h3>
      <p>When someone searches "ramen near me" or "美容室 近く" on their phone, Google Maps results appear before regular search results. Being in that top 3 map pack means more visibility, more calls, and more foot traffic.</p>
      <h3>Key MEO Strategies</h3>
      <ul>
        <li><strong>Complete your Google Business Profile</strong> — Fill in every field: hours, categories, photos, description.</li>
        <li><strong>Get reviews</strong> — Encourage happy customers to leave Google reviews. Respond to every one.</li>
        <li><strong>Add photos weekly</strong> — Businesses with fresh photos get 42% more direction requests.</li>
        <li><strong>Use the "Order" button</strong> — Link it directly to your landing page or menu for instant conversions.</li>
        <li><strong>Post updates</strong> — Google Business posts keep your profile active and relevant.</li>
      </ul>
      <h3>MEO + Website = Maximum Impact</h3>
      <p>A well-optimized Google Maps listing paired with a fast, professional website creates a powerful local marketing engine. At DIGIスタート, we set up both as part of our Go Digital package.</p>
    `
  },
  {
    id: 3,
    icon: "🚀",
    tag: "SNS Growth",
    date: "March 15, 2026",
    title: "5 Instagram Strategies That Actually Work for Restaurants",
    excerpt: "From reels to stories, learn proven tactics that restaurants in Japan are using to boost engagement and orders...",
    {
      id: 4,
      icon: "🎯",
      tag: null, // use translation
      date: "March 10, 2026",
      title: null, // use translation
      excerpt: null, // use translation
      content: `
    content: `
      <p>Instagram is the #1 platform for restaurant discovery in Japan. If your restaurant isn't active on Instagram, you're leaving money on the table. Here are 5 strategies that actually work.</p>
      <h3>1. Post Reels of Your Best Dishes</h3>
      <p>Short-form video content gets 2x more reach than static photos. Film your chef plating a dish, a close-up pour of a drink, or a sizzling steak. Keep it under 15 seconds.</p>
      <h3>2. Use Location Tags & Food Hashtags</h3>
      <p>Always tag your location and use relevant hashtags like #東京グルメ, #ランチ, #foodie. This makes you discoverable to local food lovers.</p>
      <h3>3. Share Stories Daily</h3>
      <p>Stories keep you at the top of your followers' feeds. Share behind-the-scenes kitchen content, daily specials, or customer shoutouts.</p>
      <h3>4. Collaborate with Local Food Bloggers</h3>
    {
      id: 5,
      icon: "💡",
      tag: null, // use translation
      date: "March 5, 2026",
      title: null, // use translation
      excerpt: null, // use translation
      content: `
      <p>Invite 2-3 local micro-influencers for a complimentary meal. Their posts reach thousands of potential customers in your area.</p>
      <h3>5. Link Your Bio to Your Website</h3>
      <p>Use your Instagram bio link to drive traffic to your website where customers can see your full menu, make reservations, or order online. We help set this up at DIGIスタート.</p>
    `
  },
  {
    id: 4,
    icon: "🎯",
    tag: "Marketing",
    {
      id: 6,
      icon: "🌐",
      tag: null, // use translation
      date: "February 28, 2026",
      title: null, // use translation
      excerpt: null, // use translation
      content: `
    date: "March 10, 2026",
    title: "Digital Transformation: From Fax to Fast — A Japan Business Guide",
    excerpt: "Many Japanese businesses still rely on fax and paper. Here's how to modernize without disrupting your operations...",
    content: `
      <p>Japan is a technology leader, yet many small and medium businesses still rely on fax machines, paper ledgers, and phone-only bookings. Digital transformation doesn't mean throwing everything out — it means upgrading smartly.</p>
      <h3>Common Outdated Practices</h3>
      <ul>
        <li>Fax-based ordering and communication</li>
        <li>Paper appointment books and customer records</li>
        <li>Cash-only payment systems</li>
        <li>No online presence or social media</li>
      </ul>
      <h3>Simple Digital Upgrades</h3>
      <ul>
        <li><strong>Online booking</strong> — Replace phone-only reservations with a simple online form.</li>
        <li><strong>Digital payments</strong> — Accept PayPay, credit cards, and QR payments.</li>
        <li><strong>Cloud storage</strong> — Move from paper files to Google Drive or Notion.</li>
        <li><strong>Website + QR menus</strong> — Replace printed menus with branded digital versions.</li>
      </ul>
      <h3>Start Small, Think Big</h3>
      <p>You don't need to digitize everything at once. Start with a website and Google Maps listing, then add SNS and digital payments. DIGIスタート guides you through every step.</p>
    `
  },
  {
    id: 5,
    icon: "💡",
    tag: null, // use translation
    date: "March 5, 2026",
    title: null, // use translation
    excerpt: null, // use translation
    content: `
      <p>QR code menus exploded during the pandemic, but they're here to stay. For restaurants in Japan, they offer real advantages over printed menus — if done right.</p>
      <h3>Benefits of QR Code Menus</h3>
      <ul>
        <li><strong>Cost savings</strong> — No more reprinting menus for price changes or new items.</li>
        <li><strong>Hygiene</strong> — Contactless ordering is still preferred by many customers.</li>
        <li><strong>Speed</strong> — Customers can browse your menu instantly on their phones.</li>
        <li><strong>Analytics</strong> — Track which items customers view most.</li>
      </ul>
      <h3>How to Do QR Menus Right</h3>
      <p>A good QR menu isn't just a PDF link. It should be a mobile-optimized webpage with clear categories, appetizing photos, prices, and easy navigation. At DIGIスタート, we create branded QR menu pages that match your restaurant's identity.</p>
      <h3>Setup Is Fast</h3>
      <p>We design your digital menu, generate branded QR codes, and provide table tent templates — all included in our Go Digital package. Updates are instant and free.</p>
    `
  },
  {
    id: 6,
    icon: "🌐",
    tag: null, // use translation
    date: "February 28, 2026",
    title: null, // use translation
    excerpt: null, // use translation
    content: `
      <p>Japan attracts millions of international visitors, expats, and foreign business partners. If your website only speaks one language, you're losing potential customers every day.</p>
      <h3>The Multilingual Advantage</h3>
      <ul>
        <li><strong>Reach tourists</strong> — International visitors search in English before and during their trips.</li>
        <li><strong>Serve expats</strong> — There are over 3 million foreign residents in Japan who prefer English content.</li>
        <li><strong>Expand globally</strong> — A multilingual site lets you serve customers beyond Japan's borders.</li>
      </ul>
      <h3>Which Languages Should You Add?</h3>
      <p>For most businesses in Japan, we recommend starting with Japanese and English. If you serve the Nepali or South Asian community, adding Nepali opens another large audience. DIGIスタート supports all three.</p>
      <h3>Implementation Tips</h3>
      <ul>
        <li>Use language switcher buttons (not auto-redirect based on IP).</li>
        <li>Translate content professionally — machine translation hurts credibility.</li>
        <li>Keep the design consistent across all language versions.</li>
      </ul>
      <p>At DIGIスタート, every website we build can support up to 3 languages out of the box. <strong>Go global, stay local.</strong></p>
    `
  }
];

// ── Merge API posts with default posts ──────────────────────
let cachedApiPosts = [];

async function fetchApiPosts() {
  try {
    const res = await fetch('/api/posts');
    if (res.ok) {
      cachedApiPosts = await res.json();
    }
  } catch { /* API not available, use defaults only */ }
}

function getTranslatedPost(post, lang) {
  // For posts 4,5,6 use translation keys if present
  if (post.id >= 4 && post.id <= 6) {
    const t = window.translations?.[lang] || translations[lang];
    const tEn = window.translations?.en || translations.en;
    return {
      ...post,
      tag: t[`blog_post${post.id}_tag`] || tEn[`blog_post${post.id}_tag`] || post.tag,
      title: t[`blog_post${post.id}_title`] || tEn[`blog_post${post.id}_title`] || post.title,
      excerpt: t[`blog_post${post.id}_excerpt`] || tEn[`blog_post${post.id}_excerpt`] || post.excerpt,
    };
  }
  return post;
}

function getAllPosts() {
  const lang = window.currentLang || (typeof currentLang !== 'undefined' ? currentLang : 'jp');
  // Map API posts to match the shape of default posts
  const apiMapped = cachedApiPosts.map(p => ({
    id: p._id,
    icon: p.icon,
    tag: p.tag,
    date: new Date(p.createdAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }),
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    image: p.image || ''
  }));
  // Default posts with translation
  const translatedDefaults = blogPosts.map(post => getTranslatedPost(post, lang));
  // API posts first (newest), then default posts
  return [...apiMapped, ...translatedDefaults];
}

// ── Render Blog Cards ───────────────────────────────────────
async function renderBlogCards() {
  const grid = document.querySelector('.blog-grid');
  if (!grid) return;

  await fetchApiPosts();
  const allPosts = getAllPosts();

  grid.innerHTML = allPosts.map(post => {
    const postIdAttr = typeof post.id === 'string'
      ? `'${post.id}'`
      : post.id;
    const imgSection = post.image
      ? `<div class="blog-card-img" style="background:url(${post.image}) center/cover no-repeat;font-size:0;"></div>`
      : `<div class="blog-card-img">${post.icon}</div>`;
    return `
      <div class="blog-card" onclick="openBlogModal(${postIdAttr})">
        ${imgSection}
        <div class="blog-card-body">
          <span class="blog-card-tag">${post.tag}</span>
          <span class="blog-card-date">${post.date}</span>
          <h3>${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <span class="blog-card-readmore">Read More →</span>
        </div>
      </div>
    `;
  }).join('');
}

// ── Blog Modal ──────────────────────────────────────────────
function openBlogModal(postId) {
  const allPosts = getAllPosts();
  // Support both numeric and string (MongoDB _id) post IDs
  const post = allPosts.find(p => String(p.id) === String(postId));
  if (!post) return;

  const overlay = document.getElementById('blogModalOverlay');
  document.getElementById('blogModalIcon').textContent = post.icon;
  document.getElementById('blogModalTag').textContent = post.tag;
  document.getElementById('blogModalDate').textContent = post.date;
  document.getElementById('blogModalTitle').textContent = post.title;

  let modalHTML = '';
  if (post.image) {
    modalHTML += '<img src="' + post.image + '" alt="" style="width:100%;max-height:300px;object-fit:cover;border-radius:12px;margin-bottom:20px;">';
  }
  modalHTML += post.content;
  document.getElementById('blogModalContent').innerHTML = modalHTML;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  const overlay = document.getElementById('blogModalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  renderBlogCards();

  // Close modal on overlay click
  const overlay = document.getElementById('blogModalOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeBlogModal();
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeBlogModal();
  });
});

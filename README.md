# DIGIスタート — Website Files

## 📁 Folder Structure

```
digistart/
├── index.html          ← Main HTML file (open this in your browser)
├── css/
│   └── style.css       ← All styles and responsive design
├── js/
│   └── main.js         ← Bundled JavaScript (built from src/)
├── src/
│   └── main.js         ← Source JavaScript (edit this file)
├── images/
│   ├── logo.png        ← DIGIスタート logo
│   ├── we_help.png     ← Marketing banner 1
│   ├── we_help1.png    ← Marketing banner 2
│   ├── we_help2.png    ← Marketing banner 3
│   └── 20251226.png    ← Additional image
└── package.json        ← Dependencies and build scripts
```

## 🚀 How to Use

### For Development:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make changes to `src/main.js` (not `js/main.js` directly)

3. Build the project:
   ```bash
   npm run build
   ```
   Or use watch mode for automatic rebuilding:
   ```bash
   npm run dev
   ```

4. Open `index.html` in any modern browser to view the site

### For Deployment:

1. Run `npm run build` to generate the production bundle
2. Deploy to Vercel, Netlify, or any static hosting service
3. Vercel Web Analytics will automatically start tracking when deployed to Vercel

## ✏️ How to Customize

- **Colors**: Edit CSS variables at the top of `css/style.css`
- **Text / Translations**: Edit the `translations` object in `src/main.js`
- **Contact details**: Update email, social handles in `index.html` (search for `hello@digistart.jp`)
- **Images**: Replace files in the `images/` folder (keep the same filenames)

## 🌐 Languages Supported

- 🇬🇧 English
- 🇯🇵 Japanese (日本語)
- 🇳🇵 Nepali (नेपाली)

## 📬 Connect the Contact Form

The form currently shows a success message. To receive real emails, connect it to:
- [Formspree](https://formspree.io) — free, easy
- [EmailJS](https://emailjs.com) — works without a backend

---
*DIGIスタート — Start smart. Start digital.*

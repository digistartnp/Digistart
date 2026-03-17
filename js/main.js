/* ============================================================
   DIGIスタート — Main JavaScript
   js/main.js
   ============================================================ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const translations = {
  en: {
    nav_home: "Home", nav_services: "Services", nav_about: "About",
    nav_faq: "FAQ", nav_contact: "Contact", nav_cta: "Apply Now →",
    hero_badge: "Digital Marketing Agency",
    hero_title_1: "We Help", hero_title_2: "To Go Digital",
    hero_sub: "Start smart. Start digital. We transform traditional businesses into modern digital powerhouses — websites, social media, and full digital transformation.",
    hero_cta1: "Get Started →", hero_cta2: "Our Services",
    stat1: "Core Services", stat2: "Client Focus", stat3: "Languages",
    hero_card_tag: "Digital Transformation",
    hero_card_title: "Your Business, Reimagined",
    hero_card_desc: "We bridge the gap between traditional operations and the digital future.",
    mp1: "Online Reach", mp2: "Engagement", fc1_label: "Website",
    fc1_val: "Live & Fast", fc2_label: "SNS Growth",
    svc_label: "What We Do", svc_title: "Our Services",
    svc_sub: "Everything you need to build a strong digital presence.",
    svc1_title: "Website", svc2_title: "SNS Management", svc3_title: "Digital Transformation",
    svc1_desc: "Professional, fast-loading websites tailored to your brand. From landing pages to full e-commerce solutions.",
    svc2_desc: "Build your community and grow your brand on Instagram, Facebook, and more.",
    svc3_desc: "Move beyond fax machines and paper. We modernize your business operations with digital tools.",
    svc1_t1: "Landing Page", svc1_t2: "E-Commerce", svc1_t3: "Corporate Site",
    svc2_t3: "Content", svc3_t1: "Consulting", svc3_t2: "Automation", svc3_t3: "Strategy",
    about_label: "Who We Are", about_title: "About DIGIスタート",
    about_sub: "We're a multilingual digital marketing agency helping businesses break into the digital world.",
    about_tagline_1: "Start smart.", about_tagline_2: "Start digital.",
    about_card_desc: "DIGIスタート was born from a simple belief: every business deserves a modern digital presence. We work with shops, entrepreneurs, and growing companies across Japan and beyond.",
    am1: "Languages Supported", am2: "Client Potential",
    val1_title: "Result-Driven", val1_desc: "Every project is built around measurable outcomes that grow your business.",
    val2_title: "Multilingual Support", val2_desc: "We communicate in English, Japanese, and Nepali — no barriers.",
    val3_title: "Accessible & Affordable", val3_desc: "Digital transformation for everyone, not just big corporations.",
    faq_label: "Got Questions?", faq_title: "Frequently Asked", faq_cta: "Ask Us Directly →",
    faq_sub: "Can't find your answer? Reach out to us directly.",
    faq1_q: "What services does DIGIスタート offer?",
    faq1_a: "We offer three core services: Website Development, SNS Management, and Digital Transformation consulting.",
    faq2_q: "What languages do you support?",
    faq2_a: "We operate fully in English, Japanese (日本語), and Nepali (नेपाली).",
    faq3_q: "How long does it take to build a website?",
    faq3_a: "A landing page takes 1–2 weeks. A full corporate or e-commerce website typically takes 3–6 weeks.",
    faq4_q: "How do I get started?",
    faq4_a: "Fill out the contact form or reach us via social media. We'll schedule a free consultation.",
    faq5_q: "Do you work with small businesses?",
    faq5_a: "Absolutely! Small and medium businesses are at the heart of what we do. We offer flexible packages.",
    faq6_q: "What is digital transformation?",
    faq6_a: "Replacing outdated tools (fax, paper) with modern digital systems: online booking, digital payments, cloud storage, and online marketing.",
    contact_label: "Get In Touch", contact_title: "Let's Start Your Digital Journey",
    contact_sub: "Ready to go digital? We'll get back to you within 24 hours.",
    cm_fb: "Facebook", cm_ig: "Instagram", cm_email: "Email",
    form_title: "Apply Now — It's Free",
    form_name: "Your Name", form_email: "Email Address", form_service: "Service Interested In",
    form_select: "Select a service...", form_opt1: "Website Development",
    form_opt2: "SNS Management", form_opt3: "Digital Transformation", form_opt4: "All Services",
    form_msg: "Message", form_submit: "Send Message →",
    form_success: "✅ Message sent! We'll be in touch within 24 hours.",
    footer_tagline: "Start smart. Start digital. Your trusted partner in digital transformation.",
    footer_nav: "Navigation", footer_services: "Services", footer_lang: "Languages"
  },

  jp: {
    nav_home: "ホーム", nav_services: "サービス", nav_about: "私たちについて",
    nav_faq: "よくある質問", nav_contact: "お問い合わせ", nav_cta: "今すぐ申し込む →",
    hero_badge: "デジタルマーケティング会社",
    hero_title_1: "デジタル化を", hero_title_2: "サポートします",
    hero_sub: "スマートに始め、デジタルに始める。従来のビジネスをウェブサイト・SNS・デジタルトランスフォーメーションで現代的な形に変えます。",
    hero_cta1: "始める →", hero_cta2: "サービス一覧",
    stat1: "主要サービス", stat2: "顧客重視", stat3: "対応言語",
    hero_card_tag: "デジタルトランスフォーメーション",
    hero_card_title: "ビジネスを再定義",
    hero_card_desc: "従来の業務とデジタルの未来をつなぎます。",
    mp1: "オンラインリーチ", mp2: "エンゲージメント", fc1_label: "ウェブサイト",
    fc1_val: "高速・安定", fc2_label: "SNS成長",
    svc_label: "提供サービス", svc_title: "サービス内容",
    svc_sub: "強力なデジタルプレゼンスを構築するために必要なすべて。",
    svc1_title: "ウェブサイト", svc2_title: "SNS管理", svc3_title: "デジタルトランスフォーメーション",
    svc1_desc: "ブランドに合ったプロ仕様の高速ウェブサイト。ランディングページからECサイトまで対応。",
    svc2_desc: "Instagram・FacebookなどのSNSでコミュニティを育て、ブランドを成長させます。",
    svc3_desc: "FAXや紙から脱却。デジタルツールでビジネスを近代化します。",
    svc1_t1: "ランディングページ", svc1_t2: "ECサイト", svc1_t3: "コーポレートサイト",
    svc2_t3: "コンテンツ", svc3_t1: "コンサルティング", svc3_t2: "自動化", svc3_t3: "戦略",
    about_label: "私たちについて", about_title: "DIGIスタートとは",
    about_sub: "多言語対応のデジタルマーケティングエージェンシーとして、ビジネスのデジタル化を支援します。",
    about_tagline_1: "スマートに始める。", about_tagline_2: "デジタルに始める。",
    about_card_desc: "DIGIスタートは「すべてのビジネスが現代的なデジタルプレゼンスを持つべき」という信念から生まれました。",
    am1: "対応言語数", am2: "可能性は無限大",
    val1_title: "結果重視", val1_desc: "すべてのプロジェクトはビジネス成長につながる成果を中心に設計されています。",
    val2_title: "多言語サポート", val2_desc: "英語・日本語・ネパール語で対応。言語の壁はありません。",
    val3_title: "手頃な価格", val3_desc: "大企業だけでなく、すべての人にデジタルトランスフォーメーションを。",
    faq_label: "よくある質問", faq_title: "Q&A", faq_cta: "直接お問い合わせ →",
    faq_sub: "答えが見つからない場合はお気軽にご連絡ください。",
    faq1_q: "DIGIスタートのサービス内容は？",
    faq1_a: "ウェブサイト制作・SNS管理・デジタルトランスフォーメーションコンサルティングの3つを提供しています。",
    faq2_q: "対応言語は？",
    faq2_a: "英語・日本語・ネパール語に完全対応しています。",
    faq3_q: "ウェブサイト制作にどれくらい時間がかかりますか？",
    faq3_a: "ランディングページは1〜2週間、コーポレートサイトやECサイトは3〜6週間が目安です。",
    faq4_q: "始めるにはどうすればいいですか？",
    faq4_a: "お問い合わせフォームまたはSNSからご連絡ください。無料相談を設定します。",
    faq5_q: "中小企業でも対応していますか？",
    faq5_a: "もちろんです！中小企業こそ私たちの得意分野です。柔軟なプランをご用意しています。",
    faq6_q: "デジタルトランスフォーメーションとは？",
    faq6_a: "FAXや紙などの古いツールを、オンライン予約・デジタル決済・クラウドストレージなどの現代的なシステムに置き換えることです。",
    contact_label: "お問い合わせ", contact_title: "デジタルの旅を始めましょう",
    contact_sub: "デジタル化の準備ができたら、24時間以内にご返答します。",
    cm_fb: "フェイスブック", cm_ig: "インスタグラム", cm_email: "メール",
    form_title: "今すぐ申し込む — 無料",
    form_name: "お名前", form_email: "メールアドレス", form_service: "ご希望のサービス",
    form_select: "サービスを選択...", form_opt1: "ウェブサイト制作",
    form_opt2: "SNS管理", form_opt3: "デジタルトランスフォーメーション", form_opt4: "すべてのサービス",
    form_msg: "メッセージ", form_submit: "送信する →",
    form_success: "✅ 送信完了！24時間以内にご連絡します。",
    footer_tagline: "スマートに始め、デジタルに始める。デジタルトランスフォーメーションの信頼できるパートナー。",
    footer_nav: "ナビゲーション", footer_services: "サービス", footer_lang: "言語"
  },

  np: {
    nav_home: "होम", nav_services: "सेवाहरू", nav_about: "हाम्रो बारे",
    nav_faq: "प्रश्नहरू", nav_contact: "सम्पर्क", nav_cta: "अहिले आवेदन गर्नुहोस् →",
    hero_badge: "डिजिटल मार्केटिङ एजेन्सी",
    hero_title_1: "हामी मद्दत गर्छौं", hero_title_2: "डिजिटल बन्न",
    hero_sub: "स्मार्ट सुरु। डिजिटल सुरु। हामी परम्परागत व्यवसायलाई वेबसाइट, सोशल मिडिया र डिजिटल ट्रान्सफर्मेशनको माध्यमले आधुनिक बनाउँछौं।",
    hero_cta1: "सुरु गर्नुहोस् →", hero_cta2: "हाम्रा सेवाहरू",
    stat1: "मुख्य सेवाहरू", stat2: "ग्राहक केन्द्रित", stat3: "भाषाहरू",
    hero_card_tag: "डिजिटल ट्रान्सफर्मेशन",
    hero_card_title: "तपाईंको व्यवसाय, नयाँ रूपमा",
    hero_card_desc: "परम्परागत कार्यप्रणाली र डिजिटल भविष्यबीचको खाडल पूर्ण गर्छौं।",
    mp1: "अनलाइन पहुँच", mp2: "संलग्नता", fc1_label: "वेबसाइट",
    fc1_val: "छिटो र सक्रिय", fc2_label: "SNS वृद्धि",
    svc_label: "हामी के गर्छौं", svc_title: "हाम्रा सेवाहरू",
    svc_sub: "बलियो डिजिटल उपस्थिति निर्माण गर्न चाहिने सबै कुरा।",
    svc1_title: "वेबसाइट", svc2_title: "SNS व्यवस्थापन", svc3_title: "डिजिटल ट्रान्सफर्मेशन",
    svc1_desc: "तपाईंको ब्राण्डका लागि पेशेवर, द्रुत वेबसाइट। ल्यान्डिङ पेजदेखि ई-कमर्ससम्म।",
    svc2_desc: "Instagram, Facebook लगायत प्लेटफर्ममा समुदाय निर्माण र ब्राण्ड विकास।",
    svc3_desc: "फ्याक्स र कागजबाट मुक्ति। डिजिटल उपकरणले व्यवसाय आधुनिक बनाउनुहोस्।",
    svc1_t1: "ल्यान्डिङ पेज", svc1_t2: "ई-कमर्स", svc1_t3: "कर्पोरेट साइट",
    svc2_t3: "कन्टेन्ट", svc3_t1: "परामर्श", svc3_t2: "स्वचालन", svc3_t3: "रणनीति",
    about_label: "हाम्रो बारे", about_title: "DIGIスタートको बारे",
    about_sub: "हामी बहुभाषी डिजिटल मार्केटिङ एजेन्सी हौं जसले व्यवसायलाई डिजिटल दुनियामा प्रवेश गर्न सहयोग गर्छ।",
    about_tagline_1: "स्मार्ट सुरु।", about_tagline_2: "डिजिटल सुरु।",
    about_card_desc: "DIGIスタートको जन्म एउटा सरल विश्वासबाट भयो: हर व्यवसायले आधुनिक डिजिटल उपस्थिति पाउनुपर्छ।",
    am1: "समर्थित भाषाहरू", am2: "असीमित सम्भावना",
    val1_title: "परिणाममुखी", val1_desc: "प्रत्येक परियोजना मापनयोग्य परिणाम र व्यवसाय वृद्धिमा केन्द्रित छ।",
    val2_title: "बहुभाषी समर्थन", val2_desc: "अंग्रेजी, जापानी र नेपालीमा सञ्चार। कुनै अवरोध छैन।",
    val3_title: "सुलभ र किफायती", val3_desc: "डिजिटल ट्रान्सफर्मेशन ठूला कम्पनीका लागि मात्र होइन, सबैका लागि।",
    faq_label: "प्रश्नहरू छन्?", faq_title: "बारम्बार सोधिने प्रश्नहरू", faq_cta: "सिधै सोध्नुहोस् →",
    faq_sub: "जवाफ नपाउनुभएमा हामीलाई सिधै सम्पर्क गर्नुहोस्।",
    faq1_q: "DIGIスタートले के-के सेवा दिन्छ?",
    faq1_a: "हामी तीन मुख्य सेवाहरू प्रदान गर्छौं: वेबसाइट विकास, SNS व्यवस्थापन, र डिजिटल ट्रान्सफर्मेशन परामर्श।",
    faq2_q: "कुन-कुन भाषाहरूमा सेवा दिइन्छ?",
    faq2_a: "हामी अंग्रेजी, जापानी (日本語) र नेपाली (नेपाली) मा पूर्ण सेवा दिन्छौं।",
    faq3_q: "वेबसाइट बनाउन कति समय लाग्छ?",
    faq3_a: "ल्यान्डिङ पेजका लागि १–२ हप्ता। पूर्ण कर्पोरेट वा ई-कमर्स साइटका लागि ३–६ हप्ता।",
    faq4_q: "कसरी सुरु गर्ने?",
    faq4_a: "सम्पर्क फर्म भर्नुहोस् वा सोशल मिडियामार्फत सम्पर्क गर्नुहोस्। हामी निःशुल्क परामर्श मिलाउनेछौं।",
    faq5_q: "साना व्यवसायका लागि पनि काम गर्नुहुन्छ?",
    faq5_a: "बिल्कुल! साना र मझौला व्यवसाय हाम्रो मुख्य लक्ष्य हो। लचकदार प्याकेजहरू उपलब्ध छन्।",
    faq6_q: "डिजिटल ट्रान्सफर्मेशन भनेको के हो?",
    faq6_a: "पुराना उपकरणहरू (फ्याक्स, कागज) लाई अनलाइन बुकिङ, डिजिटल भुक्तानी, क्लाउड स्टोरेज जस्ता आधुनिक प्रणालीले प्रतिस्थापन गर्नु।",
    contact_label: "सम्पर्क", contact_title: "तपाईंको डिजिटल यात्रा सुरु गरौं",
    contact_sub: "डिजिटल बन्न तयार? हामी २४ घण्टाभित्र जवाफ दिनेछौं।",
    cm_fb: "फेसबुक", cm_ig: "इन्स्टाग्राम", cm_email: "इमेल",
    form_title: "अहिले आवेदन गर्नुहोस् — निःशुल्क",
    form_name: "तपाईंको नाम", form_email: "इमेल ठेगाना", form_service: "रुचि राखेको सेवा",
    form_select: "सेवा छान्नुहोस्...", form_opt1: "वेबसाइट विकास",
    form_opt2: "SNS व्यवस्थापन", form_opt3: "डिजिटल ट्रान्सफर्मेशन", form_opt4: "सबै सेवाहरू",
    form_msg: "सन्देश", form_submit: "सन्देश पठाउनुहोस् →",
    form_success: "✅ सन्देश पठाइयो! हामी २४ घण्टाभित्र सम्पर्क गर्नेछौं।",
    footer_tagline: "स्मार्ट सुरु। डिजिटल सुरु। डिजिटल ट्रान्सफर्मेशनमा तपाईंको विश्वसनीय साझेदार।",
    footer_nav: "नेभिगेशन", footer_services: "सेवाहरू", footer_lang: "भाषाहरू"
  }
};

let currentLang = 'en';

// ── LANGUAGE SWITCHER ─────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const map = { en: 'EN', jp: 'JP', np: 'नेपाली' };
    if (btn.textContent.trim() === map[lang]) btn.classList.add('active');
  });
}

// ── FAQ ACCORDION ─────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-icon').textContent = '+';
  });

  // Open clicked if it was closed
  if (!isOpen) {
    item.classList.add('open');
    btn.querySelector('.faq-icon').textContent = '−';
  }
}

// ── CONTACT FORM ──────────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const service = document.getElementById('serviceInput').value.trim();
  const msg = document.getElementById('messageInput').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill all fields before sending.');
    return;
  }

  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.style.display = 'none';
  success.style.display = 'block';
  success.textContent = translations[currentLang].form_success;

  // Redirect to Google Form after 2 seconds
  // Replace with actual field entry IDs from your Google Form for full pre-fill
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfa5grd5Jbd71ZSpTybc-cgzKsRWy8sYLh6WKJRMNw0ECahww/viewform?usp=pp_url&entry.FIELD_ID_NAME=NAME_VALUE&entry.FIELD_ID_EMAIL=EMAIL_VALUE&entry.FIELD_ID_SERVICE=SERVICE_VALUE&entry.FIELD_ID_MESSAGE=MESSAGE_VALUE';
  
  setTimeout(() => {
    window.location.href = googleFormUrl;
  }, 2000);
}

// ── NAVBAR SCROLL EFFECT ──────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

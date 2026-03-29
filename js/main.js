/* ============================================================
   DIGIスタート — Main JavaScript
   js/main.js
   ============================================================ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const translations = {
  en: {
    nav_home: "Home", nav_services: "Services", nav_pricing: "Pricing", nav_about: "About",
    nav_faq: "FAQ", nav_contact: "Contact", nav_cta: "Apply Now →",
    nav_blog: "Blog",
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
    svc4_title: "MEO + QR Code Menus + SNS Integration",
    svc4_desc: "Optimize your Google Maps button to open your new landing page, generate branded QR table menus, and link your Instagram/SNS profiles directly to your fast site.",
    svc4_t1: "Google Maps Order", svc4_t2: "Branded QR Menu", svc4_t3: "Instagram/SNS",
    svc4_footer: "MEO + QR Menus + SNS Link",
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
    faq7_q: "What is MEO (Map Engine Optimization)?",
    faq7_a: "MEO ensures your business is visible and optimized on Google Maps. We set up your 'Order' button to direct customers straight to your landing page, increasing orders and engagement.",
    faq8_q: "How do QR Code Menus help my business?",
    faq8_a: "Branded QR codes on table tents or displays let customers instantly access your digital menu or services. They're fast, contactless, and drive traffic to your site—perfect for restaurants, cafes, and service businesses.",
    faq9_q: "How do you integrate Instagram and SNS?",
    faq9_a: "We link your Instagram profile bio and SNS channels directly to your new landing page, creating a single hub for all customer interactions. One link guides them to your website, services, and social channels.",
    price_label: "Monthly Plans", price_title: "Simple Plans, Real Results", price_sub: "No hidden fees. Scale as you grow. Pick JPY or USD.",
    pricing_label: "Transparent Pricing", pricing_heading: "Simple Plans, <em>Real Results</em>", pricing_subheading: "No hidden fees, no surprises. Pick your currency and launch your digital presence today.",
    plan_go_name: "Go Digital", plan_go_tagline: "For shops & small businesses", plan_go_note: "One-time payment · Delivered in 1–2 weeks", plan_go_f1: "Professional landing page (1 page)", plan_go_f2: "Mobile-optimized & fast loading", plan_go_f3: "Google Maps (MEO) setup", plan_go_f4: "Branded QR code menu", plan_go_f5: "1 language (EN or JP)", plan_go_f6: "30-day post-launch support",
    popular_badge: "⭐ Most Popular", plan_build_name: "Build & Grow", plan_build_tagline: "For foreign businesses entering Japan", plan_build_note: "One-time + optional retainer · Delivered in 3–4 weeks", plan_build_f1: "Full website (up to 5 pages)", plan_build_f2: "Bilingual content (EN + JP)", plan_build_f3: "Google Maps (MEO) optimization", plan_build_f4: "SNS profile setup (IG + FB)", plan_build_f5: "1 month content management", plan_build_f6: "60-day support",
    plan_full_name: "Full Digital", plan_full_tagline: "For ambitious transformation", plan_full_note: "One-time payment · Delivered in 4–6 weeks", plan_full_f1: "Corporate website (unlimited pages)", plan_full_f2: "Trilingual support (EN + JP + NP)", plan_full_f3: "Full MEO + local SEO strategy", plan_full_f4: "E-commerce or booking integration", plan_full_f5: "Digital workflow audit & automation", plan_full_f6: "3 months SNS management", plan_full_f7: "Priority support",
    monthly_label: "Monthly Plans", monthly_sub_label: "Monthly Subscriptions", monthly_heading: "Keep Growing Every Month", monthly_subheading: "Add ongoing content, management, and SEO retainer services on top of any one-time plan — or subscribe standalone.",
    sub1_name: "SNS Essentials", sub1_desc: "Perfect for businesses that just launched and need a consistent social presence.", sub1_period: "Billed monthly · Cancel anytime", sub1_f1: "8 posts/month (IG or FB)", sub1_f2: "Caption writing (EN or JP)", sub1_f3: "Monthly performance report", sub1_f4: "Story updates (4/month)",
    sub2_name: "Growth Retainer", sub2_desc: "Full-service monthly management: content, SEO, and map optimization to keep traffic growing.", sub2_period: "Billed monthly · Cancel anytime", sub2_f1: "16 posts/month (IG + FB)", sub2_f2: "Bilingual captions (EN + JP)", sub2_f3: "MEO monthly optimization", sub2_f4: "Google profile updates", sub2_f5: "Weekly performance report", sub2_f6: "1 reel or short video/month",
    sub3_name: "Full Digital Partner", sub3_desc: "Your outsourced digital team — strategy, content, SEO, and website updates every month.", sub3_period: "Billed monthly · Cancel anytime", sub3_f1: "Unlimited posts across all platforms", sub3_f2: "Trilingual content (EN + JP + NP)", sub3_f3: "Monthly website updates (up to 4)", sub3_f4: "Full MEO + local SEO management", sub3_f5: "4 reels or short videos/month", sub3_f6: "Dedicated account manager", sub3_f7: "Priority response within 4hrs",
    addons_divider: "Add-Ons", addons_label: "Add-Ons", addons_heading: "Enhance Your Plan", addons_sub: "Stack these on top of any one-time or monthly plan to get exactly what your business needs.",
    addon1_name: "Extra Page", addon1_desc: "Add an additional page to your website (About, Menu, Services, etc.).", addon1_tag: "One-time",
    addon2_name: "Extra Language", addon2_desc: "Add a full translation layer to your site in EN, JP, or Nepali.", addon2_tag: "One-time",
    addon3_name: "Content Shoot", addon3_desc: "Professional photo/video session for social media and website content.", addon3_tag: "One-time",
    addon4_name: "MEO Boost", addon4_desc: "Ongoing Google Maps ranking optimization and review management.", addon4_tag: "Monthly",
    addon5_name: "E-Commerce Setup", addon5_desc: "Add an online shop or booking system to your existing website.", addon5_tag: "One-time",
    addon6_name: "Reel / Short Video", addon6_desc: "Professionally edited short-form video for Instagram Reels or TikTok.", addon6_tag: "Per video",
    addon7_name: "Email Newsletter", addon7_desc: "Monthly newsletter designed and sent to your customer list.", addon7_tag: "Monthly",
    addon8_name: "QR Menu Update", addon8_desc: "Update your digital menu content anytime — seasonal, new items, price changes.", addon8_tag: "Per update",
    plan1_title: "📱 SNS Essentials", plan1_sub: "Social media foundation", plan1_desc: "Perfect for businesses wanting to establish a strong social media presence with consistent, professional content.",
    plan1_f1: "8 posts per month", plan1_f2: "Story management & reels", plan1_f3: "Monthly performance report", plan1_f4: "Community engagement support", plan1_f5: "1 platform (Instagram/Facebook)",
    plan2_title: "🚀 Growth Retainer", plan2_sub: "Comprehensive growth solution", plan2_desc: "Our most popular plan. Grow fast with bilingual content, MEO optimization, and professional reel management.",
    plan2_f1: "16 posts per month", plan2_f2: "Bilingual content (EN + JP)", plan2_f3: "MEO (Google Maps) optimization", plan2_f4: "Reel & short video production", plan2_f5: "Monthly analytics & strategy", plan2_f6: "Multiple platform management",
    plan3_title: "🌐 Full Digital Partner", plan3_sub: "Unlimited growth & management", plan3_desc: "Full-service partnership. Unlimited posts, trilingual content, website updates, dedicated account manager, and complete digital ecosystem.",
    plan3_f1: "Unlimited posts & content", plan3_f2: "Trilingual content (EN+JP+NP)", plan3_f3: "Weekly site updates", plan3_f4: "Dedicated account manager", plan3_f5: "Advanced SEO & MEO strategy", plan3_f6: "All platform management", plan3_f7: "Priority support",
    plan_cta: "Get Started →",
    addons_title: "Boost Your Plan with Add-Ons", addons_sub: "Available for any subscription plan — pay per add-on, per month.",
    addon1_name: "Extra Page", addon1_desc: "Additional landing or service page on your website",
    addon2_name: "Extra Language", addon2_desc: "Add trilingual support to your plan",
    addon3_name: "Content Shoot", addon3_desc: "Professional photo/video shoot for content",
    addon4_name: "MEO Boost", addon4_desc: "Enhanced Google Maps optimization & local SEO",
    addon5_name: "E-Commerce Setup", addon5_desc: "Shopify/WooCommerce integration & management",
    addon6_name: "Reel/Short Video", addon6_desc: "Professional short videos for TikTok & Instagram",
    addon7_name: "Email Newsletter", addon7_desc: "Monthly email campaigns & subscriber management",
    addon8_name: "QR Menu Update", addon8_desc: "Branded QR menu updates & redesigns",
    contact_label: "Get In Touch", contact_title: "Let's Start Your Digital Journey",
    contact_sub: "Ready to go digital? We'll get back to you within 24 hours.",
    cm_fb: "Facebook", cm_li: "LinkedIn", cm_ig: "Instagram", cm_email: "Email",
    form_title: "Apply Now — It's Free",
    form_note: "Please fill out the form and we’ll get back to you promptly.",
    form_note_success: "We received your message and will reply within 24 hours.",
    form_title_success: "स्मार्ट सोच, डिजिटल सुरुवात!\nStart smart. Start digital.\nスマート始動。デジタル始動",
    form_name: "Your Name", form_email: "Email Address", form_service: "Service Interested In",
    form_select: "Select a service...", form_opt1: "Website Development",
    form_opt2: "SNS Management", form_opt3: "Digital Transformation", form_opt4: "All Services",
    form_msg: "Message", form_submit: "Send Message →",
    form_success: "✅ Message sent! We'll be in touch within 24 hours.",
    footer_tagline: "Start smart. Start digital. Your trusted partner in digital transformation.",
    footer_nav: "Navigation", footer_services: "Services", footer_lang: "Languages",
    blog_label: "Our Blog", blog_title: "Latest Insights", blog_sub: "Tips, strategies, and stories to help your business thrive in the digital world.",
    blog_page_title: "Insights & Tips", blog_page_sub: "Practical guides, digital strategies, and stories to help your business grow online.",
    blog_readmore: "Read More →",
    blog_tag_digital: "Digital Tips", blog_tag_seo: "SEO & MEO", blog_tag_sns: "SNS Growth",
    blog_post1_title: "Why Every Small Business Needs a Website in 2026", blog_post1_excerpt: "Discover why having a professional website is no longer optional and how it can transform your customer reach...",
    blog_post2_title: "Google Maps SEO: The Complete MEO Guide for Japan", blog_post2_excerpt: "Learn how Map Engine Optimization can put your business on the map — literally — and drive local foot traffic...",
    blog_post3_title: "5 Instagram Strategies That Actually Work for Restaurants", blog_post3_excerpt: "From reels to stories, learn proven tactics that restaurants in Japan are using to boost engagement and orders..."
    blog_post4_title: "Digital Transformation: From Fax to Fast — A Japan Business Guide", blog_post4_excerpt: "Many Japanese businesses still rely on fax and paper. Here's how to modernize without disrupting your operations...", blog_post4_tag: "Marketing",
    blog_post5_title: "QR Code Menus: Why Every Restaurant Should Switch Now", blog_post5_excerpt: "QR menus are fast, hygienic, and cost-effective. Learn how to implement them the right way for your restaurant...", blog_post5_tag: "Business Tips",
    blog_post6_title: "Why Multilingual Websites Win in Japan's International Market", blog_post6_excerpt: "Japan's business landscape is increasingly international. A multilingual website opens doors to customers worldwide...", blog_post6_tag: "Multilingual",
  },

  jp: {
    nav_home: "ホーム", nav_services: "サービス", nav_pricing: "価格", nav_about: "私たちについて",
    nav_faq: "よくある質問", nav_contact: "お問い合わせ", nav_cta: "今すぐ申し込む →",
    nav_blog: "ブログ",
    pricing_label: "透明な価格設定",
    pricing_heading: "シンプルなプラン、確かな成果",
    pricing_subheading: "隠れた料金はありません。驚きはありません。通貨を選択してデジタルプレゼンスを今日開始してください。",
    plan_go_name: "デジタル化を進める",
    plan_go_tagline: "ショップ・小規模ビジネス向け",
    plan_go_note: "1回払い · 1–2週間で納品",
    plan_go_f1: "プロフェッショナルなランディングページ (1ページ)",
    plan_go_f2: "モバイル最適化 & 高速読み込み",
    plan_go_f3: "Google Maps (MEO) セットアップ",
    plan_go_f4: "ブランドQRコードメニュー",
    plan_go_f5: "1言語 (ENまたはJP)",
    plan_go_f6: "30日間アフターサポート",
    plan_build_name: "構築 & 成長",
    plan_build_tagline: "日本進出の外国人ビジネス向け",
    plan_build_note: "1回払い + オプションリテナー · 3–4週間で納品",
    plan_build_f1: "フルウェブサイト (最大5ページ)",
    plan_build_f2: "バイリンガルコンテンツ (EN + JP)",
    plan_build_f3: "Google Maps (MEO) 最適化",
    plan_build_f4: "SNSプロフィールセットアップ (IG + FB)",
    plan_build_f5: "1ヶ月コンテンツ管理",
    plan_build_f6: "60日間サポート",
    plan_full_name: "フルデジタル",
    plan_full_tagline: "野心的なトランスフォーメーション向け",
    plan_full_note: "1回払い · 4–6週間で納品",
    plan_full_f1: "コーポレートウェブサイト (無制限ページ)",
    plan_full_f2: "トリリンガルサポート (EN + JP + NP)",
    plan_full_f3: "フルMEO + ローカルSEO戦略",
    plan_full_f4: "Eコマースまたは予約統合",
    plan_full_f5: "デジタルワークフロー監査 & 自動化",
    plan_full_f6: "3ヶ月SNS管理",
    plan_full_f7: "優先サポート",
    popular_badge: "⭐ 最も人気",
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
    svc4_title: "MEO + QRコードメニュー + SNS連携",
    svc4_desc: "Googleマップのボタンを最適化して新しいランディングページに誘導し、ブランドQRテーブルメニューを生成し、InstagramとSNSを高速サイトと連携させます。",
    svc4_t1: "Googleマップ注文", svc4_t2: "ブランドQRメニュー", svc4_t3: "Instagram/SNS",
    svc4_footer: "MEO + QRメニュー + SNS連携",
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
    faq7_q: "MEO（マップエンジン最適化）とは何ですか？",
    faq7_a: "MEOはあなたのビジネスがGoogleマップ上で表示・最適化されることを確保します。『注文』ボタンを設定して顧客をランディングページに直接誘導し、注文数とエンゲージメントを増加させます。",
    faq8_q: "QRコードメニューはビジネスにどのように役立ちますか？",
    faq8_a: "テーブルテントやディスプレイ上のブランドQRコードにより、顧客はデジタルメニューやサービスに瞬時にアクセスできます。高速で接触不要、サイトへのトラフィックを増加させます。レストラン、カフェ、サービス業に最適です。",
    faq9_q: "InstagramとSNSをどのように統合しますか？",
    faq9_a: "InstagramプロフィールのバイオとSNSチャネルをあなたの新しいランディングページに直接リンクし、すべての顧客インタクションの一元化ハブを作成します。1つのリンクで顧客をウェブサイト、サービス、ソーシャルチャネルに導きます。",
    monthly_label: "月額プラン", monthly_heading: "毎月成長を続ける", monthly_subheading: "1回限りのプランに継続的なコンテンツ、管理、SEOリテナーサービスを追加 — またはスタンドアローンで購読。",
    sub1_name: "SNS Essentials", sub1_desc: "一貫した専門的なコンテンツで強いSNSプレゼンスを構築したい事業者向け。",
    sub1_f1: "月8投稿", sub1_f2: "ストーリー & リール管理", sub1_f3: "月次パフォーマンスレポート", sub1_f4: "コミュニティ管理サポート", sub1_f5: "1プラットフォーム（Instagram/Facebook）",
    sub2_name: "Growth Retainer", sub2_desc: "最も人気のプラン。二言語対応、MEO最適化、プロ級リール制作で高速成長。",
    sub2_f1: "月16投稿", sub2_f2: "二言語コンテンツ（EN+JP）", sub2_f3: "MEO（Googleマップ）最適化", sub2_f4: "リール・ショート動画制作", sub2_f5: "月次分析&戦略", sub2_f6: "複数プラットフォーム管理",
    sub3_name: "Full Digital Partner", sub3_desc: "フルサービスパートナーシップ。無制限投稿、三言語対応、サイト更新、専任マネージャー。",
    sub3_f1: "無制限投稿&コンテンツ", sub3_f2: "三言語コンテンツ（EN+JP+NP）", sub3_f3: "週次サイト更新", sub3_f4: "専任アカウントマネージャー", sub3_f5: "高度なSEO&MEO戦略", sub3_f6: "全プラットフォーム管理", sub3_f7: "優先サポート",
    plan_cta: "申し込む →",
    addons_divider: "アドオン", addons_label: "アドオン", addons_heading: "あなたのプランを強化", addons_sub: "どのプランにも追加可能 — 月単位でお支払い。",
    addon1_name: "追加ページ", addon1_desc: "ウェブサイトに別のランディング・サービスページを追加",
    addon2_name: "追加言語", addon2_desc: "あなたのプランに三言語対応を追加",
    addon3_name: "コンテンツシュート", addon3_desc: "プロフェッショナルな写真・動画撮影",
    addon4_name: "MEO Boost", addon4_desc: "Googleマップ最適化とローカルSEO強化",
    addon5_name: "Eコマース構築", addon5_desc: "Shopify/WooCommerce統合＆管理",
    addon6_name: "リール/ショート動画", addon6_desc: "TikTok&Instagram向けプロ動画制作",
    addon7_name: "メールニュースレター", addon7_desc: "月次メールキャンペーン＆購読者管理",
    addon8_name: "QRメニュー更新", addon8_desc: "QRメニューの更新＆リデザイン",
    contact_label: "お問い合わせ", contact_title: "デジタルの旅を始めましょう",
    contact_sub: "デジタル化の準備ができたら、24時間以内にご返答します。",
    cm_fb: "フェイスブック", cm_li: "LinkedIn", cm_ig: "インスタグラム", cm_email: "メール",
    form_title: "今すぐ申し込む — 無料",
    form_note: "ご記入ありがとうございました。24時間以内にご返信いたします。",
    form_title_success: "スマート始動。デジタル始動",
    form_name: "お名前", form_email: "メールアドレス", form_service: "ご希望のサービス",
    form_select: "サービスを選択...", form_opt1: "ウェブサイト制作",
    form_opt2: "SNS管理", form_opt3: "デジタルトランスフォーメーション", form_opt4: "すべてのサービス",
    form_msg: "メッセージ", form_submit: "送信する →",
    form_success: "✅ 送信完了！24時間以内にご連絡します。",
    footer_tagline: "スマートに始め、デジタルに始める。デジタルトランスフォーメーションの信頼できるパートナー。",
    footer_nav: "ナビゲーション", footer_services: "サービス", footer_lang: "言語",
    blog_label: "ブログ", blog_title: "最新の情報", blog_sub: "デジタル世界でビジネスを成功させるためのヒント、戦略、ストーリー。",
    blog_page_title: "インサイト＆ヒント", blog_page_sub: "実践的なガイド、デジタル戦略、オンラインビジネス成長のためのストーリー。",
    blog_readmore: "もっと読む →",
    blog_tag_digital: "デジタルヒント", blog_tag_seo: "SEO & MEO", blog_tag_sns: "SNS成長",
    blog_post1_title: "2026年にすべての中小企業がウェブサイトを必要とする理由", blog_post1_excerpt: "プロフェッショナルなウェブサイトがもはやオプションではない理由と、顧客リーチを変革する方法を発見...",
    blog_post2_title: "Googleマップ SEO：日本のためのMEO完全ガイド", blog_post2_excerpt: "マップエンジン最適化があなたのビジネスを地図上に載せ、地元の来店を促進する方法を学ぶ...",
    blog_post3_title: "レストランに本当に効く5つのInstagram戦略", blog_post3_excerpt: "リールからストーリーまで、日本のレストランがエンゲージメントと注文を増やすために使っている実証済みの戦術..."
    blog_post4_title: "デジタルトランスフォーメーション：ファックスから高速へ — 日本ビジネスガイド", blog_post4_excerpt: "多くの日本企業はいまだにファックスや紙に頼っています。業務を妨げずに近代化する方法はこちら...", blog_post4_tag: "マーケティング",
    blog_post5_title: "QRコードメニュー：すべてのレストランが今すぐ切り替えるべき理由", blog_post5_excerpt: "QRメニューは速く、衛生的で、コスト効率も抜群。正しい導入方法を学びましょう...", blog_post5_tag: "ビジネスヒント",
    blog_post6_title: "多言語ウェブサイトが日本の国際市場で勝つ理由", blog_post6_excerpt: "日本のビジネス環境はますます国際的に。多言語ウェブサイトは世界中の顧客への扉を開きます...", blog_post6_tag: "多言語対応",
  },

  np: {
    nav_home: "होम", nav_services: "सेवाहरू", nav_pricing: "मूल्य", nav_about: "हाम्रो बारे",
    nav_faq: "प्रश्नहरू", nav_contact: "सम्पर्क", nav_cta: "अहिले आवेदन गर्नुहोस् →",
    nav_blog: "ब्लग",
    pricing_label: "पारदर्शी मूल्य निर्धारण",
    pricing_heading: "सरल योजनाहरू, वास्तविक परिणामहरू",
    pricing_subheading: "लुकेका शुल्कहरू छैनन्। आश्चर्यहरू छैनन्। आफ्नो मुद्रा छान्नुहोस् र आज आफ्नो डिजिटल उपस्थिति सुरु गर्नुहोस्।",
    plan_go_name: "डिजिटल बन्नुहोस्",
    plan_go_tagline: "पसलहरू र साना व्यवसायहरूका लागि",
    plan_go_note: "एक पटकको भुक्तानी · १–२ हप्तामा वितरण",
    plan_go_f1: "पेशेवर ल्यान्डिङ पेज (१ पेज)",
    plan_go_f2: "मोबाइल-अनुकूलित र छिटो लोडिङ",
    plan_go_f3: "Google Maps (MEO) सेटअप",
    plan_go_f4: "ब्र्यान्डेड QR कोड मेनु",
    plan_go_f5: "१ भाषा (EN वा JP)",
    plan_go_f6: "३०-दिन पोष्ट-लन्च समर्थन",
    plan_build_name: "निर्माण र वृद्धि",
    plan_build_tagline: "जापान प्रवेश गर्ने विदेशी व्यवसायहरूका लागि",
    plan_build_note: "एक पटक + वैकल्पिक रिटेनर · ३–४ हप्तामा वितरण",
    plan_build_f1: "पूर्ण वेबसाइट (अधिकतम ५ पेजहरू)",
    plan_build_f2: "द्विभाषिक सामग्री (EN + JP)",
    plan_build_f3: "Google Maps (MEO) अनुकूलन",
    plan_build_f4: "SNS प्रोफाइल सेटअप (IG + FB)",
    plan_build_f5: "१ महिना सामग्री व्यवस्थापन",
    plan_build_f6: "६०-दिन समर्थन",
    plan_full_name: "पूर्ण डिजिटल",
    plan_full_tagline: "महत्वाकांक्षी ट्रान्सफर्मेशनका लागि",
    plan_full_note: "एक पटकको भुक्तानी · ४–६ हप्तामा वितरण",
    plan_full_f1: "कर्पोरेट वेबसाइट (असीमित पेजहरू)",
    plan_full_f2: "त्रिभाषिक समर्थन (EN + JP + NP)",
    plan_full_f3: "पूर्ण MEO + स्थानीय SEO रणनीति",
    plan_full_f4: "ई-कमर्स वा बुकिङ एकीकरण",
    plan_full_f5: "डिजिटल कार्यप्रवाह लेखापरीक्षण र स्वचालन",
    plan_full_f6: "३ महिना SNS व्यवस्थापन",
    plan_full_f7: "प्राथमिकता समर्थन",
    popular_badge: "⭐ सबैभन्दा लोकप्रिय",
    hero_badge: "डिजिटल मार्केटिङ एजेन्सी",
    hero_title_1: "हामी मद्दत गर्छौं", hero_title_2: "डिजिटल बन्न",
    hero_sub: "दशकौँको भरोसालाई अब प्रविधिसँग जोडौँ। तपाईंको पुरानो व्यवसायलाई वेबसाइट र डिजिटल माध्यमबाट नयाँ उचाइमा पुर्‍याउने जिम्मा हाम्रो। आउनुहोस्, सँगै डिजिटल यात्रा सुरु गरौँ।",
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
    svc4_title: "MEO + QR कोड मेनु + SNS एकीकरण",
    svc4_desc: "हजुरको Google मानचित्र बटनलाई हजुरको नयाँ ल्यान्डिङ पेजमा निर्देशित गर्नुहोस्, ब्र्यान्डेड QR टेबल मेनु उत्पन्न गर्नुहोस्, र हजुरको Instagram/SNS लाई हजुरको छिटो साइटसँग जोड्नुहोस्।",
    svc4_t1: "Google Maps अर्डर", svc4_t2: "ब्र्यान्डेड QR मेनु", svc4_t3: "Instagram/SNS",
    svc4_footer: "MEO + QR मेनु + SNS लिङ्क",
    about_label: "हाम्रो बारे", about_title: "DIGIस्टार्टको बारे",
    about_sub: "हामी बहुभाषी डिजिटल मार्केटिङ एजेन्सी हौं जसले व्यवसायलाई डिजिटल दुनियामा प्रवेश गर्न सहयोग गर्छ।",
    about_tagline_1: "स्मार्ट सोच, डिजिटल सुरुवात!", about_tagline_2: "हामीलाई थाहा छ, अनुभव अमूल्य हुन्छ।",
    about_card_desc: "त्यसैले तपाईंको दशकौँको अनुभवलाई डिजिटल उचाइ दिन DIGIスタート को जन्म भएको हो। हाम्रो एउटै उद्देश्य छ—हरेक व्यवसायलाई वेबसाइट र सोसल मिडियाको माध्यमबाट आधुनिक र सफल बनाउनु।",
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
    faq7_q: "MEO (म्यास इञ्जिन अप्टिमाइजेशन) भनेको के हो?",
    faq7_a: "MEO ले हजुरको व्यवसायलाई Google Maps मा दृश्यमान र अप्टिमाइज गर्छ। हामी हजुरको 'अर्डर' बटन सेटअप गरी ग्राहकहरूलाई सिधै हजुरको ल्यान्डिङ पेजमा पठाउँछौं, जसले अर्डर र संलग्नता बढाउँछ।",
    faq8_q: "QR कोड मेनु मेरो व्यवसायलाई कसरी मद्दत गर्छ?",
    faq8_a: "टेबल टेन्ट वा डिस्प्लेमा राखिएको ब्र्यान्डेड QR कोडले ग्राहकहरूलाई तपाईंको डिजिटल मेनु वा सेवाहरूमा तुरन्त पहुँच गर्न दिन्छ। यो छिटो, संपर्कमुक्त, र तपाईंको साइटमा ट्राफिक बढाउँछ—रेस्टुरेन्ट, क्याफे र सेवा व्यवसायका लागि आदर्श।",
    faq9_q: "तपाई Instagram र SNS लाई कसरी एकीकृत गर्नुहुन्छ?",
    faq9_a: "हामी तपाईंको Instagram प्रोफाइल बायो र SNS चनलहरूलाई तपाईंको नयाँ ल्यान्डिङ पेजमा सिधै लिङ्क गर्छौं, सबै ग्राहक अन्तरक्रियाको लागि एकल हब बनाइएको। एक लिङ्कले ग्राहकहरूलाई तपाईंको वेबसाइट, सेवा र सोशल च्यानलमा गाइड गर्छ।",
    monthly_label: "मासिक योजनाहरू", monthly_heading: "हरेक महिना बढिरहनुहोस्", monthly_subheading: "कुनै पनि एक-समय योजना माथि निरन्तर सामग्री, व्यवस्थापन, र SEO रिटेनर सेवाहरू थप्नुहोस् — वा स्ट्यान्डअलोन सदस्यता लिनुहोस्।",
    sub1_name: "SNS Essentials", sub1_desc: "सुसंगत, पेशेवर सामग्रीसँग बलियो SNS उपस्थिति स्थापन गर्न चाहने व्यवसायका लागि।",
    sub1_f1: "प्रति महिना 8 पोस्ट", sub1_f2: "कथा र रील व्यवस्थापन", sub1_f3: "मासिक कार्यक्षमता रिपोर्ट", sub1_f4: "समुदाय संलग्नता समर्थन", sub1_f5: "1 प्लेटफर्म (Instagram/Facebook)",
    sub2_name: "Growth Retainer", sub2_desc: "सबैभन्दा लोकप्रिय योजना। द्विभाषिक सामग्री, MEO अनुकूलन, र पेशेवर रील उत्पादनसँग छिटो बढाउनुहोस्।",
    sub2_f1: "प्रति महिना 16 पोस्ट", sub2_f2: "द्विभाषिक सामग्री (EN + JP)", sub2_f3: "MEO (Google Maps) अनुकूलन", sub2_f4: "रील र ショートभिडिओ उत्पादन", sub2_f5: "मासिक विश्लेषण र रणनीति", sub2_f6: "बहु-प्लेटफर्म व्यवस्थापन",
    sub3_name: "Full Digital Partner", sub3_desc: "पूर्ण सेवा साझेदारिता। असीमित पोस्ट, त्रिभाषिक सामग्री, साइट अपडेट, समर्पित खाता प्रबंधक।",
    sub3_f1: "असीमित पोस्ट र सामग्री", sub3_f2: "त्रिभाषिक सामग्री (EN+JP+NP)", sub3_f3: "साप्ताहिक साइट अपडेट", sub3_f4: "समर्पित खाता प्रबंधक", sub3_f5: "उन्नत SEO र MEO रणनीति", sub3_f6: "सबै प्लेटफर्म व्यवस्थापन", sub3_f7: "प्राथमिकता समर्थन",
    plan_cta: "सुरु गर्नुहोस् →",
    addons_divider: "अनुगमनहरू", addons_label: "अनुगमनहरू", addons_heading: "तपाईंको योजना बढाउनुहोस्", addons_sub: "कुनै पनि सदस्यता योजनामा उपलब्ध — प्रति अनुगमन, प्रति महिना भुक्तानी गर्नुहोस्।",
    addon1_name: "अतिरिक्त पृष्ठ", addon1_desc: "तपाईंको वेबसाइटमा अतिरिक्त ल्यान्डिङ वा सेवा पृष्ठ",
    addon2_name: "अतिरिक्त भाषा", addon2_desc: "तपाईंको योजनामा त्रिभाषिक समर्थन थप्नुहोस्",
    addon3_name: "सामग्री शूट", addon3_desc: "सामग्रीको लागि पेशेवर फोटो/भिडिओ शूट",
    addon4_name: "MEO Boost", addon4_desc: "गहिराइ Googleमानचित्र अनुकूलन र स्थानीय SEO",
    addon5_name: "ई-कमर्स सेटअप", addon5_desc: "Shopify/WooCommerce एकीकरण र व्यवस्थापन",
    addon6_name: "रील/छोटो भिडिओ", addon6_desc: "TikTok र Instagram का लागि पेशेवर ভिडिও",
    addon7_name: "ईमेल न्यूजलेटर", addon7_desc: "मासिक ईमेल अभियान र ग्राहक व्यवस्थापन",
    addon8_name: "QR मेनु अपडेट", addon8_desc: "ब्र्यान्डेड QR मेनु अपडेट र पुनः डिजाइन",
    contact_label: "सम्पर्क", contact_title: "तपाईंको डिजिटल यात्रा सुरु गरौं",
    contact_sub: "डिजिटल बन्न तयार? हामी २४ घण्टाभित्र जवाफ दिनेछौं।",
    cm_fb: "फेसबुक", cm_li: "LinkedIn", cm_ig: "इन्स्टाग्राम", cm_email: "इमेल",
    form_title: "अहिले आवेदन गर्नुहोस् — निःशुल्क",
    form_note: "कृपया फारम पूरा गर्नुहोस्, हामी छिट्टै जवाफ दिनेछौं।",
    form_note_success: "हामीले तपाईंको सन्देश प्राप्त गर्यौं र २४ घण्टाभित्र जवाफ दिनेछौं।",
    form_title_success: "धन्यवाद! हामीले तपाईंको सन्देश प्राप्त गरेका छौं र २४ घण्टाभित्र सम्पर्क गर्नेछौं।",
    form_name: "तपाईंको नाम", form_email: "इमेल ठेगाना", form_service: "रुचि राखेको सेवा",
    form_select: "सेवा छान्नुहोस्...", form_opt1: "वेबसाइट विकास",
    form_opt2: "SNS व्यवस्थापन", form_opt3: "डिजिटल ट्रान्सफर्मेशन", form_opt4: "सबै सेवाहरू",
    form_msg: "सन्देश", form_submit: "सन्देश पठाउनुहोस् →",
    form_success: "✅ सन्देश पठाइयो! हामी २४ घण्टाभित्र सम्पर्क गर्नेछौं।",
    footer_tagline: "स्मार्ट सुरु। डिजिटल सुरु। डिजिटल ट्रान्सफर्मेशनमा तपाईंको विश्वसनीय साझेदार।",
    footer_nav: "नेभिगेशन", footer_services: "सेवाहरू", footer_lang: "भाषाहरू",
    blog_label: "ब्लग", blog_title: "नवीनतम जानकारी", blog_sub: "डिजिटल संसारमा तपाईंको व्यवसायलाई सफल बनाउन सुझावहरू, रणनीतिहरू, र कथाहरू।",
    blog_page_title: "अन्तर्दृष्टि र सुझावहरू", blog_page_sub: "व्यावहारिक गाइडहरू, डिजिटल रणनीतिहरू, र तपाईंको व्यवसाय अनलाइन बढाउन कथाहरू।",
    blog_readmore: "थप पढ्नुहोस् →",
    blog_tag_digital: "डिजिटल सुझाव", blog_tag_seo: "SEO र MEO", blog_tag_sns: "SNS वृद्धि",
    blog_post1_title: "2026 मा हरेक साना व्यवसायलाई वेबसाइट किन चाहिन्छ", blog_post1_excerpt: "पेशेवर वेबसाइट अब वैकल्पिक नभएको र यसले तपाईंको ग्राहक पहुँच कसरी रूपान्तरण गर्न सक्छ भनेर पत्ता लगाउनुहोस्...",
    blog_post2_title: "Google Maps SEO: जापानको लागि पूर्ण MEO गाइड", blog_post2_excerpt: "म्याप इन्जिन अप्टिमाइजेसनले तपाईंको व्यवसायलाई नक्सामा कसरी राख्न सक्छ र स्थानीय पैदल ट्राफिक कसरी बढाउन सक्छ भनेर सिक्नुहोस्...",
    blog_post3_title: "रेस्टुरेन्टहरूका लागि वास्तवमै काम गर्ने 5 Instagram रणनीतिहरू", blog_post3_excerpt: "रिल्सदेखि स्टोरीहरूसम्म, जापानका रेस्टुरेन्टहरूले सगाई र अर्डरहरू बढाउन प्रयोग गरिरहेका प्रमाणित रणनीतिहरू सिक्नुहोस्..."
    blog_post4_title: "डिजिटल रूपान्तरण: फ्याक्सबाट फास्टसम्म — जापान व्यापार गाइड", blog_post4_excerpt: "धेरै जापानी व्यवसायहरू अझै फ्याक्स र कागजमा निर्भर छन्। आफ्नो अपरेशनलाई अवरोध नगरी कसरी आधुनिकीकरण गर्ने...", blog_post4_tag: "मार्केटिङ",
    blog_post5_title: "QR कोड मेनु: किन प्रत्येक रेस्टुरेन्टले अहिले नै स्विच गर्नुपर्छ", blog_post5_excerpt: "QR मेनु छिटो, सफा र लागत-कुशल छन्। आफ्नो रेस्टुरेन्टका लागि यसलाई सही तरिकाले लागू गर्ने तरिका जान्नुहोस्...", blog_post5_tag: "व्यापार सुझाव",
    blog_post6_title: "बहुभाषिक वेबसाइटहरू जापानको अन्तर्राष्ट्रिय बजारमा किन जित्छन्", blog_post6_excerpt: "जापानको व्यापार परिदृश्य बढ्दो अन्तर्राष्ट्रिय छ। बहुभाषिक वेबसाइटले विश्वभरका ग्राहकहरूलाई ढोका खोल्छ...", blog_post6_tag: "बहुभाषिक",
  }
};

let currentLang = localStorage.getItem('lang') || 'jp';
let currentCurrency = 'jpy';

// ── LANGUAGE SWITCHER ─────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  // Update all text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t && t[key];
    if (val) {
      try {
        // Use innerHTML for content that may contain HTML tags, textContent otherwise
        if (val.includes('<')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      } catch (e) { /* silent – don't break the loop */ }
    }
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const map = { en: 'EN', jp: 'JP', np: 'नेपाली' };
    if (btn.textContent.trim() === map[lang]) btn.classList.add('active');
  });
  setCurrency(currentCurrency);
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
async function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields before sending.');
    return false;
  }

  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.disabled = true;

  const successMessages = {
    en: "Thank you! We’ve received your message and will contact you within 24 hours. Let's start your digital journey!",
    jp: "送信ありがとうございました！ 内容を確認し、24時間以内にご連絡いたします。ビジネスのデジタル化を全力でサポートします。",
    np: "धन्यवाद! हामीले तपाईंको सन्देश प्राप्त गरेका छौं र २४ घण्टा भित्र सम्पर्क गर्नेछौं। तपाईंको डिजिटल यात्रा सुरु गरौं!"
  };

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });

    if (response.ok) {
      form.reset();
      form.style.display = 'none';
      success.classList.add('show');
      success.textContent = successMessages[currentLang] || successMessages.en;
      success.style.display = 'block';

      const formTitle = document.querySelector('.form-title');
      const formNote = document.getElementById('formNote');

      if (formTitle) {
        formTitle.textContent = translations[currentLang]?.form_title_success || translations.en.form_title_success;
      }
      if (formNote) {
        formNote.textContent = translations[currentLang]?.form_note_success || translations.en.form_note_success || translations[currentLang]?.form_note || translations.en.form_note;
      }

      setTimeout(() => {
        success.classList.remove('show');
      }, 2500);

      return false;
    }

    const errorData = await response.json();
    alert('Oops! There was a problem submitting your form.');
    console.error(errorData);
  } catch (error) {
    alert('Network error: unable to send message.');
    console.error(error);
  } finally {
    submitButton.disabled = false;
  }

  return false;
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

// ── PRICING CURRENCY SWITCHER ─────────────────────────────────
const currencyRates = { jpy: 1, usd: 0.0067 };
const pricingData = { 
  plan1: 18000, 
  plan2: 38000, 
  plan3: 78000,
  addon1: 5000,
  addon2: 8000,
  addon3: 12000,
  addon4: 6000,
  addon5: 15000,
  addon6: 7000,
  addon7: 4000,
  addon8: 3000
};

function formatPrice(value, currency) {
  if (currency === 'usd') return `$${(Math.round(value * currencyRates.usd)).toLocaleString('en-US')}`;
  return `¥${value.toLocaleString('ja-JP')}`;
}

function setCurrency(currency) {
  currentCurrency = currency;
  document.body.classList.toggle('usd', currency === 'usd');
  document.getElementById('btn-jpy')?.classList.toggle('active', currency === 'jpy');
  document.getElementById('btn-usd')?.classList.toggle('active', currency === 'usd');
}

window.addEventListener('DOMContentLoaded', () => {
  setLang(localStorage.getItem('lang') || 'jp');
  setCurrency('jpy');
  document.getElementById('btn-jpy')?.addEventListener('click', () => setCurrency('jpy'));
  document.getElementById('btn-usd')?.addEventListener('click', () => setCurrency('usd'));
});

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

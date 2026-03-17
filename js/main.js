/* ============================================================
   DIGIスタート — Main JavaScript
   js/main.js
   ============================================================ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const translations = {
  en: {
    nav_home: "Home", nav_services: "Services", nav_pricing: "Pricing", nav_about: "About",
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
    price_label: "Transparent Pricing", price_title: "Simple Plans, Real Results", price_sub: "No hidden fees, no surprises. Pick JPY or USD and see instantly updated pricing.",
    plan1_title: "🌐 Go Digital", plan1_sub: "For shops & small businesses", plan1_desc: "Perfect for small shops, cafes, or solo businesses that need a fast, clean digital launch — website live and Google Maps optimized.",
    plan1_f1: "Professional landing page (1 page)", plan1_f2: "Mobile-optimized & fast loading", plan1_f3: "Google Maps (MEO) setup", plan1_f4: "Branded QR code menu", plan1_f5: "1 language (EN or JP)", plan1_f6: "Delivered in 1–2 weeks", plan1_f7: "30-day post-launch support",
    plan2_title: "📱 Build & Grow", plan2_sub: "For foreign businesses entering Japan", plan2_desc: "The complete package for foreign businesses entering Japan or expats ready to get serious. Website, SNS, and Maps — all connected and live.",
    plan2_f1: "Full website (up to 5 pages)", plan2_f2: "Bilingual content (EN + JP)", plan2_f3: "Google Maps (MEO) optimization", plan2_f4: "SNS profile setup (IG + FB)", plan2_f5: "1 month content management", plan2_f6: "Delivered in 3–4 weeks", plan2_f7: "60-day support",
    plan3_title: "⚡ Full Digital", plan3_sub: "For ambitious transformation", plan3_desc: "End-to-end digital transformation for businesses replacing fax and paper workflows with modern digital systems. Built for serious growth.",
    plan3_f1: "Corporate website (unlimited pages)", plan3_f2: "Trilingual support (EN + JP + NP)", plan3_f3: "Full MEO + local SEO strategy", plan3_f4: "E-commerce or booking integration", plan3_f5: "Digital workflow audit", plan3_f6: "Automation setup", plan3_f7: "3 months SNS management", plan3_f8: "Priority support",
    plan_cta: "Get Started →",
    contact_label: "Get In Touch", contact_title: "Let's Start Your Digital Journey",
    contact_sub: "Ready to go digital? We'll get back to you within 24 hours.",
    cm_fb: "Facebook", cm_ig: "Instagram", cm_email: "Email",
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
    footer_nav: "Navigation", footer_services: "Services", footer_lang: "Languages"
  },

  jp: {
    nav_home: "ホーム", nav_services: "サービス", nav_pricing: "価格", nav_about: "私たちについて",
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
    price_label: "料金プラン", price_title: "シンプルなプラン、確かな成果", price_sub: "追加料金なし。JPYとUSDのみを選択できます。",
    plan1_title: "🌐 Go Digital", plan1_sub: "ショップ・小規模事業向け", plan1_desc: "小さなショップやカフェに最適な、迅速でクリーンなデジタルローンチ。ウェブサイト公開とGoogleマップ最適化を含みます。",
    plan1_f1: "プロ仕様のランディングページ（1ページ）", plan1_f2: "モバイル最適化＆高速表示", plan1_f3: "Googleマップ（MEO）設定", plan1_f4: "ブランドQRコードメニュー", plan1_f5: "1言語（英語または日本語）", plan1_f6: "1〜2週間で納品", plan1_f7: "30日間アフターサポート",
    plan2_title: "📱 Build & Grow", plan2_sub: "日本展開を目指す海外事業向け", plan2_desc: "外国企業の日本進出に最適。ウェブ、SNS、マップを一体化し、しっかり立ち上げます。",
    plan2_f1: "フルウェブサイト（最大5ページ）", plan2_f2: "バイリンガルコンテンツ（英語+日本語）", plan2_f3: "Googleマップ（MEO）最適化", plan2_f4: "SNSプロフィール設定（IG+FB）", plan2_f5: "1ヶ月のコンテンツ管理", plan2_f6: "3〜4週間納品", plan2_f7: "60日間サポート",
    plan3_title: "⚡ Full Digital", plan3_sub: "本格的なデジタル変革向け", plan3_desc: "紙・FAX運用からの完全移行と、成長を見据えたデジタルシステム構築。",
    plan3_f1: "コーポレートサイト（無制限ページ）", plan3_f2: "トリリンガル（英語+日本語+ネパール語）", plan3_f3: "MEO+ローカルSEO戦略", plan3_f4: "EC/予約導入", plan3_f5: "デジタルワークフロー監査", plan3_f6: "自動化設定", plan3_f7: "SNS運用3ヶ月", plan3_f8: "優先サポート",
    plan_cta: "申し込む →",
    contact_label: "お問い合わせ", contact_title: "デジタルの旅を始めましょう",
    contact_sub: "デジタル化の準備ができたら、24時間以内にご返答します。",
    cm_fb: "フェイスブック", cm_ig: "インスタグラム", cm_email: "メール",
    form_title: "今すぐ申し込む — 無料",
    form_note: "ご記入ありがとうございました。24時間以内にご返信いたします。",
    form_title_success: "スマート始動。デジタル始動",
    form_name: "お名前", form_email: "メールアドレス", form_service: "ご希望のサービス",
    form_select: "サービスを選択...", form_opt1: "ウェブサイト制作",
    form_opt2: "SNS管理", form_opt3: "デジタルトランスフォーメーション", form_opt4: "すべてのサービス",
    form_msg: "メッセージ", form_submit: "送信する →",
    form_success: "✅ 送信完了！24時間以内にご連絡します。",
    footer_tagline: "スマートに始め、デジタルに始める。デジタルトランスフォーメーションの信頼できるパートナー。",
    footer_nav: "ナビゲーション", footer_services: "サービス", footer_lang: "言語"
  },

  np: {
    nav_home: "होम", nav_services: "सेवाहरू", nav_pricing: "मूल्य", nav_about: "हाम्रो बारे",
    nav_faq: "प्रश्नहरू", nav_contact: "सम्पर्क", nav_cta: "अहिले आवेदन गर्नुहोस् →",
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
    price_label: "प्याकेज मूल्य निर्धारण", price_title: "सरल प्लान, वास्तविक परिणाम", price_sub: "लुकेका शुल्क छैन। JPY र USD मात्र समर्थन।",
    plan1_title: "🌐 Go Digital", plan1_sub: "साना व्यवसाय र पसलका लागि", plan1_desc: "साना पसल, क्याफे वा एकल व्यवसायका लागि तत्काल, सफा डिजिटल सुरुवात। वेबसाइट र Google Maps अनुकूलित।",
    plan1_f1: "पेशेवर ल्यान्डिङ पेज (1 पृष्ठ)", plan1_f2: "मोबाइल-अनुकूल र छिटो लोड", plan1_f3: "Google Maps (MEO) सेटअप", plan1_f4: "ब्रान्डेड QR कोड मेनु", plan1_f5: "1 भाषा (EN या JP)", plan1_f6: "1-2 हप्ता भित्र डेलिभरी", plan1_f7: "30 दिन पोस्ट-लन्च समर्थन",
    plan2_title: "📱 Build & Grow", plan2_sub: "जापान प्रवेश गर्ने विदेशी व्यवसायका लागि", plan2_desc: "जापानमा प्रवेश गर्न चाहने व्यवसायका लागि पूरा प्याकेज। वेबसाइट, SNS, Maps — सबै जडान र अनलाइन।",
    plan2_f1: " पूर्ण वेबसाइट (अधिकतम 5 पृष्ठ)", plan2_f2: "द्विभाषिक सामग्री (EN+JP)", plan2_f3: "Google Maps (MEO) अनुकूलन", plan2_f4: "SNS प्रोफाइल सेटअप (IG+FB)", plan2_f5: "1 महिना सामग्री व्यवस्थापन", plan2_f6: "3-4 हप्ता डेलिभरी", plan2_f7: "60 दिन समर्थन",
    plan3_title: "⚡ Full Digital", plan3_sub: "गम्भीर रूपान्तरणका लागि", plan3_desc: "कागज र फ्याक्स प्रक्रियाबाट आधुनिक डिजिटल प्रणालीमा स्विच गर्ने समग्र सुविधा।",
    plan3_f1: "कर्पोरेट वेबसाइट (असीमित पृष्ठ)", plan3_f2: "त्रिभाषी समर्थन (EN+JP+NP)", plan3_f3: "पूर्ण MEO + स्थानीय SEO रणनीति", plan3_f4: "ई-कमर्स / बुकिंग इंटीग्रेशन", plan3_f5: "डिजिटल वर्कफ्लो अडिट", plan3_f6: "स्वचालन सेटअप", plan3_f7: "3 महिना SNS व्यवस्थापन", plan3_f8: "प्राथमिकता समर्थन",
    plan_cta: "सुरु गर्नुहोस् →",
    contact_label: "सम्पर्क", contact_title: "तपाईंको डिजिटल यात्रा सुरु गरौं",
    contact_sub: "डिजिटल बन्न तयार? हामी २४ घण्टाभित्र जवाफ दिनेछौं।",
    cm_fb: "फेसबुक", cm_ig: "इन्स्टाग्राम", cm_email: "इमेल",
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
    footer_nav: "नेभिगेशन", footer_services: "सेवाहरू", footer_lang: "भाषाहरू"
  }
};

let currentLang = 'en';
let currentCurrency = 'jpy';

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
const pricingData = { s: 49800, g: 128000, t: 268000 };

function formatPrice(value, currency) {
  if (currency === 'usd') return `$${(Math.round(value * currencyRates.usd)).toLocaleString('en-US')}`;
  return `¥${value.toLocaleString('ja-JP')}`;
}

function setCurrency(currency) {
  currentCurrency = currency;
  document.getElementById('btn-jpy').classList.toggle('active', currency === 'jpy');
  document.getElementById('btn-usd').classList.toggle('active', currency === 'usd');

  const sym = currency === 'jpy' ? '¥' : '$';
  const noteText = currency === 'usd' ? ' (approx.)' : '';

  const noteTexts = {
    en: { s: 'One-time payment', g: 'One-time + optional retainer', t: 'One-time payment' },
    jp: { s: '一括支払い', g: '一括支払い + 任意の顧問', t: '一括支払い' },
    np: { s: 'एक पटक तिर्नुहोस्', g: 'एक पटक + वैकल्पिक रिटेनर', t: 'एक पटक तिर्नुहोस्' }
  };

  ['s', 'g', 't'].forEach(key => {
    const priceEl = document.getElementById(`${key}-price`);
    const symEl = document.getElementById(`${key}-sym`);
    const noteEl = document.getElementById(`${key}-note`);
    if (priceEl) priceEl.textContent = currency === 'jpy' ? pricingData[key].toLocaleString('ja-JP') : Math.round(pricingData[key] * currencyRates.usd).toLocaleString('en-US');
    if (symEl) symEl.textContent = sym;
    if (noteEl) noteEl.textContent = `${noteTexts[currentLang]?.[key] || noteTexts.en[key]}${noteText}`;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setCurrency('jpy');
  document.getElementById('btn-jpy')?.addEventListener('click', () => setCurrency('jpy'));
  document.getElementById('btn-usd')?.addEventListener('click', () => setCurrency('usd'));
});

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

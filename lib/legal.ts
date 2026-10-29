import type { Locale } from "@/lib/copy";

/* Plain-language policies that describe what this website actually does.
   Each product (ResumeJP, VisaTomo) publishes its own policies on its own site. */

export const LEGAL_UPDATED = "2026-10-29";

type Section = { heading: string; body: string[] };
type Doc = { title: string; intro: string; updated: string; sections: Section[] };

const privacy: Record<Locale, Doc> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated",
    intro:
      "DIGIスタート (“we”) respects your privacy. This policy explains what personal information this website collects, why, and the choices you have. It is written to follow Japan’s Act on the Protection of Personal Information (APPI).",
    sections: [
      {
        heading: "What we collect",
        body: [
          "Contact form: your name, email address, the topic you choose, your message and the language you were viewing the site in.",
          "Language preference: your EN / 日本語 choice is saved in your own browser (local storage) so the site remembers it. It is never sent to us.",
          "We do not use advertising trackers, and we do not sell personal information.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To reply to your enquiry, prepare a proposal, or add you to a product waitlist you asked to join (for example, Sarathi Connect).",
          "We use it only for these purposes and keep it only as long as needed for them.",
        ],
      },
      {
        heading: "Service providers",
        body: [
          "Contact form submissions are delivered to us through Formspree, Inc. (United States), which processes them on our behalf. Messages you send us on LINE or by email are handled by those services under their own policies.",
          "When information is handled outside Japan, we take reasonable steps to make sure it is protected as required by the APPI.",
        ],
      },
      {
        heading: "Our products",
        body: [
          "ResumeJP and VisaTomo are separate websites with their own privacy policies. Please read those policies when you use them.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask us to disclose, correct, stop using or delete the personal information we hold about you. Email us and we will respond without undue delay.",
        ],
      },
      {
        heading: "Security",
        body: [
          "This site is served over HTTPS. We limit access to enquiries to the people who need it to reply to you.",
        ],
      },
      {
        heading: "Changes and contact",
        body: [
          "We may update this policy; the date above shows the latest version.",
          "Questions or requests: digistartnp@gmail.com",
        ],
      },
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    updated: "最終更新日",
    intro:
      "DIGIスタート（以下「当社」）は、お客様のプライバシーを尊重します。本ポリシーでは、本ウェブサイトが取得する個人情報、その利用目的、およびお客様の選択肢について説明します。本ポリシーは個人情報の保護に関する法律（個人情報保護法）に沿って作成しています。",
    sections: [
      {
        heading: "取得する情報",
        body: [
          "お問い合わせフォーム：お名前、メールアドレス、選択したご用件、メッセージ、および閲覧時の表示言語。",
          "表示言語の設定：EN / 日本語 の選択はお客様のブラウザ（ローカルストレージ）にのみ保存され、当社に送信されることはありません。",
          "広告用のトラッキングは使用しておらず、個人情報を販売することもありません。",
        ],
      },
      {
        heading: "利用目的",
        body: [
          "お問い合わせへの回答、ご提案の作成、およびお客様がご希望されたプロダクトのウェイトリスト（例：Sarathi Connect）への登録のために利用します。",
          "上記の目的以外には利用せず、目的に必要な期間のみ保管します。",
        ],
      },
      {
        heading: "委託先",
        body: [
          "お問い合わせフォームの送信内容は、当社の委託先である Formspree, Inc.（米国）を通じて当社に届きます。LINE やメールでいただいたメッセージは、各サービスのポリシーに従って取り扱われます。",
          "日本国外で情報が取り扱われる場合、個人情報保護法の定めに従い、適切な保護のための措置を講じます。",
        ],
      },
      {
        heading: "当社のプロダクト",
        body: [
          "ResumeJP と VisaTomo は独立したウェブサイトであり、それぞれ独自のプライバシーポリシーを定めています。ご利用の際は各ポリシーをご確認ください。",
        ],
      },
      {
        heading: "お客様の権利",
        body: [
          "当社が保有するお客様の個人情報について、開示・訂正・利用停止・削除をご請求いただけます。メールでご連絡いただければ、遅滞なく対応いたします。",
        ],
      },
      {
        heading: "安全管理",
        body: ["本サイトは HTTPS で提供しています。お問い合わせ内容へのアクセスは、回答に必要な担当者に限定しています。"],
      },
      {
        heading: "改定とお問い合わせ",
        body: ["本ポリシーは改定されることがあります。上記の日付が最新版を示します。", "ご質問・ご請求：digistartnp@gmail.com"],
      },
    ],
  },
};

const terms: Record<Locale, Doc> = {
  en: {
    title: "Terms of Use",
    updated: "Last updated",
    intro:
      "These terms apply to your use of this website (digistartjp.com). By using the site you agree to them.",
    sections: [
      {
        heading: "About this site",
        body: [
          "This site introduces DIGIスタート, our products and our development services. Information here is provided for general purposes and may change without notice.",
        ],
      },
      {
        heading: "Our products",
        body: [
          "ResumeJP and VisaTomo are offered on their own websites under their own terms. VisaTomo is a self-service tool and not a law firm or 行政書士; nothing on this site is legal advice.",
          "Sarathi Connect is in development. Descriptions and screenshots show a prototype and may change before release.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The digistart name, logo, design and content of this site belong to DIGIスタート unless stated otherwise. Please don’t copy or reuse them without permission. Product screenshots are shown to illustrate our own products.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "Don’t misuse the site — for example by sending spam through the contact form, trying to break its security, or interfering with its operation.",
        ],
      },
      {
        heading: "Links",
        body: [
          "We link to other websites, including our products and social profiles. We aren’t responsible for the content or practices of sites we don’t control.",
        ],
      },
      {
        heading: "No warranty and limitation of liability",
        body: [
          "The site is provided “as is”. To the extent permitted by law, we are not liable for damages arising from your use of the site, except in cases of our intentional misconduct or gross negligence.",
        ],
      },
      {
        heading: "Client projects",
        body: [
          "Development work for clients is governed by a separate written agreement, which takes priority over these terms.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of Japan. If the English and Japanese versions differ, the Japanese version prevails.",
          "Questions: digistartnp@gmail.com",
        ],
      },
    ],
  },
  ja: {
    title: "利用規約",
    updated: "最終更新日",
    intro: "本規約は、本ウェブサイト（digistartjp.com）のご利用に適用されます。本サイトをご利用いただくことで、本規約に同意したものとみなされます。",
    sections: [
      {
        heading: "本サイトについて",
        body: [
          "本サイトは、DIGIスタート、当社のプロダクトおよび開発サービスを紹介するものです。掲載情報は一般的な情報提供を目的としており、予告なく変更される場合があります。",
        ],
      },
      {
        heading: "当社のプロダクト",
        body: [
          "ResumeJP と VisaTomo は、それぞれのウェブサイトで各規約に基づき提供されています。VisaTomo はセルフサービスのツールであり、法律事務所や行政書士ではありません。本サイトの内容は法的助言ではありません。",
          "Sarathi Connect は開発中です。説明およびスクリーンショットはプロトタイプのものであり、公開までに変更される場合があります。",
        ],
      },
      {
        heading: "知的財産",
        body: [
          "本サイトの digistart の名称、ロゴ、デザインおよびコンテンツは、別途記載がない限り DIGIスタートに帰属します。許可なく複製・転用しないでください。プロダクトのスクリーンショットは当社プロダクトの説明のために掲載しています。",
        ],
      },
      {
        heading: "禁止事項",
        body: ["お問い合わせフォームからのスパム送信、セキュリティの侵害の試み、運営の妨害など、本サイトを不正に利用しないでください。"],
      },
      {
        heading: "外部リンク",
        body: ["当社は、当社プロダクトや SNS を含む外部サイトへリンクしています。当社が管理していないサイトの内容や運営について、当社は責任を負いません。"],
      },
      {
        heading: "保証の否認および責任の制限",
        body: [
          "本サイトは現状有姿で提供されます。法令で認められる範囲において、当社の故意または重過失による場合を除き、本サイトの利用により生じた損害について当社は責任を負いません。",
        ],
      },
      {
        heading: "受託開発",
        body: ["お客様からの受託開発は、別途締結する書面の契約に従うものとし、当該契約が本規約に優先します。"],
      },
      {
        heading: "準拠法",
        body: ["本規約は日本法に準拠します。英語版と日本語版に相違がある場合は、日本語版が優先します。", "お問い合わせ：digistartnp@gmail.com"],
      },
    ],
  },
};

export const legal = { privacy, terms };
export type LegalKind = keyof typeof legal;

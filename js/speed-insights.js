/* ============================================================
   DIGIスタート — Vercel Speed Insights
   js/speed-insights.js
   ============================================================ */

// Import and initialize Vercel Speed Insights
import { inject } from '../node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// This will automatically track Web Vitals and performance metrics
// Note: Speed Insights only collects data in production (when deployed to Vercel)
inject();

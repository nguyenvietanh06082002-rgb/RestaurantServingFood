# `services/analytics/` — Tracking

Lớp trung gian cho công cụ analytics (Google Analytics, Mixpanel, Amplitude...).

## Ví dụ API
```js
analytics.init();
analytics.identify(userId, { plan: 'pro' });
analytics.track('checkout_completed', { amount: 100 });
analytics.page('/dashboard');
```

## Quy tắc
- Component chỉ gọi `analytics.*`, không gọi SDK trực tiếp.
- Bật/tắt qua `appConfig.enableAnalytics`; ở môi trường dev chỉ `console.log`.
- Tên event định nghĩa tập trung (ví dụ `constants/analyticsEvents.js`).

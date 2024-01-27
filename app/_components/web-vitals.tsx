"use client";
import React from "react";
import { useReportWebVitals } from "next/web-vitals";
// WebVitals.tsx

const WebVitals: React.FC = () => {
  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric);
    const url = "https://abtech.aadeshbhujbal.online/analytics";

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: "POST", keepalive: true });
    }
  });

  // You can return JSX if needed
  return null;
};

export default WebVitals;

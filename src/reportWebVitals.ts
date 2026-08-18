import type { ReportCallback } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
    if (onPerfEntry) {
        import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
            onCLS(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
            onINP(onPerfEntry);
        }).catch(() => {});
    }
};

export default reportWebVitals;

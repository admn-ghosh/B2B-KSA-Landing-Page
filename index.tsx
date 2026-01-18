import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppAr from './App-ar';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const LanguageManager: React.FC = () => {
  const [lang, setLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const handleSwitch = (e: any) => {
      const newLang = e.detail;
      setLang(newLang);
      
      const url = new URL(window.location.href);
      if (newLang === 'ar') {
        url.searchParams.set('lang', 'ar');
      } else {
        url.searchParams.delete('lang');
      }

      if (window.location.protocol !== 'blob:') {
        try {
          window.history.pushState({}, '', url.href);
        } catch (err) {
          console.warn('History pushState failed.', err);
        }
      }
    };

    window.addEventListener('switch-language', handleSwitch);
    return () => window.removeEventListener('switch-language', handleSwitch);
  }, [lang]);

  return (
    <React.StrictMode>
      {lang === 'ar' ? <AppAr /> : <App />}
    </React.StrictMode>
  );
};

root.render(<LanguageManager />);
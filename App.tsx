import React, { useState, useEffect, Suspense, lazy } from 'react';
import TopStrip from './components/TopStrip';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

// Lazy load components below the fold to improve initial bundle size and TBT
const Features = lazy(() => import('./components/Features'));
const Certifications = lazy(() => import('./components/Certifications'));
const ProductSection = lazy(() => import('./components/ProductSection'));
const ProjectsDelivery = lazy(() => import('./components/ProjectsDelivery'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));

// Arabic Components - Lazy loaded
const TopStripAr = lazy(() => import('./ar/TopStrip'));
const HeroAr = lazy(() => import('./ar/Hero'));
const FeaturesAr = lazy(() => import('./ar/Features'));
const CertificationsAr = lazy(() => import('./ar/Certifications'));
const ProductSectionAr = lazy(() => import('./ar/ProductSection'));
const ProjectsDeliveryAr = lazy(() => import('./ar/ProjectsDelivery'));
const ProjectGalleryAr = lazy(() => import('./ar/ProjectGallery'));
const TestimonialsAr = lazy(() => import('./ar/Testimonials'));
const FAQAr = lazy(() => import('./ar/FAQ'));
const FooterAr = lazy(() => import('./ar/Footer'));
const StickyCTAAr = lazy(() => import('./ar/StickyCTA'));

// Loading component for Suspense
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center bg-stone-50">
    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-700 rounded-full animate-spin"></div>
  </div>
);

interface AppProps {
  initialLanguage?: 'en' | 'ar';
}

function App({ initialLanguage = 'en' }: AppProps) {
  const [lang, setLang] = useState<'en' | 'ar'>(initialLanguage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Synchronize HTML dir attribute and lang for RTL support & SEO
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update Document Title
    if (lang === 'ar') {
      document.title = "مورد رائد للألواح العازلة في السعودية | مجموعة غوش";
    } else {
      document.title = "Leading Sandwich Panels Supplier in Saudi Arabia | Ghosh Group";
    }

    // Update URL without reloading
    try {
      const url = new URL(window.location.href);
      if (lang === 'ar') {
        url.searchParams.set('lang', 'ar');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      console.warn("Could not update URL state:", e);
    }
    
    setIsLoaded(true);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (!isLoaded) return <div className="min-h-screen bg-stone-50" />;

  if (lang === 'ar') {
    return (
      <div className="min-h-screen bg-stone-50 font-sans" dir="rtl" style={{ fontFamily: '"Tajawal", sans-serif' }}>
        <Suspense fallback={<SectionLoader />}>
          <TopStripAr onLanguageSwitch={toggleLanguage} />
          <main>
            <HeroAr />
            <FeaturesAr />
            <ProjectGalleryAr />
            <CertificationsAr />
            <ProductSectionAr />
            <ProjectsDeliveryAr />
            <TestimonialsAr />
            <FAQAr />
          </main>
          <FooterAr />
          <StickyCTAAr />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans" dir="ltr" style={{ fontFamily: '"Inter", sans-serif' }}>
      <TopStrip onLanguageSwitch={toggleLanguage} />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Features />
          <ProjectGallery />
          <Certifications />
          <ProductSection />
          <ProjectsDelivery />
          <Testimonials />
          <FAQ />
        </Suspense>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';

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

const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center bg-stone-50">
    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-700 rounded-full animate-spin"></div>
  </div>
);

function AppAr() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans" dir="rtl">
      <Suspense fallback={<SectionLoader />}>
        <TopStripAr />
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

export default AppAr;

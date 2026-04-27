
'use client';

import { useEffect } from 'react';

// ── Section components ──
import Navbar         from '../components/Navbar';
import Hero           from '../components/Hero';
import TruthSection   from '../components/TruthSection';
import WhySection     from '../components/WhySection';
import NumbersSection from '../components/NumbersSection';
import FormatsSection from '../components/FormatsSection';
import SupportSection from '../components/SupportSection';
import CtaSection     from '../components/CtaSection';
import Footer         from '../components/Footer';

import BKPPhotoGallery from '../components/imageSection';

export default function FranchisePage() {

  return (
    <>

      <Navbar />
      <main>
        <Hero />
        <TruthSection />
        <BKPPhotoGallery />
        <WhySection />
        <NumbersSection />
        <FormatsSection />
        <SupportSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}

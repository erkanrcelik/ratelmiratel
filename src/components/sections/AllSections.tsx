import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';

// Lazy load sections for better performance
const ProcessSection = lazy(() => import('./ProcessSection'));
const AboutSection = lazy(() => import('./AboutSection'));
const ServicesListSection = lazy(() => import('./ServicesListSection'));
const ReferencesSection = lazy(() => import('./ReferencesSection'));
const ContactSection = lazy(() => import('./ContactSection'));

// Loading component
const SectionLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-3 h-3 bg-[#0b6e99] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div
        className="w-3 h-3 bg-[#0c80b3] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.2
        }}
      />
      <motion.div
        className="w-3 h-3 bg-[#0894d1] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.4
        }}
      />
      <span className="text-white ml-4 font-medium">Loading...</span>
    </motion.div>
  </div>
);

const AllSections: React.FC = () => {
  return (
    <div className="w-full">
      {/* Process Section */}
      <Suspense fallback={<SectionLoader />}>
        <ProcessSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      {/* Services List Section */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesListSection />
      </Suspense>

      {/* References Section */}
      <Suspense fallback={<SectionLoader />}>
        <ReferencesSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default AllSections;

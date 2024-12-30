import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation 
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gallery } from './components/gallery/gallery';
import { 
  Leaf,
  Menu,
  X,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { Toaster } from 'sonner';
import Navigation from './components/nav/nav';
import { Home } from './components/home/home';
import { About } from './components/home/home';
import { Impact } from './components/home/home';
import { CaseStudies, Partnerships, Programs, Resources } from './components/casestudies/casestudies';
import { Services } from './components/home/home';
import Footer from './components/footer/footer';
import ContactPage from './components/contact/contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <Toaster position="top-right" />
        <PageTransition>
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </PageTransition>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <NavLink
        to="/"
        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700"
      >
        <span>Return Home</span>
        <ExternalLink className="h-4 w-4" />
      </NavLink>
    </div>
  </div>
);

export default App;


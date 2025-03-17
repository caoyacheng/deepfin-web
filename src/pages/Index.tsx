
import { useEffect, useCallback, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';

const Index = () => {
  // 使用ref来跟踪是否已经设置过事件监听器
  const listenersSetupRef = useRef(false);
  
  // Define the handler as a callback to maintain consistency
  const handleAnchorClick = useCallback((e: Event) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const targetId = target.getAttribute('href');
    
    if (!targetId || targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    // 确保事件监听器只设置一次
    if (listenersSetupRef.current) return;
    
    // Setup anchor link smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    // Add event listeners
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Add page load animation
    document.body.classList.add('animate-fade-in');
    
    listenersSetupRef.current = true;
    
    // Clean up event listeners on component unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [handleAnchorClick]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

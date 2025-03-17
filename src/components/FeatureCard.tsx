
import { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0,
  className
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (cardRef.current && !hasAnimated) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass rounded-2xl p-6 relative transition-all duration-300",
        "border border-white/20 hover:border-accent/20",
        "flex flex-col h-full",
        isHovered ? "shadow-lg translate-y-[-4px] bg-white/80" : "shadow-sm bg-white/70", // 增强悬停效果
        isVisible ? "opacity-100 animate-scale" : "opacity-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div 
          className={cn(
            "rounded-full p-3",
            "transition-all duration-300",
            isHovered ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent/90" // 优化图标容器的悬停效果
          )}
        >
          <Icon size={24} className={cn(
            "transition-transform duration-300", 
            isHovered ? "scale-110 rotate-3" : "scale-100" // 添加轻微旋转效果
          )} />
        </div>
        <h3 className="text-xl font-display font-medium">{title}</h3>
      </div>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
      
      {/* 添加微妙的阅读更多指示器 */}
      <div className={cn(
        "mt-auto pt-3 text-xs font-medium text-accent/70 self-end transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        了解更多
      </div>
    </div>
  );
};

export default FeatureCard;

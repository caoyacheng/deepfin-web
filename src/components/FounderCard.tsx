
import { useState } from 'react';
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface FounderProps {
  founder: {
    name: string;
    title: string;
    bio: string;
    image: string;
    expertise: string[];
  };
  delay?: number;
}

export const FounderCard = ({ founder, delay = 0 }: FounderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, title, bio, image, expertise } = founder;
  const initials = name.split('').slice(0, 2).join('');

  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-sm border border-border",
        "hover:shadow-md transition-all duration-300",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage src={image} alt={name} className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )} />
            <AvatarFallback className="w-full h-full text-3xl">{initials}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className={cn(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4",
          "transform transition-all duration-300",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill) => (
              <span 
                key={skill} 
                className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-accent text-sm font-medium">{title}</p>
        
        <div className={cn(
          "mt-3 pt-3 border-t border-border",
          "flex items-start space-x-2"
        )}>
          <div className="flex-shrink-0 mt-0.5">
            <Briefcase className="w-4 h-4 text-secondary" />
          </div>
          <p className="text-secondary text-sm">{bio}</p>
        </div>
        
        <button className={cn(
          "w-full mt-4 pt-3 flex items-center justify-center text-sm font-medium",
          "text-accent border-t border-border transition-colors",
          "hover:text-accent/80"
        )}>
          查看详情 <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

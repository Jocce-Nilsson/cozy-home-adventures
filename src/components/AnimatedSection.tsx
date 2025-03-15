
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

const AnimatedSection = ({
  children,
  className,
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (direction) {
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

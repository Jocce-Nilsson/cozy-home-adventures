
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04')`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="container relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in">
          Your everyday home adventures
        </div>
        
        <h1 
          className="font-bold leading-tight animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Rediscover the Joy <br className="hidden sm:block" />
          of Home Activities
        </h1>
        
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Simple moments at home can become extraordinary experiences. 
          Explore meaningful activities that bring happiness to your everyday life.
        </p>
        
        <div 
          className="pt-4 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#activities"
            className={cn(
              "px-6 py-3 font-medium rounded-full",
              "bg-white text-gray-900 hover:bg-gray-100",
              "shadow-sm transition-all duration-300"
            )}
          >
            Explore Activities
          </a>
          <a
            href="#about"
            className={cn(
              "px-6 py-3 font-medium rounded-full",
              "bg-white/20 backdrop-blur-sm hover:bg-white/30",
              "transition-all duration-300"
            )}
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#activities" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

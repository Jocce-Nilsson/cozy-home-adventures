
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const activities = [
  {
    id: 1,
    title: "Baking Cinnamon Buns",
    description: "Fill your home with the irresistible aroma of freshly baked cinnamon buns, a perfect weekend activity for the whole family.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=2070&auto=format&fit=crop",
    duration: "2 hours",
    difficulty: "Medium" as const,
    category: "Baking",
  },
  {
    id: 2,
    title: "Movie Marathon",
    description: "Transform your living room into the ultimate cinema experience with blankets, popcorn, and your favorite film series.",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071&auto=format&fit=crop",
    duration: "4+ hours",
    difficulty: "Easy" as const,
    category: "Entertainment",
  },
  {
    id: 3,
    title: "Making the Bed",
    description: "Turn this daily chore into a meditative practice. Learn how to create a hotel-quality bed that you'll look forward to at the end of the day.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop",
    duration: "15 minutes",
    difficulty: "Easy" as const,
    category: "Home Care",
  },
  {
    id: 4,
    title: "Cooking with Family",
    description: "Share family recipes and create new memories while preparing a delicious dinner together with loved ones.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    duration: "1-2 hours",
    difficulty: "Medium" as const,
    category: "Cooking",
  },
  {
    id: 5,
    title: "Indoor Gardening",
    description: "Bring nature inside by creating your own indoor garden. Learn how to care for houseplants that purify your air and brighten your space.",
    image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=2071&auto=format&fit=crop",
    duration: "Ongoing",
    difficulty: "Medium" as const,
    category: "Gardening",
  },
  {
    id: 6,
    title: "Reading Corner",
    description: "Create a cozy reading nook and escape into fascinating worlds through books, perfect for rainy days or quiet evenings.",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1924&auto=format&fit=crop",
    duration: "Flexible",
    difficulty: "Easy" as const,
    category: "Relaxation",
  },
];

const popularActivities = [
  {
    id: 1,
    title: "Homemade Pizza Night",
    description: "Create the perfect pizza with your favorite toppings, a fun activity that combines cooking and family time.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    duration: "1.5 hours",
    difficulty: "Medium" as const,
    category: "Cooking",
  },
  {
    id: 2,
    title: "Board Game Evening",
    description: "Disconnect from screens and reconnect with loved ones through classic board games and friendly competition.",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=2071&auto=format&fit=crop",
    duration: "2-3 hours",
    difficulty: "Easy" as const,
    category: "Entertainment",
  },
  {
    id: 3,
    title: "Home Spa Day",
    description: "Transform your bathroom into a luxury spa with DIY face masks, relaxing music, and aromatic candles.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    duration: "2 hours",
    difficulty: "Easy" as const,
    category: "Self-care",
  },
];

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section id="activities" className="section-container bg-background">
          <div className="container-tight">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-3">
                  Discover
                </span>
                <h2 className="text-3xl md:text-4xl font-medium">
                  Home Activities
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore a variety of activities you can enjoy without leaving your home, perfect for any day of the week.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <AnimatedSection key={activity.id} delay={index * 100}>
                  <ActivityCard {...activity} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="section-container bg-secondary">
          <div className="container-tight">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070&auto=format&fit=crop"
                    alt="Cozy home environment"
                    className="rounded-2xl shadow-lg relative z-10"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right">
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-3">
                  About CozyHome
                </span>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  Rediscovering Joy in Everyday Moments
                </h2>
                <p className="text-muted-foreground mb-4">
                  CozyHome was born from the belief that extraordinary experiences don't always require exotic destinations or expensive tickets. Sometimes, the most meaningful moments happen right in our own homes.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our mission is to help you transform ordinary activities into memorable experiences, reconnect with yourself and your loved ones, and find joy in the simplicity of home life.
                </p>
                <a
                  href="#activities"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "shadow-sm transition-all duration-300"
                  )}
                >
                  Explore Activities
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        <section id="popular" className="section-container bg-background">
          <div className="container-tight">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-3">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-medium">
                  Popular Activities
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our community's favorite home activities that bring the most joy and satisfaction.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularActivities.map((activity, index) => (
                <AnimatedSection key={activity.id} delay={index * 100}>
                  <ActivityCard {...activity} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact" className="section-container bg-gradient-to-b from-secondary to-background">
          <div className="container-tight">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  Ready to Rediscover Your Home?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Subscribe to our newsletter for weekly activity ideas, tips, and inspiration.
                </p>
                <div className="max-w-md mx-auto">
                  <form className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-l-full border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      type="submit"
                      className={cn(
                        "px-6 py-3 bg-primary text-primary-foreground font-medium rounded-r-full",
                        "transition-colors hover:bg-primary/90"
                      )}
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

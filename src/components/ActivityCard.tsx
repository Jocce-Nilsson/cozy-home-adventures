
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  category?: string;
  className?: string;
}

const ActivityCard = ({
  title,
  description,
  image,
  duration,
  difficulty,
  category,
  className,
}: ActivityCardProps) => {
  return (
    <div className={cn("activity-card group", className)}>
      <img
        src={image}
        alt={title}
        className="transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="activity-title">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        
        <div className="flex gap-2 mb-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {category && (
            <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
              {category}
            </span>
          )}
          {duration && (
            <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
              {duration}
            </span>
          )}
          {difficulty && (
            <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
              {difficulty}
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-200 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;

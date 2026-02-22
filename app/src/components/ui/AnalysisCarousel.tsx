import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { PremiumCard } from '@/components/ui/PremiumCard';

interface AnalysisItem {
  title: string;
  content: string;
}

interface AnalysisCarouselProps {
  items: AnalysisItem[];
  variant?: 'amber' | 'purple' | 'blue' | 'rose' | 'emerald';
}

export const AnalysisCarousel: React.FC<AnalysisCarouselProps> = ({ items, variant = 'amber' }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full relative px-2 py-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <PremiumCard
                  title={item.title}
                  variant={variant}
                  height="fixed" // Enforce fixed height for consistent carousel
                  className="h-[400px]" // Taller for deep analysis
                >
                  {item.content}
                </PremiumCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation buttons - visible on md and up */}
        <CarouselPrevious className="hidden md:flex -left-4 border-amber-500/30 text-amber-500 hover:bg-amber-950/50" />
        <CarouselNext className="hidden md:flex -right-4 border-amber-500/30 text-amber-500 hover:bg-amber-950/50" />
      </Carousel>
      {/* Mobile Swipe Hint */}
      <div className="flex justify-center gap-1.5 mt-4 md:hidden">
        {items.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
        ))}
      </div>
    </div>
  );
};

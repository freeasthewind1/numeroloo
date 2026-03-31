import React from 'react';
import { Sparkles, Hexagon, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10">
              <Hexagon className="w-10 h-10 text-amber-500/20 fill-amber-500/10 stroke-1" />
              <Star className="absolute w-5 h-5 text-amber-400 fill-amber-400/50 animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-amber-500">
                NUMEROLOGY
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500/60 font-medium">
                Master Wisdom
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Future: Profile Icon or Menu */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className={cn("relative z-10 container max-w-md mx-auto px-4 py-6 md:px-0 md:py-8", className)}>
        {children}
      </main>

      {/* Spacer for Bottom Nav */}
      <div className="h-24" />
    </div>
  );
};

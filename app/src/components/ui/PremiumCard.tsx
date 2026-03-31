import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PremiumCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'amber' | 'purple' | 'blue' | 'rose' | 'emerald';
  height?: 'auto' | 'fixed'; // fixed = h-80 with scroll
}

const variants = {
  default: "bg-slate-900/40 border-slate-800",
  amber: "bg-amber-950/20 border-amber-500/30 shadow-[0_0_15px_-3px_rgba(245,158,11,0.1)]",
  purple: "bg-purple-950/20 border-purple-500/30 shadow-[0_0_15px_-3px_rgba(168,85,247,0.1)]",
  blue: "bg-blue-950/20 border-blue-500/30 shadow-[0_0_15px_-3px_rgba(59,130,246,0.1)]",
  rose: "bg-rose-950/20 border-rose-500/30 shadow-[0_0_15px_-3px_rgba(244,63,94,0.1)]",
  emerald: "bg-emerald-950/20 border-emerald-500/30 shadow-[0_0_15px_-3px_rgba(16,185,129,0.1)]"
};

export const PremiumCard: React.FC<PremiumCardProps> = ({
  title,
  subtitle,
  children,
  className,
  variant = 'default',
  height = 'auto'
}) => {
  return (
    <Card
      className={cn(
        "backdrop-blur-xl border transition-all duration-300 hover:scale-[1.01]",
        variants[variant],
        height === 'fixed' ? "h-96 flex flex-col" : "",
        className
      )}
    >
      {(title || subtitle) && (
        <CardHeader className="pb-2">
          {title && (
            <CardTitle className={cn(
              "text-lg font-bold tracking-tight uppercase mystic-font",
              variant === 'amber' ? "text-amber-100" : "text-slate-100"
            )}>
              {title}
            </CardTitle>
          )}
          {subtitle && (
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              {subtitle}
            </p>
          )}
        </CardHeader>
      )}

      <CardContent className={cn("p-6 pt-0", height === 'fixed' ? "flex-1 min-h-0" : "")}>
        {height === 'fixed' ? (
          <ScrollArea className="h-full pr-4">
            <div className="text-sm leading-relaxed text-slate-300 font-medium pb-2">
              {children}
            </div>
          </ScrollArea>
        ) : (
          <div className="text-sm leading-relaxed text-slate-300 font-medium">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

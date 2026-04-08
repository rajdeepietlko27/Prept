"use client"

import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { cn } from '@/lib/utils';

export const StarsBackgrounds = () => {
  return (
    <StarsBackground
      starColor="#FFF"  // hardcoded white since you're always dark mode
      className={cn(
        'absolute inset-0 flex items-center justify-center rounded-xl',
        'bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]'
      )}
    />
  );
};
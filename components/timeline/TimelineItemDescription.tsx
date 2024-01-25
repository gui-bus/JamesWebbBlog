import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export const TimelineItemDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
};
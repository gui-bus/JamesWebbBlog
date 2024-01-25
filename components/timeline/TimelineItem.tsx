import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export type TimelineItemProps = {
  title: ReactNode;
  bullet?: ReactNode;
  children: ReactNode;
  isLast?: boolean;
  isActive: boolean;
  isActiveBullet: boolean;
  className?: string;
  bulletSize: number;
  lineSize: number;
  href: string;
};

export const TimelineItemBullet = ({
  children,
  isActive,
  bulletSize,
  lineSize,
}: {
  children?: ReactNode;
  isActive?: boolean;
  bulletSize: number;
  lineSize: number;
}) => {
  return (
    <div
      className={cn(
        'absolute border border-input top-0 rounded-full bg-webb flex items-center justify-center',
        isActive && 'border-primary'
      )}
      style={{
        width: bulletSize,
        height: bulletSize,
        left: -bulletSize / 2 - lineSize / 2,
        borderWidth: lineSize,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

export const TimelineItemTitle = ({ children }: { children: ReactNode }) => {
  return <div className="font-light text-base leading-none mb-1">{children}</div>;
};

export const TimelineItem = ({
  children,
  bullet,
  title,
  isLast,
  isActive,
  isActiveBullet,
  bulletSize,
  className,
  lineSize,
  ...props
}: TimelineItemProps) => {
  return (
    <li
      className={cn(
        'pl-8 pb-8 relative border-l font-semibold',
        isLast && 'border-l-transparent pb-0',
        isActive && !isLast && 'border-l-primary',
        className
      )}
      style={{
        borderLeftWidth: lineSize,
      }}
      {...props}
    >
      <TimelineItemBullet lineSize={lineSize} bulletSize={bulletSize} isActive={isActiveBullet}>
        {bullet}
      </TimelineItemBullet>
      <TimelineItemTitle>{title}</TimelineItemTitle>
      {children}
    </li>
  );
};
import cn from 'classnames';

type BulletsPaginationProps = {
  total: number;
  current: number;
  onChange: (index: number) => void;
};

export function BulletsPagination({
  total,
  current,
  onChange,
}: BulletsPaginationProps) {
  return (
    <div className="flex justify-center gap-2 mt-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={cn(
            'rounded-full transition-all duration-200 cursor-pointer',
            {
              'w-6 h-2 bg-accent-gold': index === current,
              'size-2 bg-surface-darker hover:bg-white/20': index !== current,
            },
          )}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
}

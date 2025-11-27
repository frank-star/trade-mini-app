import { Button } from '@/shared/ui';
import { IconBTC, IconChevronDown } from '@/assets';

type PairSelectProps = {
  pair?: string;
  leverage?: number;
  onClick?: () => void;
};

export function PairSelect({ pair, leverage, onClick }: PairSelectProps) {
  return (
    <Button onClick={onClick}>
      <IconBTC className="size-4" />

      <div className="space-x-1">
        <span className="text-xs text-white">{pair}</span>
        <span className="text-xxs font-normal text-white/50">{leverage}x</span>
      </div>

      <IconChevronDown className="size-4 text-white/70" />
    </Button>
  );
}

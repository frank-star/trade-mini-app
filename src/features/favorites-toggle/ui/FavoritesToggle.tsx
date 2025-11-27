import { Button } from '@/shared/ui';
import { IconHeart } from '@/assets';

type FavoritesToggleProps = {
  onToggle?: () => void;
};

export function FavoritesToggle({ onToggle }: FavoritesToggleProps) {
  return (
    <Button onClick={onToggle} onlyIcon>
      <IconHeart className="size-5" />
    </Button>
  );
}

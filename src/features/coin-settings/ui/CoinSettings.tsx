import { Button } from '@/shared/ui';
import { IconConfig } from '@/assets';

type CoinSettingsProps = {
  onClick?: () => void;
};

export function CoinSettings({ onClick }: CoinSettingsProps) {
  return (
    <Button onClick={onClick} onlyIcon>
      <IconConfig className="size-5" />
    </Button>
  );
}

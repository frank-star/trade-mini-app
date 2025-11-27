import { Button } from '@/shared/ui';

type OpenLongPositionProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export function OpenLongPosition({
  onClick,
  disabled = false,
}: OpenLongPositionProps) {
  return (
    <Button color="green" wide onClick={onClick} disabled={disabled}>
      Long
    </Button>
  );
}

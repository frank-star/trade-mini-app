import { Button } from '@/shared/ui';

type OpenShortPositionProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export function OpenShortPosition({
  onClick,
  disabled = false,
}: OpenShortPositionProps) {
  return (
    <Button color="red" wide onClick={onClick} disabled={disabled}>
      Short
    </Button>
  );
}

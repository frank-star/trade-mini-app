import { formatPrice } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';
import { IconUSDC, IconWallet, IconChevronDown } from '@/assets';

import { useWallet } from '@/features/connect-wallet';

export function SelectWallet() {
  const { wallet } = useWallet();

  return (
    <Button
      variant="bordered"
      className="flex items-center rounded-xl py-0! pl-2.5! pr-0!"
    >
      <IconUSDC className="size-4" />

      <span className="font-medium text-white text-xs">
        {wallet.balance ? formatPrice(wallet.balance) : '0.00'}
      </span>

      <IconChevronDown className="w-4 h-4 text-white/70" />

      <div className="size-[34px] rounded-r-[10px] flex items-center justify-center bg-main-gradient">
        <IconWallet className="size-4 text-background-dark" />
      </div>
    </Button>
  );
}

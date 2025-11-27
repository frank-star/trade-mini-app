import { Button, Spinner } from '@/shared/ui';

import { useWallet } from '../hooks/useWallet';

export function ConnectWallet() {
  const { connect, isLoading } = useWallet();

  return (
    <Button variant="gradient" onClick={connect} disabled={isLoading}>
      {isLoading && <Spinner size="sm" />}
      <span className="text-main-gradient">
        {isLoading ? 'Connecting...' : 'Connect Wallet'}
      </span>
    </Button>
  );
}

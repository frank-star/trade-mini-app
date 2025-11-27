import { type PropsWithChildren } from 'react';

import { useWalletMock } from '../hooks/useWalletMock';
import { WalletContext } from './wallet.context';

export function WalletProvider({ children }: PropsWithChildren) {
  const walletState = useWalletMock();

  return (
    <WalletContext.Provider value={walletState}>
      {children}
    </WalletContext.Provider>
  );
}

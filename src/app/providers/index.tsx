import { NavigationBar } from '@/widgets/NavigationBar';
import { WalletProvider } from '@/features/connect-wallet';

import { type PropsWithChildren } from 'react';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <WalletProvider>
      <div className="w-full max-w-lg min-h-screen p-3">
        {children}
        <NavigationBar />
      </div>
    </WalletProvider>
  );
}

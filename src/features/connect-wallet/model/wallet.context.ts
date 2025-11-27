import { createContext } from 'react';

import { useWalletMock } from '../hooks/useWalletMock';

export type WalletContextType = ReturnType<typeof useWalletMock>;

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined,
);
